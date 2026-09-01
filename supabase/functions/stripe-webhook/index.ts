import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';
import { createClient } from 'npm:@supabase/supabase-js@2.49.1';

const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY')!;
const stripeWebhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;
const stripe = new Stripe(stripeSecret, {
  appInfo: {
    name: 'Bolt Integration',
    version: '1.0.0',
  },
});

const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': '*',
};

Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const signature = req.headers.get('stripe-signature');

    if (!signature) {
      return new Response('No signature found', { status: 400 });
    }

    const body = await req.text();

    let event: Stripe.Event;

    try {
      event = await stripe.webhooks.constructEventAsync(body, signature, stripeWebhookSecret);
    } catch (error: any) {
      console.error(`Webhook signature verification failed: ${error.message}`);
      return new Response(`Webhook signature verification failed: ${error.message}`, { status: 400 });
    }

    EdgeRuntime.waitUntil(handleEvent(event));

    return Response.json({ received: true });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});

async function handleEvent(event: Stripe.Event) {
  const stripeData = event?.data?.object ?? {};

  if (!stripeData) {
    return;
  }

  if (!('customer' in stripeData)) {
    return;
  }

  // for one time payments, we only listen for the checkout.session.completed event
  if (event.type === 'payment_intent.succeeded' && event.data.object.invoice === null) {
    return;
  }

  const { customer: customerId } = stripeData;

  if (!customerId || typeof customerId !== 'string') {
    console.error(`No customer received on event: ${JSON.stringify(event)}`);
  } else {
    let isSubscription = true;

    if (event.type === 'checkout.session.completed') {
      const { mode } = stripeData as Stripe.Checkout.Session;
      isSubscription = mode === 'subscription';
      console.info(`Processing ${isSubscription ? 'subscription' : 'one-time payment'} checkout session`);
    }

    const { mode, payment_status } = stripeData as Stripe.Checkout.Session;

    if (isSubscription) {
      console.info(`Starting subscription sync for customer: ${customerId}`);
      await syncCustomerFromStripe(customerId);
    } else if (mode === 'payment' && payment_status === 'paid') {
      try {
        const session = stripeData as Stripe.Checkout.Session;

        const {
          id: checkout_session_id,
          payment_intent,
          amount_subtotal,
          amount_total,
          currency,
          metadata,
        } = session;

        // Insert the order into the stripe_orders table
        const { error: orderError } = await supabase.from('stripe_orders').insert({
          checkout_session_id,
          payment_intent_id: payment_intent,
          customer_id: customerId,
          amount_subtotal,
          amount_total,
          currency,
          payment_status,
          status: 'completed',
        });

        if (orderError) {
          console.error('Error inserting order:', orderError);
          return;
        }

        console.info(`Successfully processed one-time payment for session: ${checkout_session_id}`);

        // Send email notification about the new paid order
        await sendPaymentNotificationEmail(session, customerId);
      } catch (error) {
        console.error('Error processing one-time payment:', error);
      }
    }
  }
}

async function sendPaymentNotificationEmail(session: Stripe.Checkout.Session, customerId: string) {
  try {
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not configured — skipping payment notification email');
      return;
    }

    // Fetch customer details from Stripe
    const customer = await stripe.customers.retrieve(customerId);
    const customerEmail = (customer as Stripe.Customer)?.email ?? 'N/A';
    const customerName = (customer as Stripe.Customer)?.name ?? 'N/A';

    const amount = session.amount_total ? `$${(session.amount_total / 100).toFixed(2)}` : 'N/A';
    const address = session.metadata?.customer_address ?? 'Not provided';
    const zip = session.metadata?.customer_zip ?? 'Not provided';
    const sqft = session.metadata?.customer_sqft ?? 'Not provided';

    const subject = `New Paid Order: Exterior Window Cleaning — ${customerName}`;

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1a3c75; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1a3c75; }
            .value { margin-top: 5px; }
            .highlight { background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 5px; padding: 15px; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Paid Order!</h1>
              <p style="margin: 5px 0 0 0; opacity: 0.9;">A customer has paid for Exterior Window Cleaning</p>
            </div>
            <div class="content">
              <div class="highlight">
                <div class="label">Amount Paid:</div>
                <div class="value" style="font-size: 24px; font-weight: bold; color: #155724;">${amount}</div>
              </div>

              <div class="field">
                <div class="label">Customer Name:</div>
                <div class="value">${customerName}</div>
              </div>

              <div class="field">
                <div class="label">Customer Email:</div>
                <div class="value">${customerEmail}</div>
              </div>

              <div class="field">
                <div class="label">Property Address:</div>
                <div class="value">${address}</div>
              </div>

              <div class="field">
                <div class="label">ZIP Code:</div>
                <div class="value">${zip}</div>
              </div>

              <div class="field">
                <div class="label">Home Square Footage (self-reported):</div>
                <div class="value">${sqft} sq ft</div>
              </div>

              <div class="field">
                <div class="label">Service:</div>
                <div class="value">Exterior Window Cleaning</div>
              </div>

              <div class="field">
                <div class="label">Checkout Session ID:</div>
                <div class="value" style="font-size: 12px; word-break: break-all;">${session.id}</div>
              </div>

              <div class="field" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                <div class="label">Action Needed:</div>
                <div class="value">Contact the customer to schedule their appointment. Verify the property address and square footage against public records before scheduling.</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Skywash Orders <orders@skywashinnovations.com>',
        to: ['scott.wilburn@skywashinnovations.com'],
        reply_to: customerEmail !== 'N/A' ? customerEmail : undefined,
        subject,
        html: htmlBody,
      }),
    });

    if (!response.ok) {
      const result = await response.json().catch(() => ({}));
      console.error('Failed to send payment notification email:', JSON.stringify(result));
    } else {
      console.info('Payment notification email sent successfully');
    }
  } catch (error) {
    console.error('Error sending payment notification email:', error);
  }
}

// based on the excellent https://github.com/t3dotgg/stripe-recommendations
async function syncCustomerFromStripe(customerId: string) {
  try {
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      limit: 1,
      status: 'all',
      expand: ['data.default_payment_method'],
    });

    if (subscriptions.data.length === 0) {
      console.info(`No active subscriptions found for customer: ${customerId}`);
      const { error: noSubError } = await supabase.from('stripe_subscriptions').upsert(
        {
          customer_id: customerId,
          subscription_status: 'not_started',
        },
        {
          onConflict: 'customer_id',
        },
      );

      if (noSubError) {
        console.error('Error updating subscription status:', noSubError);
        throw new Error('Failed to update subscription status in database');
      }
    }

    const subscription = subscriptions.data[0];

    const { error: subError } = await supabase.from('stripe_subscriptions').upsert(
      {
        customer_id: customerId,
        subscription_id: subscription.id,
        price_id: subscription.items.data[0].price.id,
        current_period_start: subscription.current_period_start,
        current_period_end: subscription.current_period_end,
        cancel_at_period_end: subscription.cancel_at_period_end,
        ...(subscription.default_payment_method && typeof subscription.default_payment_method !== 'string'
          ? {
              payment_method_brand: subscription.default_payment_method.card?.brand ?? null,
              payment_method_last4: subscription.default_payment_method.card?.last4 ?? null,
            }
          : {}),
        status: subscription.status,
      },
      {
        onConflict: 'customer_id',
      },
    );

    if (subError) {
      console.error('Error syncing subscription:', subError);
      throw new Error('Failed to sync subscription in database');
    }
    console.info(`Successfully synced subscription for customer: ${customerId}`);
  } catch (error) {
    console.error(`Failed to sync subscription for customer ${customerId}:`, error);
    throw error;
  }
}

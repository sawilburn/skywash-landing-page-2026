import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';

const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY')!;
const stripe = new Stripe(stripeSecret, {
  appInfo: {
    name: 'Skywash Innovations',
    version: '1.0.0',
  },
});

function corsResponse(body: string | object | null, status = 200) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': '*',
  };

  if (status === 204) {
    return new Response(null, { status, headers });
  }

  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  });
}

Deno.serve(async (req) => {
  try {
    if (req.method === 'OPTIONS') {
      return corsResponse({}, 204);
    }

    if (req.method !== 'POST') {
      return corsResponse({ error: 'Method not allowed' }, 405);
    }

    const {
      product_name,
      product_description,
      amount,
      currency,
      success_url,
      cancel_url,
      customer_email,
    } = await req.json();

    if (!product_name || typeof product_name !== 'string') {
      return corsResponse({ error: 'Missing required parameter product_name' }, 400);
    }
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return corsResponse({ error: 'Missing or invalid required parameter amount' }, 400);
    }
    if (!success_url || typeof success_url !== 'string') {
      return corsResponse({ error: 'Missing required parameter success_url' }, 400);
    }
    if (!cancel_url || typeof cancel_url !== 'string') {
      return corsResponse({ error: 'Missing required parameter cancel_url' }, 400);
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: currency || 'usd',
            product_data: {
              name: product_name,
              ...(product_description ? { description: product_description } : {}),
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      ...(customer_email ? { customer_email } : {}),
      success_url,
      cancel_url,
    });

    console.log(`Created checkout session ${session.id} for ${product_name}`);

    return corsResponse({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error(`Checkout error: ${error.message}`);
    return corsResponse({ error: error.message }, 500);
  }
});

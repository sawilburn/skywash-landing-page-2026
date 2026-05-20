import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const STORAGE_BUCKET = 'images';

export interface LeadPayload {
  type: string;
  contact_name: string;
  email: string;
  phone: string;
  details: string;
  company_name?: string;
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  const { error: dbError } = await supabase.from('leads').insert([payload]);
  if (dbError) throw dbError;

  // Fire-and-forget — don't block navigation if email fails
  fetch(`${supabaseUrl}/functions/v1/send-lead-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${supabaseAnonKey}`,
    },
    body: JSON.stringify(payload),
  }).catch((err) => console.error('send-lead-email failed:', err));
}

export function getPublicUrl(path: string): string {
  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(path);
  return data.publicUrl;
}

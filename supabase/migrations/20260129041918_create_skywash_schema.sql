/*
  # Skywash Innovations Initial Schema

  ## Overview
  Sets up the complete backend infrastructure for Skywash Innovations, including storage for website assets and lead capture system.

  ## 1. Storage Bucket
    - `website-assets` - Public bucket for all site images (logos, hero backgrounds, drone shots)
    - Public read access enabled for frontend asset loading

  ## 2. New Tables
    - `leads` - Captures inquiries from Residential and Commercial contact forms
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `created_at` (timestamptz) - Timestamp of lead submission
      - `type` (text) - Lead type: 'commercial' or 'residential'
      - `contact_name` (text) - Name of person submitting inquiry
      - `email` (text) - Contact email address
      - `phone` (text, optional) - Contact phone number
      - `details` (text) - Additional details or message from lead

  ## 3. Security
    - Enable RLS on `leads` table
    - Allow authenticated users (admin) to read all leads
    - Allow public (anonymous) users to insert leads only
    - Storage bucket configured for public read access

  ## Notes
    - The admin user (scott.wilburn@gmail.com) will need to be created via Supabase Auth UI
    - All website assets should be uploaded to the website-assets bucket
    - Lead submissions are anonymous (no auth required) but can only be viewed by authenticated admins
*/

-- Create the website-assets storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('website-assets', 'website-assets', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist to avoid conflicts
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Public read access for website assets" ON storage.objects;
  DROP POLICY IF EXISTS "Authenticated users can upload website assets" ON storage.objects;
  DROP POLICY IF EXISTS "Authenticated users can update website assets" ON storage.objects;
  DROP POLICY IF EXISTS "Authenticated users can delete website assets" ON storage.objects;
EXCEPTION
  WHEN undefined_object THEN NULL;
END $$;

-- Enable public read access to the website-assets bucket
CREATE POLICY "Public read access for website assets"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'website-assets');

-- Allow authenticated users to upload to website-assets
CREATE POLICY "Authenticated users can upload website assets"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'website-assets');

-- Allow authenticated users to update website assets
CREATE POLICY "Authenticated users can update website assets"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'website-assets')
WITH CHECK (bucket_id = 'website-assets');

-- Allow authenticated users to delete website assets
CREATE POLICY "Authenticated users can delete website assets"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'website-assets');

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now() NOT NULL,
  type text NOT NULL CHECK (type IN ('commercial', 'residential')),
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  details text NOT NULL
);

-- Enable RLS on leads table
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Authenticated users can read all leads" ON leads;
  DROP POLICY IF EXISTS "Public can submit leads" ON leads;
EXCEPTION
  WHEN undefined_object THEN NULL;
END $$;

-- Allow authenticated users (admin) to read all leads
CREATE POLICY "Authenticated users can read all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Allow public to insert leads (for form submissions)
CREATE POLICY "Public can submit leads"
  ON leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create index for efficient querying by type and date
CREATE INDEX IF NOT EXISTS leads_type_created_at_idx ON leads(type, created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);
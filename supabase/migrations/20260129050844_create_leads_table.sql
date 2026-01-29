/*
  # Create leads table for Skywash Innovations

  ## Description
  Creates the leads table to store both commercial and residential lead submissions
  from the website contact forms.

  ## Tables Created
  1. `leads` - Main table for storing lead information
    - `id` (uuid, primary key) - Unique identifier for each lead
    - `created_at` (timestamptz) - When the lead was submitted
    - `type` (text) - Type of lead: 'commercial' or 'residential'
    - `contact_name` (text) - Name of the person submitting
    - `email` (text) - Contact email address
    - `phone` (text, nullable) - Contact phone number
    - `company_name` (text, nullable) - Company name (for commercial leads)
    - `details` (text) - Additional details/message from the lead

  ## Security
  - RLS is enabled on the leads table
  - Anonymous users can insert leads (for form submissions)
  - Only authenticated users can view leads
*/

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  type text NOT NULL CHECK (type IN ('commercial', 'residential')),
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text,
  details text NOT NULL
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert leads (for form submissions)
CREATE POLICY "Anyone can submit leads"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to view all leads
CREATE POLICY "Authenticated users can view leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);

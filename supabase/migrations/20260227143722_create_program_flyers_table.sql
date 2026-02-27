/*
  # Create Program Flyers Table
  
  1. New Tables
    - `program_flyers`
      - `id` (uuid, primary key) - Unique identifier for each flyer
      - `program_name` (text) - Name of the program (e.g., "Arlington STEM Apprenticeship")
      - `file_path` (text) - Storage path in Supabase (e.g., "flyers/SkywashInnovationsSTEMFlyer.pdf")
      - `description` (text, nullable) - Optional description of the flyer
      - `is_active` (boolean) - Whether this flyer is currently active
      - `created_at` (timestamptz) - When the record was created
      - `updated_at` (timestamptz) - When the record was last updated
  
  2. Security
    - Enable RLS on `program_flyers` table
    - Add policy for public read access to active flyers
    - Add policy for authenticated users to manage flyers
  
  3. Initial Data
    - Insert record for the Arlington STEM Apprenticeship flyer
*/

CREATE TABLE IF NOT EXISTS program_flyers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  program_name text NOT NULL,
  file_path text NOT NULL,
  description text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE program_flyers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read active flyers"
  ON program_flyers
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage flyers"
  ON program_flyers
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert the Arlington STEM Apprenticeship flyer
INSERT INTO program_flyers (program_name, file_path, description)
VALUES (
  'Arlington STEM Apprenticeship',
  'flyers/SkywashInnovationsSTEMFlyer.pdf',
  'UAS & Robotics Apprenticeship Program Flyer'
)
ON CONFLICT DO NOTHING;
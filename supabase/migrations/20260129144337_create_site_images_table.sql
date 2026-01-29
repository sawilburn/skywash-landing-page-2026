/*
  # Create Site Images Table

  1. New Tables
    - `site_images`
      - `id` (uuid, primary key) - Unique identifier
      - `created_at` (timestamptz) - Timestamp of creation
      - `section` (text) - Section identifier (e.g., 'about', 'hero', 'services')
      - `title` (text) - Image title/description
      - `storage_path` (text) - Path to image in Supabase Storage
      - `alt_text` (text) - Alt text for accessibility
      - `is_active` (boolean) - Whether this image is currently active
      - `sort_order` (integer) - Display order for multiple images in same section

  2. Security
    - Enable RLS on `site_images` table
    - Add policy for public read access (images are public content)
    - Add policy for authenticated admins to manage images
*/

CREATE TABLE IF NOT EXISTS site_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  section text NOT NULL,
  title text NOT NULL,
  storage_path text NOT NULL,
  alt_text text NOT NULL,
  is_active boolean DEFAULT true,
  sort_order integer DEFAULT 0
);

ALTER TABLE site_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active site images"
  ON site_images
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage site images"
  ON site_images
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create index for faster lookups by section
CREATE INDEX IF NOT EXISTS idx_site_images_section ON site_images(section, is_active);

-- Insert the drone cleaning image for the about section
INSERT INTO site_images (section, title, storage_path, alt_text, is_active, sort_order)
VALUES (
  'about',
  'Drone Cleaning Technology in Action',
  'drone-cleaning-building.jpg',
  'Skywash Innovations drone performing exterior cleaning on a commercial building',
  true,
  1
);
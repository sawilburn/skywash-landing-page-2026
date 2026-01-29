/*
  # Create Before/After Images Table

  1. New Tables
    - `before_after_images`
      - `id` (uuid, primary key) - Unique identifier for each image pair
      - `service_type` (text) - Type of service (e.g., "roof", "solar", "house", "siding")
      - `before_image_path` (text) - Original filename of the before image in storage
      - `after_image_path` (text) - Original filename of the after image in storage
      - `before_alt` (text) - Descriptive alt text for the before image
      - `after_alt` (text) - Descriptive alt text for the after image
      - `is_active` (boolean) - Whether this pair should be displayed on the site
      - `display_order` (integer) - Sort order when multiple pairs exist
      - `created_at` (timestamptz) - When the image pair was uploaded

  2. Security
    - Enable RLS on `before_after_images` table
    - Add policy for authenticated users to insert image pairs
    - Add policy for authenticated users to update image pairs
    - Add policy for authenticated users to delete image pairs
    - Add policy for public (unauthenticated) to read active image pairs

  3. Important Notes
    - Only one image pair per service_type should be active at a time
    - before_image_path and after_image_path store the actual uploaded filenames
    - Filenames are preserved with a timestamp prefix for uniqueness
*/

CREATE TABLE IF NOT EXISTS before_after_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type text NOT NULL,
  before_image_path text NOT NULL,
  after_image_path text NOT NULL,
  before_alt text NOT NULL,
  after_alt text NOT NULL,
  is_active boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE before_after_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read active before/after images"
  ON before_after_images
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert before/after images"
  ON before_after_images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update before/after images"
  ON before_after_images
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete before/after images"
  ON before_after_images
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_before_after_service_active 
  ON before_after_images(service_type, is_active);

CREATE INDEX IF NOT EXISTS idx_before_after_display_order 
  ON before_after_images(display_order);
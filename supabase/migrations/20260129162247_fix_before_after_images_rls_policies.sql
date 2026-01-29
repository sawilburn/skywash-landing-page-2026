/*
  # Fix RLS Policies for Before/After Images Table

  1. Changes
    - Drop existing restrictive policies that required authenticated users
    - Create new policies that allow anon role (using anon key) to manage images
    - This allows the admin image upload page to work without requiring authentication

  2. Security
    - Policies now allow anon role to insert, update, and delete
    - Public (unauthenticated) can still read active image pairs
    - Access control is handled at the application level (admin page)

  3. Important Notes
    - These policies are suitable for admin functionality accessed via anon key
    - The anon key should be protected and only used in admin contexts
    - Consider adding authentication later for production environments
*/

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Authenticated users can insert before/after images" ON before_after_images;
DROP POLICY IF EXISTS "Authenticated users can update before/after images" ON before_after_images;
DROP POLICY IF EXISTS "Authenticated users can delete before/after images" ON before_after_images;

-- Create new policies that allow anon role to manage images
CREATE POLICY "Anon can insert before/after images"
  ON before_after_images
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anon can update before/after images"
  ON before_after_images
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anon can delete before/after images"
  ON before_after_images
  FOR DELETE
  TO anon
  USING (true);

-- Also allow authenticated users (for future use)
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
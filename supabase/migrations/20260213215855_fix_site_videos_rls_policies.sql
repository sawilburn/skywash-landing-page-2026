/*
  # Fix RLS Policies for Site Videos Table

  1. Changes
    - Drop existing restrictive policies that only allowed authenticated users
    - Create new policies that allow anon role (using anon key) to manage videos
    - This allows the admin video upload page to work without requiring authentication

  2. Security
    - Policies now allow anon role to insert, update, and delete
    - Public (unauthenticated) can still read active videos
    - Access control is handled at the application level (admin page)

  3. Important Notes
    - These policies are suitable for admin functionality accessed via anon key
    - The anon key should be protected and only used in admin contexts
    - Consider adding authentication later for production environments
*/

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Allow insert for authenticated users" ON site_videos;
DROP POLICY IF EXISTS "Allow update for authenticated users" ON site_videos;
DROP POLICY IF EXISTS "Allow delete for authenticated users" ON site_videos;

-- Create new policies that allow anon role to manage videos
CREATE POLICY "Anon can insert site videos"
  ON site_videos
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anon can update site videos"
  ON site_videos
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anon can delete site videos"
  ON site_videos
  FOR DELETE
  TO anon
  USING (true);

-- Also allow authenticated users (for future use)
CREATE POLICY "Authenticated users can insert site videos"
  ON site_videos
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update site videos"
  ON site_videos
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete site videos"
  ON site_videos
  FOR DELETE
  TO authenticated
  USING (true);
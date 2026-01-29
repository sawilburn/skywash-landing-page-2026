/*
  # Allow Public Storage Uploads

  1. Updates
    - Add policy for anonymous users to upload images
    - This allows the edge function to work without authentication

  2. Security Note
    - The edge function uses service role key for actual uploads
    - This policy is a fallback for public access patterns
*/

-- Drop and recreate the upload policy to allow both authenticated and anonymous users
DROP POLICY IF EXISTS "Authenticated users can upload images" ON storage.objects;

-- Allow anyone to upload images (the edge function handles validation)
CREATE POLICY "Anyone can upload images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'images');
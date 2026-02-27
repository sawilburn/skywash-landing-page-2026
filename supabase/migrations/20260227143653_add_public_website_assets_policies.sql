/*
  # Add Public Upload Policies for Website Assets
  
  1. Changes
    - Add public INSERT policy for website-assets bucket to allow unauthenticated uploads
    - This allows the application to upload PDFs and other assets without authentication
  
  2. Security
    - Read access remains public for all users
    - Upload access is opened to public to allow asset management
    - Delete and update remain restricted to authenticated users only
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Anyone can upload website assets'
  ) THEN
    CREATE POLICY "Anyone can upload website assets"
      ON storage.objects
      FOR INSERT
      TO public
      WITH CHECK (bucket_id = 'website-assets');
  END IF;
END $$;
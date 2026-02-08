/*
  # Add Storage Policies for Videos Bucket

  1. Security Changes
    - Add INSERT policy for public to upload videos to Videos bucket
    - Add UPDATE policy for public to update videos in Videos bucket
    - Add DELETE policy for public to delete videos from Videos bucket
    - Add SELECT policy for public to read videos from Videos bucket (already public bucket)
  
  2. Notes
    - These policies allow unrestricted access similar to the images bucket
    - The bucket is already marked as public for read access
    - This enables uploading the realtor drone footage video
*/

-- Check and create upload policy
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Anyone can upload videos'
  ) THEN
    CREATE POLICY "Anyone can upload videos"
      ON storage.objects
      FOR INSERT
      TO public
      WITH CHECK (bucket_id = 'Videos');
  END IF;
END $$;

-- Check and create update policy
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Anyone can update videos'
  ) THEN
    CREATE POLICY "Anyone can update videos"
      ON storage.objects
      FOR UPDATE
      TO public
      USING (bucket_id = 'Videos')
      WITH CHECK (bucket_id = 'Videos');
  END IF;
END $$;

-- Check and create delete policy
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Anyone can delete videos'
  ) THEN
    CREATE POLICY "Anyone can delete videos"
      ON storage.objects
      FOR DELETE
      TO public
      USING (bucket_id = 'Videos');
  END IF;
END $$;

-- Check and create read policy
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'storage' 
    AND tablename = 'objects' 
    AND policyname = 'Anyone can read videos'
  ) THEN
    CREATE POLICY "Anyone can read videos"
      ON storage.objects
      FOR SELECT
      TO public
      USING (bucket_id = 'Videos');
  END IF;
END $$;

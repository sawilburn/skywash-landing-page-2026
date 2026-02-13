/*
  # Create site_videos table for managing video content

  1. New Tables
    - `site_videos`
      - `id` (uuid, primary key) - Unique identifier for each video
      - `video_path` (text) - Storage path to the video file
      - `thumbnail_path` (text, nullable) - Storage path to thumbnail image
      - `title` (text) - Video title
      - `description` (text, nullable) - Video description
      - `video_type` (text) - Type of video (e.g., 'owner-intro', 'testimonial', 'service-demo')
      - `is_active` (boolean) - Whether this video is currently displayed on the site
      - `created_at` (timestamptz) - Timestamp of video upload
      - `updated_at` (timestamptz) - Timestamp of last update

  2. Security
    - Enable RLS on `site_videos` table
    - Add policy for public read access to active videos
    - Add policy for authenticated admin uploads and management
*/

CREATE TABLE IF NOT EXISTS site_videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  video_path text NOT NULL,
  thumbnail_path text,
  title text NOT NULL,
  description text,
  video_type text NOT NULL DEFAULT 'general',
  is_active boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE site_videos ENABLE ROW LEVEL SECURITY;

-- Allow public to view active videos
CREATE POLICY "Public can view active videos"
  ON site_videos
  FOR SELECT
  USING (is_active = true);

-- Allow all read access (for management interface)
CREATE POLICY "Allow all read access for management"
  ON site_videos
  FOR SELECT
  USING (true);

-- Allow insert for authenticated users (admin functionality)
CREATE POLICY "Allow insert for authenticated users"
  ON site_videos
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow update for authenticated users
CREATE POLICY "Allow update for authenticated users"
  ON site_videos
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow delete for authenticated users
CREATE POLICY "Allow delete for authenticated users"
  ON site_videos
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index on video_type and is_active for faster queries
CREATE INDEX IF NOT EXISTS idx_site_videos_type_active ON site_videos(video_type, is_active);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_site_videos_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_site_videos_updated_at
  BEFORE UPDATE ON site_videos
  FOR EACH ROW
  EXECUTE FUNCTION update_site_videos_updated_at();
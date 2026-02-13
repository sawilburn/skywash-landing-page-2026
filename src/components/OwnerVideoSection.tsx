import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import { getActiveVideo, getVideoUrl, SiteVideo } from '../lib/siteVideos';

export function OwnerVideoSection() {
  const [video, setVideo] = useState<SiteVideo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadVideo();
  }, []);

  const loadVideo = async () => {
    setIsLoading(true);
    const data = await getActiveVideo('owner-intro');
    setVideo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (isLoading || !video) {
    return null;
  }

  const thumbnailUrl = video.thumbnail_path
    ? getVideoUrl(video.thumbnail_path)
    : getVideoUrl(video.video_path);

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {video.title}
            </h2>
            {video.description && (
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {video.description}
              </p>
            )}
          </div>

          <div className="relative max-w-4xl mx-auto group cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              {video.thumbnail_path ? (
                <img
                  src={thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <video
                  src={getVideoUrl(video.video_path)}
                  className="w-full h-full object-cover"
                  muted
                />
              )}

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                  <Play className="text-blue-600 ml-1" size={40} fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg">
              <p className="text-sm font-semibold text-slate-700">Click to watch</p>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors z-10"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={32} />
          </button>

          <div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <video
                src={getVideoUrl(video.video_path)}
                controls
                autoPlay
                className="w-full h-full"
              />
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{video.title}</h3>
              {video.description && (
                <p className="text-slate-300">{video.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

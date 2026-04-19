import { useState, useEffect } from 'react';
import { Plus, Upload, CheckCircle, AlertCircle, Eye, EyeOff, Trash2, RefreshCw, Video as VideoIcon, Image as ImageIcon } from 'lucide-react';
import {
  uploadVideo,
  getAllVideos,
  updateVideoStatus,
  deleteVideo,
  getVideoUrl,
  SiteVideo,
} from '../../lib/siteVideos';
import { UploadDrawer } from './UploadDrawer';

const VIDEO_TYPES = [
  { value: 'owner-intro', label: 'Owner Introduction' },
  { value: 'testimonial', label: 'Customer Testimonial' },
  { value: 'service-demo', label: 'Service Demonstration' },
  { value: 'behind-scenes', label: 'Behind the Scenes' },
  { value: 'general', label: 'General' },
];

function FileDropZone({ file, onFile, id, accept, icon: Icon, label, sublabel }: {
  file: File | null;
  onFile: (f: File) => void;
  id: string;
  accept: string;
  icon: React.ElementType;
  label: string;
  sublabel: string;
}) {
  const [preview, setPreview] = useState('');
  const isImage = accept.includes('image');

  useEffect(() => {
    if (!file || !isImage) { setPreview(''); return; }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file, isImage]);

  return (
    <label htmlFor={id} className="relative flex flex-col items-center justify-center w-full h-40 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 cursor-pointer hover:border-[#1a3c75] hover:bg-slate-100 transition-all overflow-hidden">
      {preview ? (
        <>
          <img src={preview} alt="preview" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <Upload className="text-white mb-1" size={22} />
            <span className="text-white text-xs font-medium">Replace</span>
          </div>
        </>
      ) : (
        <>
          <Icon className="text-slate-400 mb-2" size={26} />
          <span className="text-sm font-medium text-slate-600 text-center px-4">
            {file ? file.name : label}
          </span>
          <span className="text-xs text-slate-400 mt-0.5">{sublabel}</span>
        </>
      )}
      <input id={id} type="file" accept={accept} className="hidden" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} />
    </label>
  );
}

export function VideosTab({ autoOpenUpload, onAutoOpenHandled }: { autoOpenUpload?: boolean; onAutoOpenHandled?: () => void } = {}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [videos, setVideos] = useState<SiteVideo[]>([]);
  const [loading, setLoading] = useState(true);

  const [videoType, setVideoType] = useState('owner-intro');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => { load(); }, []);

  useEffect(() => {
    if (autoOpenUpload) {
      setDrawerOpen(true);
      onAutoOpenHandled?.();
    }
  }, [autoOpenUpload]);

  const load = async () => {
    setLoading(true);
    setVideos(await getAllVideos());
    setLoading(false);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoFile) { setResult({ success: false, message: 'Please select a video file' }); return; }
    setUploading(true);
    setResult(null);
    const res = await uploadVideo(videoFile, thumbnailFile, videoTitle, videoDescription, videoType);
    setUploading(false);
    if (res.success) {
      setResult({ success: true, message: 'Video uploaded successfully!' });
      setVideoFile(null);
      setThumbnailFile(null);
      setVideoTitle('');
      setVideoDescription('');
      load();
    } else {
      setResult({ success: false, message: res.error || 'Upload failed' });
    }
  };

  const videoTypes = [...new Set(videos.map(v => v.video_type))];
  const grouped: Record<string, SiteVideo[]> = {};
  videos.forEach(v => {
    grouped[v.video_type] = grouped[v.video_type] || [];
    grouped[v.video_type].push(v);
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Videos</h2>
          <p className="text-slate-500 text-sm mt-0.5">Upload and manage videos displayed on the site</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={load} className="p-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors">
            <RefreshCw size={18} />
          </button>
          <button
            onClick={() => { setDrawerOpen(true); setResult(null); }}
            className="flex items-center gap-2 bg-[#1a3c75] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#153060] transition-colors shadow-md"
          >
            <Plus size={18} />
            Upload Video
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1a3c75]" />
        </div>
      ) : videos.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
          <VideoIcon className="mx-auto mb-4 text-slate-300" size={52} />
          <p className="text-slate-500 font-medium">No videos uploaded yet</p>
          <button onClick={() => setDrawerOpen(true)} className="mt-4 text-[#1a3c75] font-semibold text-sm hover:underline">
            Upload your first video
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(grouped).map(([type, vids]) => (
            <div key={type} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100">
                <p className="font-bold text-slate-900">{VIDEO_TYPES.find(t => t.value === type)?.label ?? type}</p>
                <p className="text-xs text-slate-400">{vids.length} video{vids.length !== 1 ? 's' : ''}</p>
              </div>
              <div className="divide-y divide-slate-100">
                {vids.map(video => (
                  <div key={video.id} className={`p-5 ${video.is_active ? 'bg-green-50/50' : ''}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-slate-900">{video.title}</h3>
                        {video.description && <p className="text-sm text-slate-500 mt-0.5">{video.description}</p>}
                        <div className="flex items-center gap-3 mt-2">
                          {video.is_active && (
                            <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">Active</span>
                          )}
                          <span className="text-xs text-slate-400">{new Date(video.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4 flex-shrink-0">
                        <button
                          onClick={async () => { await updateVideoStatus(video.id, !video.is_active, video.video_type); load(); }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${video.is_active ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                        >
                          {video.is_active ? <><EyeOff size={13} /> Deactivate</> : <><Eye size={13} /> Activate</>}
                        </button>
                        <button
                          onClick={async () => { if (confirm('Delete this video?')) { await deleteVideo(video.id); load(); } }}
                          className="p-1.5 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Video</p>
                        <video
                          src={getVideoUrl(video.video_path)}
                          controls
                          className="w-full h-44 rounded-lg border border-slate-200 bg-black"
                        />
                        <p className="text-xs text-slate-400 mt-1 break-all truncate">{video.video_path}</p>
                      </div>
                      {video.thumbnail_path ? (
                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Thumbnail</p>
                          <img
                            src={getVideoUrl(video.thumbnail_path)}
                            alt="Thumbnail"
                            className="w-full h-44 object-cover rounded-lg border border-slate-200"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-44 rounded-lg border border-dashed border-slate-200 bg-slate-50">
                          <p className="text-xs text-slate-400">No thumbnail</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <UploadDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Upload Video">
        <form onSubmit={handleUpload} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Video Type</label>
            <select
              value={videoType}
              onChange={(e) => setVideoType(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a3c75] text-sm bg-white"
            >
              {VIDEO_TYPES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Title</label>
            <input
              type="text"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
              required
              placeholder="Meet the Owner"
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a3c75] text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Description <span className="text-slate-400 font-normal">(optional)</span></label>
            <textarea
              value={videoDescription}
              onChange={(e) => setVideoDescription(e.target.value)}
              placeholder="Short description of the video"
              rows={3}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a3c75] text-sm resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Video File</label>
            <FileDropZone
              file={videoFile}
              onFile={setVideoFile}
              id="video-file-input"
              accept="video/*"
              icon={VideoIcon}
              label="Click to select video"
              sublabel="MP4, WebM, MOV up to 500MB"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Thumbnail <span className="text-slate-400 font-normal">(optional)</span></label>
            <FileDropZone
              file={thumbnailFile}
              onFile={setThumbnailFile}
              id="thumbnail-file-input"
              accept="image/*"
              icon={ImageIcon}
              label="Click to select thumbnail"
              sublabel="PNG, JPG, WEBP up to 10MB"
            />
          </div>

          {result && (
            <div className={`flex items-start gap-3 p-4 rounded-xl text-sm ${result.success ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
              {result.success ? <CheckCircle size={18} className="flex-shrink-0 mt-0.5" /> : <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />}
              {result.message}
            </div>
          )}

          <button
            type="submit"
            disabled={uploading || !videoFile}
            className="w-full py-3 bg-[#1a3c75] text-white rounded-xl font-bold hover:bg-[#153060] disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors"
          >
            {uploading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                Uploading...
              </span>
            ) : 'Upload Video'}
          </button>
        </form>
      </UploadDrawer>
    </div>
  );
}

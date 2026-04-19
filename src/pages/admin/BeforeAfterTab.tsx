import { useState, useEffect, useRef } from 'react';
import { Plus, Upload, CheckCircle, AlertCircle, Eye, EyeOff, Trash2, RefreshCw, Image as ImageIcon } from 'lucide-react';
import {
  uploadBeforeAfterImages,
  getAllBeforeAfterImages,
  updateBeforeAfterImageStatus,
  deleteBeforeAfterImage,
  getImageUrl,
  BeforeAfterImage,
} from '../../lib/siteImages';
import { UploadDrawer } from './UploadDrawer';

const SERVICE_TYPES = [
  { value: 'roof', label: 'Roof Washing' },
  { value: 'solar', label: 'Solar Panels' },
  { value: 'house', label: 'House Washing' },
  { value: 'siding', label: 'Siding' },
  { value: 'driveway', label: 'Driveway' },
  { value: 'deck', label: 'Deck' },
  { value: 'fence', label: 'Fence' },
  { value: 'patio', label: 'Patio' },
  { value: 'gutters', label: 'Gutters' },
  { value: 'windows', label: 'Windows' },
];

function DropZone({ file, onFile, id, label }: { file: File | null; onFile: (f: File) => void; id: string; label: string }) {
  const [preview, setPreview] = useState('');
  useEffect(() => {
    if (!file) { setPreview(''); return; }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <label htmlFor={id} className="relative flex flex-col items-center justify-center w-full h-36 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 cursor-pointer hover:border-[#1a3c75] hover:bg-slate-100 transition-all overflow-hidden">
      {preview ? (
        <>
          <img src={preview} alt="preview" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <Upload className="text-white mb-1" size={20} />
            <span className="text-white text-xs font-medium">Replace</span>
          </div>
        </>
      ) : (
        <>
          <Upload className="text-slate-400 mb-1" size={22} />
          <span className="text-sm font-medium text-slate-600">{label}</span>
          <span className="text-xs text-slate-400 mt-0.5">PNG, JPG, WEBP</span>
        </>
      )}
      <input id={id} type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} />
    </label>
  );
}

function SliderPreview({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const move = (x: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos(Math.min(Math.max(((x - rect.left) / rect.width) * 100, 0), 100));
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-video rounded-xl overflow-hidden cursor-col-resize select-none bg-slate-200"
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onMouseMove={(e) => dragging && move(e.clientX)}
      onTouchStart={() => setDragging(true)}
      onTouchEnd={() => setDragging(false)}
      onTouchMove={(e) => dragging && move(e.touches[0].clientX)}
    >
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt="Before" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-xl flex items-center justify-center gap-0.5">
          <div className="w-0.5 h-3 bg-slate-400 rounded" />
          <div className="w-0.5 h-3 bg-slate-400 rounded" />
        </div>
      </div>
      <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded font-semibold">Before</span>
      <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded font-semibold">After</span>
    </div>
  );
}

export function BeforeAfterTab({ autoOpenUpload, onAutoOpenHandled }: { autoOpenUpload?: boolean; onAutoOpenHandled?: () => void } = {}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [images, setImages] = useState<BeforeAfterImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all');

  const [serviceType, setServiceType] = useState('roof');
  const [beforeFile, setBeforeFile] = useState<File | null>(null);
  const [afterFile, setAfterFile] = useState<File | null>(null);
  const [beforePreview, setBeforePreview] = useState('');
  const [afterPreview, setAfterPreview] = useState('');
  const [beforeAlt, setBeforeAlt] = useState('');
  const [afterAlt, setAfterAlt] = useState('');
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => { load(); }, []);

  useEffect(() => {
    if (autoOpenUpload) {
      setDrawerOpen(true);
      onAutoOpenHandled?.();
    }
  }, [autoOpenUpload]);

  useEffect(() => {
    if (!beforeFile) { setBeforePreview(''); return; }
    const url = URL.createObjectURL(beforeFile);
    setBeforePreview(url);
    return () => URL.revokeObjectURL(url);
  }, [beforeFile]);

  useEffect(() => {
    if (!afterFile) { setAfterPreview(''); return; }
    const url = URL.createObjectURL(afterFile);
    setAfterPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [afterFile]);

  const load = async () => {
    setLoading(true);
    setImages(await getAllBeforeAfterImages());
    setLoading(false);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!beforeFile || !afterFile) { setResult({ success: false, message: 'Please select both before and after images' }); return; }
    setUploading(true);
    setResult(null);
    const res = await uploadBeforeAfterImages(beforeFile, afterFile, serviceType, beforeAlt, afterAlt);
    setUploading(false);
    if (res.success) {
      setResult({ success: true, message: 'Before/After images uploaded!' });
      setBeforeFile(null);
      setAfterFile(null);
      setBeforeAlt('');
      setAfterAlt('');
      load();
    } else {
      setResult({ success: false, message: res.error || 'Upload failed' });
    }
  };

  const serviceTypes = [...new Set(images.map(i => i.service_type))];
  const filtered = filterType === 'all' ? images : images.filter(i => i.service_type === filterType);
  const grouped: Record<string, BeforeAfterImage[]> = {};
  filtered.forEach(img => {
    grouped[img.service_type] = grouped[img.service_type] || [];
    grouped[img.service_type].push(img);
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Before / After Images</h2>
          <p className="text-slate-500 text-sm mt-0.5">Upload and manage before/after comparison pairs</p>
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
            Add Pair
          </button>
        </div>
      </div>

      {images.length > 0 && (
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setFilterType('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${filterType === 'all' ? 'bg-[#1a3c75] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'}`}
          >
            All ({images.length})
          </button>
          {serviceTypes.map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize transition-colors ${filterType === type ? 'bg-[#1a3c75] text-white' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'}`}
            >
              {type} ({images.filter(i => i.service_type === type).length})
            </button>
          ))}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1a3c75]" />
        </div>
      ) : images.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
          <ImageIcon className="mx-auto mb-4 text-slate-300" size={52} />
          <p className="text-slate-500 font-medium">No before/after images uploaded yet</p>
          <button onClick={() => setDrawerOpen(true)} className="mt-4 text-[#1a3c75] font-semibold text-sm hover:underline">
            Upload your first pair
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(grouped).map(([type, imgs]) => (
            <div key={type} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100">
                <p className="font-bold text-slate-900 capitalize">{SERVICE_TYPES.find(s => s.value === type)?.label ?? type}</p>
                <p className="text-xs text-slate-400">{imgs.length} pair{imgs.length !== 1 ? 's' : ''}</p>
              </div>
              <div className="divide-y divide-slate-100">
                {imgs.map(img => (
                  <div key={img.id} className={`p-5 ${img.is_active ? 'bg-green-50/50' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {img.is_active && (
                          <span className="bg-green-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">Active</span>
                        )}
                        <span className="text-xs text-slate-400">{new Date(img.created_at).toLocaleDateString()}</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={async () => { await updateBeforeAfterImageStatus(img.id, !img.is_active, img.service_type); load(); }}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${img.is_active ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                        >
                          {img.is_active ? <><EyeOff size={13} /> Deactivate</> : <><Eye size={13} /> Activate</>}
                        </button>
                        <button
                          onClick={async () => { if (confirm('Delete this before/after pair?')) { await deleteBeforeAfterImage(img.id); load(); } }}
                          className="p-1.5 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Before</p>
                        <img src={getImageUrl(img.before_image_path)} alt={img.before_alt} className="w-full h-40 object-cover rounded-lg border border-slate-200" />
                        <p className="text-xs text-slate-500 mt-1.5 italic">{img.before_alt}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">After</p>
                        <img src={getImageUrl(img.after_image_path)} alt={img.after_alt} className="w-full h-40 object-cover rounded-lg border border-slate-200" />
                        <p className="text-xs text-slate-500 mt-1.5 italic">{img.after_alt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <UploadDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Add Before / After Pair">
        <form onSubmit={handleUpload} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Type</label>
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a3c75] text-sm bg-white"
            >
              {SERVICE_TYPES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Before Image</label>
              <DropZone file={beforeFile} onFile={setBeforeFile} id="ba-before" label="Before (dirty)" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">After Image</label>
              <DropZone file={afterFile} onFile={setAfterFile} id="ba-after" label="After (clean)" />
            </div>
          </div>

          {beforePreview && afterPreview && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Preview (drag slider)</label>
              <SliderPreview before={beforePreview} after={afterPreview} />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Before Alt Text</label>
              <input
                type="text"
                value={beforeAlt}
                onChange={(e) => setBeforeAlt(e.target.value)}
                required
                placeholder="Dirty roof before cleaning"
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#1a3c75]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">After Alt Text</label>
              <input
                type="text"
                value={afterAlt}
                onChange={(e) => setAfterAlt(e.target.value)}
                required
                placeholder="Clean roof after washing"
                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#1a3c75]"
              />
            </div>
          </div>

          {result && (
            <div className={`flex items-start gap-3 p-4 rounded-xl text-sm ${result.success ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
              {result.success ? <CheckCircle size={18} className="flex-shrink-0 mt-0.5" /> : <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />}
              {result.message}
            </div>
          )}

          <button
            type="submit"
            disabled={uploading || !beforeFile || !afterFile}
            className="w-full py-3 bg-[#1a3c75] text-white rounded-xl font-bold hover:bg-[#153060] disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors"
          >
            {uploading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                Uploading...
              </span>
            ) : 'Upload Pair'}
          </button>
        </form>
      </UploadDrawer>
    </div>
  );
}

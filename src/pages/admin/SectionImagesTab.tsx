import { useState, useEffect } from 'react';
import { Plus, Upload, CheckCircle, AlertCircle, Info, Eye, EyeOff, Trash2, RefreshCw, Image as ImageIcon } from 'lucide-react';
import {
  uploadSiteImage,
  getAllBeforeAfterImages,
  getImageUrl,
  SiteImage,
} from '../../lib/siteImages';
import { supabase } from '../../lib/supabase';
import { PAGE_SECTION_MAPPINGS, getPagesByCategory, getCategoryDisplayName, getSectionsForPage, ImageSection } from '../../lib/pageSectionMapping';
import { UploadDrawer } from './UploadDrawer';

function DropZone({ file, onFile, id, accept = 'image/*', label }: {
  file: File | null;
  onFile: (f: File) => void;
  id: string;
  accept?: string;
  label: string;
}) {
  const [preview, setPreview] = useState<string>('');
  useEffect(() => {
    if (!file) { setPreview(''); return; }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  return (
    <label
      htmlFor={id}
      className="relative flex flex-col items-center justify-center w-full h-44 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 cursor-pointer hover:border-[#1a3c75] hover:bg-slate-100 transition-all overflow-hidden"
    >
      {preview ? (
        <>
          <img src={preview} alt="preview" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <Upload className="text-white mb-1" size={24} />
            <span className="text-white text-xs font-medium">Replace image</span>
          </div>
        </>
      ) : (
        <>
          <Upload className="text-slate-400 mb-2" size={28} />
          <span className="text-sm font-medium text-slate-600">{label}</span>
          <span className="text-xs text-slate-400 mt-1">PNG, JPG, WEBP up to 10MB</span>
        </>
      )}
      <input id={id} type="file" accept={accept} className="hidden" onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])} />
    </label>
  );
}

async function getAllSiteImages(): Promise<SiteImage[]> {
  const { data, error } = await supabase
    .from('site_images')
    .select('*')
    .order('section', { ascending: true })
    .order('is_active', { ascending: false })
    .order('created_at', { ascending: false });
  if (error) return [];
  return data || [];
}

async function toggleSiteImageStatus(id: string, isActive: boolean): Promise<void> {
  await supabase.from('site_images').update({ is_active: isActive }).eq('id', id);
}

async function deleteSiteImage(id: string, storagePath: string): Promise<void> {
  await supabase.from('site_images').delete().eq('id', id);
  await supabase.storage.from('images').remove([storagePath]);
}

export function SectionImagesTab() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [images, setImages] = useState<SiteImage[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedPage, setSelectedPage] = useState('Home Page');
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [availableSections, setAvailableSections] = useState<ImageSection[]>([]);
  const [section, setSection] = useState('about');
  const [title, setTitle] = useState('');
  const [altText, setAltText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const pagesByCategory = getPagesByCategory();

  useEffect(() => {
    const sections = getSectionsForPage('Home Page');
    setAvailableSections(sections);
    if (sections.length > 0) updateFromSection(sections[0]);
  }, []);

  useEffect(() => { load(); }, []);

  const load = async () => {
    setLoading(true);
    setImages(await getAllSiteImages());
    setLoading(false);
  };

  const updateFromSection = (s: ImageSection) => {
    setSection(s.id);
    setTitle(s.displayName);
    setAltText(s.suggestedAltText);
  };

  const handlePageChange = (p: string) => {
    setSelectedPage(p);
    const secs = getSectionsForPage(p);
    setAvailableSections(secs);
    setSelectedSectionIndex(0);
    if (secs.length > 0) updateFromSection(secs[0]);
    setResult(null);
  };

  const handleSectionChange = (i: number) => {
    setSelectedSectionIndex(i);
    if (availableSections[i]) updateFromSection(availableSections[i]);
    setResult(null);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) { setResult({ success: false, message: 'Please select a file' }); return; }
    setUploading(true);
    setResult(null);
    const res = await uploadSiteImage(file, section, title, altText);
    setUploading(false);
    if (res.success) {
      setResult({ success: true, message: 'Image uploaded successfully!' });
      setFile(null);
      load();
    } else {
      setResult({ success: false, message: res.error || 'Upload failed' });
    }
  };

  const currentSection = availableSections[selectedSectionIndex];
  const grouped: Record<string, SiteImage[]> = {};
  images.forEach(img => {
    grouped[img.section] = grouped[img.section] || [];
    grouped[img.section].push(img);
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Section Images</h2>
          <p className="text-slate-500 text-sm mt-0.5">Manage images used in page sections across the site</p>
        </div>
        <button
          onClick={() => { setDrawerOpen(true); setResult(null); }}
          className="flex items-center gap-2 bg-[#1a3c75] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#153060] transition-colors shadow-md"
        >
          <Plus size={18} />
          Upload Image
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1a3c75]" />
        </div>
      ) : images.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
          <ImageIcon className="mx-auto mb-4 text-slate-300" size={52} />
          <p className="text-slate-500 font-medium">No section images uploaded yet</p>
          <button onClick={() => setDrawerOpen(true)} className="mt-4 text-[#1a3c75] font-semibold text-sm hover:underline">
            Upload your first image
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {Object.entries(grouped).map(([sec, imgs]) => (
            <div key={sec} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-sm">{sec}</p>
                  <p className="text-xs text-slate-400">{imgs.length} image{imgs.length !== 1 ? 's' : ''}</p>
                </div>
                <button onClick={load} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <RefreshCw size={16} />
                </button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {imgs.map(img => (
                  <div key={img.id} className={`rounded-xl overflow-hidden border-2 transition-all ${img.is_active ? 'border-green-400' : 'border-slate-200'}`}>
                    <div className="relative aspect-video bg-slate-100">
                      <img
                        src={getImageUrl(img.storage_path)}
                        alt={img.alt_text}
                        className="w-full h-full object-cover"
                      />
                      {img.is_active && (
                        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          Active
                        </span>
                      )}
                    </div>
                    <div className="p-3 bg-white">
                      <p className="text-sm font-semibold text-slate-800 truncate">{img.title}</p>
                      <p className="text-xs text-slate-500 truncate">{img.alt_text}</p>
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={async () => { await toggleSiteImageStatus(img.id, !img.is_active); load(); }}
                          className={`flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                            img.is_active ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-green-100 text-green-700 hover:bg-green-200'
                          }`}
                        >
                          {img.is_active ? <><EyeOff size={13} /> Deactivate</> : <><Eye size={13} /> Activate</>}
                        </button>
                        <button
                          onClick={async () => {
                            if (confirm('Delete this image? This cannot be undone.')) {
                              await deleteSiteImage(img.id, img.storage_path);
                              load();
                            }
                          }}
                          className="p-1.5 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <UploadDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Upload Section Image">
        <form onSubmit={handleUpload} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Page</label>
            <select
              value={selectedPage}
              onChange={(e) => handlePageChange(e.target.value)}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent bg-white text-sm"
            >
              {Object.entries(pagesByCategory).map(([category, pages]) => (
                <optgroup key={category} label={getCategoryDisplayName(category)}>
                  {pages.map((page) => (
                    <option key={page.pageName} value={page.pageName}>{page.pageName}</option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Section</label>
            <select
              value={selectedSectionIndex}
              onChange={(e) => handleSectionChange(parseInt(e.target.value))}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent bg-white text-sm"
              disabled={availableSections.length === 0}
            >
              {availableSections.length === 0 ? (
                <option>No sections available</option>
              ) : (
                availableSections.map((sec, index) => (
                  <option key={sec.id} value={index}>{sec.displayName}</option>
                ))
              )}
            </select>
          </div>

          {currentSection?.description && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
              <Info className="text-blue-500 flex-shrink-0 mt-0.5" size={16} />
              <p className="text-blue-800 text-sm">{currentSection.description}</p>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Alt Text</label>
            <input
              type="text"
              value={altText}
              onChange={(e) => setAltText(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1a3c75] focus:border-transparent text-sm"
            />
            <p className="text-xs text-slate-400 mt-1">Describes the image for accessibility and SEO</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Image File</label>
            <DropZone file={file} onFile={setFile} id="section-file-input" label="Click to select image" />
          </div>

          {result && (
            <div className={`flex items-start gap-3 p-4 rounded-xl text-sm ${result.success ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
              {result.success ? <CheckCircle size={18} className="flex-shrink-0 mt-0.5" /> : <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />}
              {result.message}
            </div>
          )}

          <button
            type="submit"
            disabled={uploading || !file}
            className="w-full py-3 bg-[#1a3c75] text-white rounded-xl font-bold hover:bg-[#153060] disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-colors"
          >
            {uploading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                Uploading...
              </span>
            ) : 'Upload Image'}
          </button>
        </form>
      </UploadDrawer>
    </div>
  );
}

import { useState } from 'react';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { uploadSiteImage } from '../lib/siteImages';

export function ImageUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [section, setSection] = useState('membership-loudoun-county-chamber');
  const [title, setTitle] = useState('Loudoun County Chamber Logo');
  const [altText, setAltText] = useState('Loudoun County Chamber of Commerce logo');
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setResult({ success: false, message: 'Please select a file' });
      return;
    }

    setUploading(true);
    setResult(null);

    const response = await uploadSiteImage(file, section, title, altText);

    setUploading(false);

    if (response.success) {
      setResult({ success: true, message: 'Image uploaded successfully!' });
      setFile(null);
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } else {
      setResult({ success: false, message: response.error || 'Upload failed' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Upload Site Image</h1>

          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Section
              </label>
              <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="about">About</option>
                <option value="hero">Hero</option>
                <option value="services">Services</option>
                <option value="testimonials">Testimonials</option>
                <optgroup label="Memberships">
                  <option value="membership-loudoun-county-chamber">Loudoun County Chamber</option>
                  <option value="membership-purcellville-business">Purcellville Business Association</option>
                  <option value="membership-aoba">AOBA</option>
                  <option value="membership-iwca">IWCA</option>
                </optgroup>
                <optgroup label="Partners">
                  <option value="partner-lucid-bots">Lucid BOTS</option>
                  <option value="partner-apellix">Apellix</option>
                  <option value="partner-midwest-washing">Midwest Washing Equipment</option>
                  <option value="partner-sesw">SESW</option>
                  <option value="partner-window-cleaning">Window Cleaning Resource</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Alt Text
              </label>
              <input
                type="text"
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Image File
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="w-full flex flex-col items-center px-4 py-6 bg-slate-50 text-slate-500 rounded-lg border-2 border-slate-300 border-dashed cursor-pointer hover:bg-slate-100">
                  <Upload size={40} className="mb-2" />
                  <span className="text-sm">
                    {file ? file.name : 'Click to select image'}
                  </span>
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </label>
              </div>
            </div>

            {result && (
              <div
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  result.success
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {result.success ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span>{result.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={uploading || !file}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
            >
              {uploading ? 'Uploading...' : 'Upload Image'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

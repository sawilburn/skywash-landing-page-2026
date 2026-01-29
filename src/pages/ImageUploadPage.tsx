import { useState, useRef, useEffect } from 'react';
import { Upload, CheckCircle, AlertCircle, ImageIcon, Trash2, Eye, EyeOff, RefreshCw, Info } from 'lucide-react';
import {
  uploadSiteImage,
  uploadBeforeAfterImages,
  getAllBeforeAfterImages,
  updateBeforeAfterImageStatus,
  deleteBeforeAfterImage,
  getImageUrl,
  BeforeAfterImage
} from '../lib/siteImages';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { PAGE_SECTION_MAPPINGS, getPagesByCategory, getCategoryDisplayName, getSectionsForPage, ImageSection } from '../lib/pageSectionMapping';

type UploadMode = 'section' | 'before-after';

export function ImageUploadPage() {
  const [mode, setMode] = useState<UploadMode>('section');
  const [file, setFile] = useState<File | null>(null);
  const [beforeFile, setBeforeFile] = useState<File | null>(null);
  const [afterFile, setAfterFile] = useState<File | null>(null);
  const [beforePreview, setBeforePreview] = useState<string>('');
  const [afterPreview, setAfterPreview] = useState<string>('');

  const [selectedPage, setSelectedPage] = useState('Home Page');
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [availableSections, setAvailableSections] = useState<ImageSection[]>([]);

  const [section, setSection] = useState('about');
  const [serviceType, setServiceType] = useState('roof');
  const [beforeAlt, setBeforeAlt] = useState('Roof covered with Gloeocapsa magma bacteria');
  const [afterAlt, setAfterAlt] = useState('Clean roof after professional soft washing');
  const [title, setTitle] = useState('Drone Cleaning Technology');
  const [altText, setAltText] = useState('Drone cleaning technology in action');
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
  const [allImages, setAllImages] = useState<BeforeAfterImage[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);

  const pagesByCategory = getPagesByCategory();

  useEffect(() => {
    const sections = getSectionsForPage(selectedPage);
    setAvailableSections(sections);
    if (sections.length > 0) {
      setSelectedSectionIndex(0);
      updateFormFieldsFromSection(sections[0]);
    }
  }, []);

  const updateFormFieldsFromSection = (imageSection: ImageSection) => {
    setSection(imageSection.id);
    setTitle(imageSection.displayName);
    setAltText(imageSection.suggestedAltText);
  };

  const handlePageChange = (pageName: string) => {
    setSelectedPage(pageName);
    const sections = getSectionsForPage(pageName);
    setAvailableSections(sections);
    if (sections.length > 0) {
      setSelectedSectionIndex(0);
      updateFormFieldsFromSection(sections[0]);
    }
    setResult(null);
  };

  const handleSectionChange = (index: number) => {
    setSelectedSectionIndex(index);
    if (availableSections[index]) {
      updateFormFieldsFromSection(availableSections[index]);
    }
    setResult(null);
  };

  const loadAllImages = async () => {
    setLoadingImages(true);
    const images = await getAllBeforeAfterImages();
    setAllImages(images);
    setLoadingImages(false);
  };

  useEffect(() => {
    if (mode === 'before-after') {
      loadAllImages();
    }
  }, [mode]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null);
    }
  };

  const handleBeforeFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setBeforeFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBeforePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const handleAfterFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAfterFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAfterPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const handleModeChange = (newMode: UploadMode) => {
    setMode(newMode);
    setResult(null);
    setFile(null);
    setBeforeFile(null);
    setAfterFile(null);
    setBeforePreview('');
    setAfterPreview('');
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === 'section') {
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
    } else {
      if (!beforeFile || !afterFile) {
        setResult({ success: false, message: 'Please select both before and after images' });
        return;
      }

      setUploading(true);
      setResult(null);

      const response = await uploadBeforeAfterImages(
        beforeFile,
        afterFile,
        serviceType,
        beforeAlt,
        afterAlt
      );

      setUploading(false);

      if (response.success && response.data) {
        setResult({
          success: true,
          message: `Before/After images uploaded successfully! Files: ${response.data.before_image_path} & ${response.data.after_image_path}`,
        });
        setBeforeFile(null);
        setAfterFile(null);
        setBeforePreview('');
        setAfterPreview('');
        const beforeInput = document.getElementById('before-input') as HTMLInputElement;
        const afterInput = document.getElementById('after-input') as HTMLInputElement;
        if (beforeInput) beforeInput.value = '';
        if (afterInput) afterInput.value = '';
        loadAllImages();
      } else {
        setResult({ success: false, message: response.error || 'Upload failed' });
      }
    }
  };

  const currentSection = availableSections[selectedSectionIndex];

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Upload Site Images</h1>
          <p className="text-slate-600 mb-6">Select a page and section to upload images for your website</p>

          <div className="mb-6 flex gap-4">
            <button
              type="button"
              onClick={() => handleModeChange('section')}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                mode === 'section'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <ImageIcon className="inline-block mr-2" size={20} />
              Section Image
            </button>
            <button
              type="button"
              onClick={() => handleModeChange('before-after')}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all ${
                mode === 'before-after'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <ImageIcon className="inline-block mr-2" size={20} />
              Before/After Images
            </button>
          </div>

          <form onSubmit={handleUpload} className="space-y-6">
            {mode === 'section' ? (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Select Page
                    </label>
                    <select
                      value={selectedPage}
                      onChange={(e) => handlePageChange(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      {Object.entries(pagesByCategory).map(([category, pages]) => (
                        <optgroup key={category} label={getCategoryDisplayName(category)}>
                          {pages.map((page) => (
                            <option key={page.pageName} value={page.pageName}>
                              {page.pageName}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Select Section
                    </label>
                    <select
                      value={selectedSectionIndex}
                      onChange={(e) => handleSectionChange(parseInt(e.target.value))}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      disabled={availableSections.length === 0}
                    >
                      {availableSections.length === 0 ? (
                        <option>No sections available</option>
                      ) : (
                        availableSections.map((sec, index) => (
                          <option key={sec.id} value={index}>
                            {sec.displayName}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                </div>

                {currentSection && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
                      <div className="text-sm">
                        <p className="font-semibold text-blue-900 mb-1">Section Information</p>
                        <p className="text-blue-800 mb-2">{currentSection.description || 'Upload an image for this section'}</p>
                        <div className="space-y-1 text-xs text-blue-700">
                          <p><strong>Section ID:</strong> {currentSection.id}</p>
                          {currentSection.fallbackImage && (
                            <p><strong>Current Fallback:</strong> {currentSection.fallbackImage}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

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
                  <p className="mt-1 text-xs text-slate-500">
                    Describe the image for accessibility and SEO
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Image File
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="w-full flex flex-col items-center px-4 py-6 bg-slate-50 text-slate-500 rounded-lg border-2 border-slate-300 border-dashed cursor-pointer hover:bg-slate-100 transition-colors">
                      <Upload size={40} className="mb-2" />
                      <span className="text-sm font-medium">
                        {file ? file.name : 'Click to select image'}
                      </span>
                      <span className="text-xs text-slate-400 mt-1">
                        PNG, JPG, WEBP up to 10MB
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
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Service Type
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="roof">Roof</option>
                    <option value="solar">Solar Panels</option>
                    <option value="house">House Washing</option>
                    <option value="siding">Siding</option>
                    <option value="driveway">Driveway</option>
                    <option value="deck">Deck</option>
                    <option value="fence">Fence</option>
                    <option value="patio">Patio</option>
                    <option value="gutters">Gutters</option>
                    <option value="windows">Windows</option>
                  </select>
                  <p className="mt-1 text-xs text-slate-500">
                    Original filenames will be preserved with a timestamp prefix
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Before Alt Text
                    </label>
                    <input
                      type="text"
                      value={beforeAlt}
                      onChange={(e) => setBeforeAlt(e.target.value)}
                      required
                      placeholder="Dirty roof before cleaning"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      After Alt Text
                    </label>
                    <input
                      type="text"
                      value={afterAlt}
                      onChange={(e) => setAfterAlt(e.target.value)}
                      required
                      placeholder="Clean roof after professional washing"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Before Image
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="w-full flex flex-col items-center px-4 py-6 bg-slate-50 text-slate-500 rounded-lg border-2 border-slate-300 border-dashed cursor-pointer hover:bg-slate-100">
                        <Upload size={40} className="mb-2" />
                        <span className="text-sm text-center">
                          {beforeFile ? beforeFile.name : 'Before (dirty)'}
                        </span>
                        <input
                          id="before-input"
                          type="file"
                          accept="image/*"
                          onChange={handleBeforeFileChange}
                          className="hidden"
                          required
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      After Image
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="w-full flex flex-col items-center px-4 py-6 bg-slate-50 text-slate-500 rounded-lg border-2 border-slate-300 border-dashed cursor-pointer hover:bg-slate-100">
                        <Upload size={40} className="mb-2" />
                        <span className="text-sm text-center">
                          {afterFile ? afterFile.name : 'After (clean)'}
                        </span>
                        <input
                          id="after-input"
                          type="file"
                          accept="image/*"
                          onChange={handleAfterFileChange}
                          className="hidden"
                          required
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {beforePreview && afterPreview && (
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Preview
                    </label>
                    <BeforeAfterSliderPreview
                      beforeImage={beforePreview}
                      afterImage={afterPreview}
                    />
                  </div>
                )}
              </>
            )}

            {result && (
              <div
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  result.success
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {result.success ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span className="text-sm">{result.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={uploading || (mode === 'section' ? !file : !beforeFile || !afterFile)}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl"
            >
              {uploading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Uploading...
                </span>
              ) : (
                mode === 'section' ? 'Upload Image' : 'Upload Before/After Images'
              )}
            </button>
          </form>

          {mode === 'before-after' && (
            <div className="mt-12 pt-12 border-t border-slate-200">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Manage Before/After Images</h2>
                <button
                  onClick={loadAllImages}
                  disabled={loadingImages}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors disabled:opacity-50"
                >
                  <RefreshCw size={18} className={loadingImages ? 'animate-spin' : ''} />
                  Refresh
                </button>
              </div>

              {loadingImages ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  <p className="mt-4 text-slate-600">Loading images...</p>
                </div>
              ) : allImages.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-lg">
                  <ImageIcon className="mx-auto mb-4 text-slate-400" size={48} />
                  <p className="text-slate-600">No before/after images uploaded yet</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {allImages.map((image) => (
                    <ImageManagementCard
                      key={image.id}
                      image={image}
                      onToggleActive={async () => {
                        await updateBeforeAfterImageStatus(
                          image.id,
                          !image.is_active,
                          image.service_type
                        );
                        loadAllImages();
                      }}
                      onDelete={async () => {
                        if (confirm('Are you sure you want to delete this image pair?')) {
                          await deleteBeforeAfterImage(image.id);
                          loadAllImages();
                        }
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ImageManagementCard({
  image,
  onToggleActive,
  onDelete,
}: {
  image: BeforeAfterImage;
  onToggleActive: () => void;
  onDelete: () => void;
}) {
  return (
    <div
      className={`bg-slate-50 rounded-xl p-6 border-2 transition-all ${
        image.is_active ? 'border-green-500 bg-green-50' : 'border-slate-200'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 capitalize">{image.service_type}</h3>
          <p className="text-sm text-slate-500">
            {new Date(image.created_at).toLocaleDateString()}
          </p>
          {image.is_active && (
            <span className="inline-block mt-2 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
              Active
            </span>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={onToggleActive}
            className={`p-2 rounded-lg transition-colors ${
              image.is_active
                ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                : 'bg-green-100 text-green-700 hover:bg-green-200'
            }`}
            title={image.is_active ? 'Deactivate' : 'Activate'}
          >
            {image.is_active ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          <button
            onClick={onDelete}
            className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
            title="Delete"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-700 mb-2">Before Image</p>
          <div className="bg-white rounded-lg overflow-hidden border border-slate-200">
            <img
              src={getImageUrl(image.before_image_path)}
              alt={image.before_alt}
              className="w-full h-48 object-cover"
            />
          </div>
          <p className="text-xs text-slate-500 mt-2 break-all">{image.before_image_path}</p>
          <p className="text-xs text-slate-600 mt-1">{image.before_alt}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-700 mb-2">After Image</p>
          <div className="bg-white rounded-lg overflow-hidden border border-slate-200">
            <img
              src={getImageUrl(image.after_image_path)}
              alt={image.after_alt}
              className="w-full h-48 object-cover"
            />
          </div>
          <p className="text-xs text-slate-500 mt-2 break-all">{image.after_image_path}</p>
          <p className="text-xs text-slate-600 mt-1">{image.after_alt}</p>
        </div>
      </div>
    </div>
  );
}

function BeforeAfterSliderPreview({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg cursor-col-resize select-none bg-slate-200"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseMove={(e) => isDragging && handleMove(e.clientX)}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={(e) => isDragging && handleMove(e.touches[0].clientX)}
    >
      <div className="absolute inset-0 w-full h-full">
        <img src={afterImage} alt="After" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex space-x-1">
            <div className="w-0.5 h-3 bg-slate-400"></div>
            <div className="w-0.5 h-3 bg-slate-400"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-2 left-2 bg-black/60 text-white px-3 py-1 rounded text-xs font-semibold">
        Before
      </div>
      <div className="absolute top-2 right-2 bg-black/60 text-white px-3 py-1 rounded text-xs font-semibold">
        After
      </div>
    </div>
  );
}

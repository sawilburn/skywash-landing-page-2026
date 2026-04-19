import { useState } from 'react';
import { AdminLayout } from './admin/AdminLayout';
import { OverviewTab } from './admin/OverviewTab';
import { SectionImagesTab } from './admin/SectionImagesTab';
import { BeforeAfterTab } from './admin/BeforeAfterTab';
import { VideosTab } from './admin/VideosTab';

type Tab = 'overview' | 'section-images' | 'before-after' | 'videos';

export function ImageUploadPage() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [openSectionUpload, setOpenSectionUpload] = useState(false);
  const [openBeforeAfterUpload, setOpenBeforeAfterUpload] = useState(false);
  const [openVideoUpload, setOpenVideoUpload] = useState(false);

  const handleTabChange = (tab: string) => setActiveTab(tab as Tab);

  const handleQuickAction = (tab: string) => {
    setActiveTab(tab as Tab);
    if (tab === 'section-images') setOpenSectionUpload(true);
    if (tab === 'before-after') setOpenBeforeAfterUpload(true);
    if (tab === 'videos') setOpenVideoUpload(true);
  };

  return (
    <AdminLayout activeTab={activeTab} onTabChange={handleTabChange}>
      {activeTab === 'overview' && <OverviewTab onTabChange={handleTabChange} onQuickAction={handleQuickAction} />}
      {activeTab === 'section-images' && (
        <SectionImagesTab autoOpenUpload={openSectionUpload} onAutoOpenHandled={() => setOpenSectionUpload(false)} />
      )}
      {activeTab === 'before-after' && (
        <BeforeAfterTab autoOpenUpload={openBeforeAfterUpload} onAutoOpenHandled={() => setOpenBeforeAfterUpload(false)} />
      )}
      {activeTab === 'videos' && (
        <VideosTab autoOpenUpload={openVideoUpload} onAutoOpenHandled={() => setOpenVideoUpload(false)} />
      )}
    </AdminLayout>
  );
}

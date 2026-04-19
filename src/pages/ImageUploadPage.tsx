import { useState } from 'react';
import { AdminLayout } from './admin/AdminLayout';
import { OverviewTab } from './admin/OverviewTab';
import { SectionImagesTab } from './admin/SectionImagesTab';
import { BeforeAfterTab } from './admin/BeforeAfterTab';
import { VideosTab } from './admin/VideosTab';

type Tab = 'overview' | 'section-images' | 'before-after' | 'videos';

export function ImageUploadPage() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const handleTabChange = (tab: string) => setActiveTab(tab as Tab);

  return (
    <AdminLayout activeTab={activeTab} onTabChange={handleTabChange}>
      {activeTab === 'overview' && <OverviewTab onTabChange={handleTabChange} />}
      {activeTab === 'section-images' && <SectionImagesTab />}
      {activeTab === 'before-after' && <BeforeAfterTab />}
      {activeTab === 'videos' && <VideosTab />}
    </AdminLayout>
  );
}

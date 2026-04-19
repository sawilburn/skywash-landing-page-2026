import { useEffect, useState } from 'react';
import { Layers, Image as ImageIcon, Video, TrendingUp } from 'lucide-react';
import { getAllBeforeAfterImages } from '../../lib/siteImages';
import { getAllVideos } from '../../lib/siteVideos';
import { supabase } from '../../lib/supabase';

interface Stats {
  sectionImages: number;
  activeSectionImages: number;
  beforeAfterPairs: number;
  activeBeforeAfterPairs: number;
  videos: number;
  activeVideos: number;
}

export function OverviewTab({ onTabChange }: { onTabChange: (tab: string) => void }) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const [{ data: sectionData }, baImages, videos] = await Promise.all([
        supabase.from('site_images').select('is_active'),
        getAllBeforeAfterImages(),
        getAllVideos(),
      ]);

      const sectionImages = sectionData || [];
      setStats({
        sectionImages: sectionImages.length,
        activeSectionImages: sectionImages.filter(i => i.is_active).length,
        beforeAfterPairs: baImages.length,
        activeBeforeAfterPairs: baImages.filter(i => i.is_active).length,
        videos: videos.length,
        activeVideos: videos.filter(v => v.is_active).length,
      });
      setLoading(false);
    };
    load();
  }, []);

  const cards = [
    {
      tab: 'section-images',
      icon: Layers,
      label: 'Section Images',
      color: 'bg-sky-500',
      lightBg: 'bg-sky-50 border-sky-200',
      total: stats?.sectionImages ?? 0,
      active: stats?.activeSectionImages ?? 0,
    },
    {
      tab: 'before-after',
      icon: ImageIcon,
      label: 'Before / After Pairs',
      color: 'bg-teal-500',
      lightBg: 'bg-teal-50 border-teal-200',
      total: stats?.beforeAfterPairs ?? 0,
      active: stats?.activeBeforeAfterPairs ?? 0,
    },
    {
      tab: 'videos',
      icon: Video,
      label: 'Videos',
      color: 'bg-[#1a3c75]',
      lightBg: 'bg-blue-50 border-blue-200',
      total: stats?.videos ?? 0,
      active: stats?.activeVideos ?? 0,
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
        <p className="text-slate-500 text-sm mt-0.5">Summary of all media assets on your site</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1a3c75]" />
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {cards.map(card => {
              const Icon = card.icon;
              return (
                <button
                  key={card.tab}
                  onClick={() => onTabChange(card.tab)}
                  className={`text-left p-6 rounded-2xl border ${card.lightBg} hover:shadow-md transition-all`}
                >
                  <div className={`w-11 h-11 ${card.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={22} />
                  </div>
                  <p className="text-3xl font-black text-slate-900 mb-0.5">{card.total}</p>
                  <p className="text-sm font-semibold text-slate-700 mb-1">{card.label}</p>
                  <p className="text-xs text-slate-500">{card.active} active</p>
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="text-[#1a3c75]" size={20} />
              <h3 className="font-bold text-slate-900">Quick Actions</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { tab: 'section-images', label: 'Upload a section image', desc: 'Add or replace images on any page section' },
                { tab: 'before-after', label: 'Add before/after pair', desc: 'Upload a new comparison pair for a service' },
                { tab: 'videos', label: 'Upload a video', desc: 'Add a new video to the site' },
              ].map(item => (
                <button
                  key={item.tab}
                  onClick={() => onTabChange(item.tab)}
                  className="text-left p-4 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors"
                >
                  <p className="font-semibold text-slate-900 text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

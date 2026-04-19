import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Image as ImageIcon, Video, Layers, LayoutDashboard, Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard, hash: '#overview' },
  { id: 'section-images', label: 'Section Images', icon: Layers, hash: '#section-images' },
  { id: 'before-after', label: 'Before / After', icon: ImageIcon, hash: '#before-after' },
  { id: 'videos', label: 'Videos', icon: Video, hash: '#videos' },
];

interface AdminLayoutProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  children: React.ReactNode;
}

export function AdminLayout({ activeTab, onTabChange, children }: AdminLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100 pt-20">
      <div className="flex">
        <aside className={`
          fixed top-20 left-0 bottom-0 w-64 bg-white border-r border-slate-200 z-40 flex flex-col
          transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}>
          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#1a3c75] rounded-lg flex items-center justify-center">
                <LayoutDashboard className="text-white" size={18} />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Media Manager</p>
                <p className="text-xs text-slate-500">Skywash Admin</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onTabChange(item.id);
                    setMobileOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#1a3c75] text-white shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                  {isActive && <ChevronRight size={16} className="ml-auto" />}
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-100">
            <Link
              to="/"
              className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-700 transition-colors"
            >
              View live site
            </Link>
          </div>
        </aside>

        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <div className="flex-1 lg:ml-64 min-h-screen">
          <div className="lg:hidden sticky top-20 z-20 bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700"
            >
              <Menu size={20} />
            </button>
            <span className="font-semibold text-slate-900">
              {navItems.find(n => n.id === activeTab)?.label ?? 'Admin'}
            </span>
          </div>

          <main className="p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

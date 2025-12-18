import React from 'react';
import { BookA, GitBranch, Languages, LayoutDashboard, Settings, Activity, Terminal, FileJson } from 'lucide-react';
import { ViewState } from '../types';
import { useTranslation } from '../i18n';

interface SidebarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  onOpenProjectSettings: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, onOpenProjectSettings }) => {
  const { t } = useTranslation();

  const navItems = [
    { id: 'DASHBOARD', label: t('nav.dashboard'), icon: LayoutDashboard },
    { id: 'PHONOLOGY', label: t('nav.phonology'), icon: Activity },
    { id: 'LEXICON', label: t('nav.lexicon'), icon: BookA },
    { id: 'GRAMMAR', label: t('nav.grammar'), icon: Languages },
    { id: 'GENEVOLVE', label: t('nav.genevolve'), icon: GitBranch },
    { id: 'CONSOLE', label: t('nav.console'), icon: Terminal }, 
    { id: 'SOURCE', label: t('nav.source'), icon: FileJson }, // NEW
  ];

  return (
    <aside className="w-64 bg-slate-850 border-r border-slate-700 flex flex-col h-full shrink-0">
      <div className="p-4 border-b border-slate-700">
        <h1 className="text-lg font-bold text-blue-500 tracking-tight flex items-center gap-2">
            <span className="text-xl">⚡</span>
            {t('app.title')}
        </h1>
        <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-semibold ml-7">{t('app.subtitle')}</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-4 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">Explorer</div>
        <ul className="space-y-0.5 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setView(item.id as ViewState)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium transition-all border-l-2 ${
                    isActive
                      ? 'bg-slate-800 text-white border-blue-500'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100 border-transparent'
                  }`}
                >
                  <Icon size={16} className={isActive ? 'text-blue-400' : 'text-slate-500'} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-3 border-t border-slate-700">
        <button 
          onClick={onOpenProjectSettings}
          className="flex items-center gap-3 text-slate-400 hover:text-white text-sm font-medium w-full px-3 py-2 rounded hover:bg-slate-800 transition-colors"
        >
          <Settings size={16} />
          {t('settings.title')}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
'use client';

import { useState, useEffect } from 'react';

type Tab = 'windows' | 'macos' | 'linux';

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState<Tab>('windows');

  useEffect(() => {
    const saved = localStorage.getItem('selectedTab') as Tab;
    if (saved && ['windows', 'macos', 'linux'].includes(saved)) {
      setActiveTab(saved);
    }
  }, []);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    localStorage.setItem('selectedTab', tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="flex gap-3 mb-8 bg-white p-3 rounded-xl shadow-sm flex-wrap">
        <button
          className={`flex-1 min-w-[150px] px-6 py-4 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
            activeTab === 'windows'
              ? 'bg-gradient-to-br from-primary to-primary-light text-white shadow-lg shadow-primary/40'
              : 'bg-gray-100 hover:bg-gray-200 hover:-translate-y-0.5'
          }`}
          onClick={() => handleTabChange('windows')}
        >
          <span className="text-xl">🪟</span>
          <span>Windows</span>
        </button>
        <button
          className={`flex-1 min-w-[150px] px-6 py-4 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
            activeTab === 'macos'
              ? 'bg-gradient-to-br from-primary to-primary-light text-white shadow-lg shadow-primary/40'
              : 'bg-gray-100 hover:bg-gray-200 hover:-translate-y-0.5'
          }`}
          onClick={() => handleTabChange('macos')}
        >
          <span className="text-xl">🍎</span>
          <span>macOS</span>
        </button>
        <button
          className={`flex-1 min-w-[150px] px-6 py-4 rounded-lg font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
            activeTab === 'linux'
              ? 'bg-gradient-to-br from-primary to-primary-light text-white shadow-lg shadow-primary/40'
              : 'bg-gray-100 hover:bg-gray-200 hover:-translate-y-0.5'
          }`}
          onClick={() => handleTabChange('linux')}
        >
          <span className="text-xl">🐧</span>
          <span>Linux / WSL2</span>
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'windows' && <WindowsContent />}
      {activeTab === 'macos' && <MacOSContent />}
      {activeTab === 'linux' && <LinuxContent />}
    </div>
  );
}

// Import content components
import WindowsContent from './WindowsContent';
import MacOSContent from './MacOSContent';
import LinuxContent from './LinuxContent';

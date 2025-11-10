'use client';

import { useState } from 'react';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

export default function Collapse({ title, children }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-50 px-5 py-4 cursor-pointer font-semibold text-base text-left transition-all hover:bg-gray-100 flex items-center gap-2"
      >
        <span
          className="inline-block transition-transform text-xs mr-2"
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        >
          ▶
        </span>
        {title}
      </button>
      {isOpen && (
        <div className="p-5 bg-white border-t border-gray-200 animate-slideDown">
          {children}
        </div>
      )}
    </div>
  );
}

'use client';

import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  title?: string;
}

export default function CodeBlock({ code, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative bg-gray-900 text-gray-200 p-4 rounded-lg font-mono text-sm overflow-x-auto my-3 shadow-md">
      {title && (
        <div className="text-green-400 text-xs font-bold mb-2">{title}</div>
      )}
      <pre className="m-0 whitespace-pre leading-relaxed">{code}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 py-1 bg-white/10 border border-white/30 rounded text-gray-200 text-xs cursor-pointer transition-all hover:bg-white/20"
      >
        {copied ? '✅ 已复制' : '📋 复制'}
      </button>
    </div>
  );
}

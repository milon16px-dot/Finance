import React from 'react';

interface AdSpaceProps {
  type?: 'banner' | 'sidebar' | 'in-article';
  className?: string;
}

export default function AdSpace({ type = 'in-article', className = '' }: AdSpaceProps) {
  const heightClass = {
    'banner': 'h-32',
    'sidebar': 'h-64',
    'in-article': 'h-48'
  }[type];

  return (
    <div className={`ad-placeholder flex flex-col items-center justify-center ${heightClass} ${className}`}>
      <span className="mb-2">Advertisement</span>
      <div className="w-12 h-1 bg-slate-200 rounded-full"></div>
      <span className="mt-2 text-[10px] opacity-50">Ad Space Placeholder</span>
    </div>
  );
}

import React from 'react';

interface StepCardProps {
  step: number;
  title: string;
  color: string;
  children: React.ReactNode;
}

export default function StepCard({ step, title, color, children }: StepCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 mb-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
          style={{ backgroundColor: color }}
        >
          {step}
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 m-0">{title}</h3>
      </div>
      {children}
    </div>
  );
}

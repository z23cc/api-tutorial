import React from 'react';

type AlertType = 'info' | 'success' | 'warning';

interface AlertProps {
  type: AlertType;
  icon: string;
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Alert({ type, icon, title, description, children }: AlertProps) {
  const typeStyles = {
    info: 'bg-primary-lightest border-l-primary text-neutral-text',
    success: 'bg-green-50 border-l-green-500 text-green-900',
    warning: 'bg-secondary-light border-l-secondary text-neutral-text',
  };

  return (
    <div className={`flex gap-3 p-4 rounded-lg mb-4 border-l-4 ${typeStyles[type]}`}>
      <div className="text-xl flex-shrink-0">{icon}</div>
      <div className="flex-1">
        <div className="font-semibold mb-2">{title}</div>
        {description && <div className="text-sm leading-relaxed">{description}</div>}
        {children}
      </div>
    </div>
  );
}

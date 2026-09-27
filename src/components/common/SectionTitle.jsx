import React from 'react';
import { Sparkles } from 'lucide-react';

export const SectionTitle = ({ tag, title, subtitle, center = true, light = false }) => {
  return (
    <div className={`section-header ${center ? 'center' : 'left'}`}>
      {tag && (
        <span className="section-tag">
          <Sparkles size={14} />
          {tag}
        </span>
      )}
      <h2 className="section-title" style={light ? { color: '#FFFFFF' } : {}}>
        {title}
      </h2>
      {subtitle && (
        <p className="section-subtitle" style={light ? { color: '#A1A1AA' } : {}}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

import React, { useEffect } from 'react';
import mermaid from 'mermaid';

// Configure mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  themeVariables: {
    primaryColor: '#4f46e5',
    primaryTextColor: '#fff',
    primaryBorderColor: '#6366f1',
    lineColor: '#6366f1',
    secondaryColor: '#3730a3',
    tertiaryColor: '#312e81'
  }
});

interface MermaidDiagramProps {
  chart: string;
  className?: string;
}

export function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  useEffect(() => {
    mermaid.contentLoaded();
  }, [chart]);

  return (
    <div className={`mermaid ${className} bg-gray-900 p-6 rounded-lg shadow-lg my-6`}>
      {chart}
    </div>
  );
}

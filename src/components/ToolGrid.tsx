
import React from 'react';
import ToolCard, { Tool } from './ToolCard';

interface ToolGridProps {
  tools: Tool[];
  className?: string;
}

const ToolGrid: React.FC<ToolGridProps> = ({ tools, className = "" }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${className}`}>
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
};

export default ToolGrid;

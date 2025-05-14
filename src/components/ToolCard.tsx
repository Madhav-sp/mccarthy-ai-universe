
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Tool {
  id: number;
  name: string;
  description: string;
  logo: string;
  tags: string[];
  category: string;
  rating: number;
  isNew?: boolean;
  isPopular?: boolean;
}

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, className }) => {
  return (
    <div className={cn("tool-card bg-card rounded-xl border border-border/50 overflow-hidden flex flex-col h-full", className)}>
      <div className="p-5 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
              <img src={tool.logo} alt={tool.name} className="h-8 w-8 object-contain" />
            </div>
            <div>
              <h3 className="font-medium text-lg">{tool.name}</h3>
              <div className="flex items-center gap-1">
                {tool.rating > 0 && (
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(tool.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-xs text-muted-foreground">{tool.rating.toFixed(1)}</span>
                  </div>
                )}
                {tool.isNew && (
                  <span className="text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full font-medium">New</span>
                )}
                {tool.isPopular && (
                  <span className="text-xs bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded-full font-medium">Popular</span>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{tool.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {tool.tags.map((tag, index) => (
            <span key={index} className="tag text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-2 mt-auto">
          <Button asChild className="flex-1" variant="default" size="sm">
            <Link to={`/tool/${tool.id}`}>Use Now</Link>
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to favorites</span>
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add to playlist</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;

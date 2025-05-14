
import React from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

interface FilterSidebarProps {
  className?: string;
  onResetFilters?: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ className = "", onResetFilters }) => {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Filters</h3>
        <Button variant="ghost" size="sm" onClick={onResetFilters}>
          Reset
        </Button>
      </div>

      <div>
        <h4 className="font-medium text-sm mb-3">Categories</h4>
        <div className="space-y-2">
          {['Text Generation', 'Image Generation', 'Voice Generation', 'Video Generation', 'Code Generation'].map((category) => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox id={category} />
              <Label htmlFor={category} className="text-sm font-normal cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="font-medium text-sm mb-3">Pricing</h4>
        <div className="space-y-2">
          {['Free', 'Freemium', 'Paid', 'Subscription'].map((price) => (
            <div key={price} className="flex items-center gap-2">
              <Checkbox id={price} />
              <Label htmlFor={price} className="text-sm font-normal cursor-pointer">
                {price}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="font-medium text-sm mb-3">Rating</h4>
        <div className="px-2">
          <Slider defaultValue={[3.5]} max={5} step={0.5} />
          <div className="flex justify-between mt-2">
            <span className="text-xs text-muted-foreground">0</span>
            <span className="text-xs text-muted-foreground">5</span>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="font-medium text-sm mb-3">Popular Tags</h4>
        <div className="flex flex-wrap gap-2">
          {['Copywriting', 'Summarization', 'Translation', 'Chatbot', 'Data Analysis'].map((tag) => (
            <Button key={tag} variant="outline" size="sm" className="h-7 text-xs rounded-full">
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

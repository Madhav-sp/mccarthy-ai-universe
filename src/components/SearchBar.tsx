
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string, filters?: SearchFilters) => void;
}

export interface SearchFilters {
  categories: string[];
  priceOptions: string[];
  ratings: number[];
  featuredOnly: boolean;
  newOnly: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Search for AI tools...", 
  className = "",
  onSearch 
}) => {
  const { toast } = useToast();
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    categories: [],
    priceOptions: [],
    ratings: [],
    featuredOnly: false,
    newOnly: false
  });

  // Categories
  const categories = [
    { id: 'text', name: 'Text Generation' },
    { id: 'image', name: 'Image Generation' },
    { id: 'voice', name: 'Voice Generation' },
    { id: 'video', name: 'Video Generation' },
    { id: 'code', name: 'Code Generation' },
    { id: 'data', name: 'Data Analysis' }
  ];

  // Price options
  const priceOptions = [
    { id: 'free', name: 'Free' },
    { id: 'freemium', name: 'Freemium' },
    { id: 'paid', name: 'Paid' }
  ];
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query, filters);
    } else {
      // Default behavior if no onSearch provided
      toast({
        title: "Search initiated",
        description: `Searching for "${query}"${filters.categories.length ? ` in ${filters.categories.join(", ")}` : ''}`,
      });
      console.log("Search:", query, filters);
    }
  };

  const clearSearch = () => {
    setQuery('');
    // Reset filters if needed
    // setFilters({...});
  };

  const toggleCategory = (categoryId: string) => {
    setFilters(prevFilters => {
      const newCategories = prevFilters.categories.includes(categoryId)
        ? prevFilters.categories.filter(id => id !== categoryId)
        : [...prevFilters.categories, categoryId];
      
      return {
        ...prevFilters,
        categories: newCategories
      };
    });
  };

  const togglePriceOption = (optionId: string) => {
    setFilters(prevFilters => {
      const newOptions = prevFilters.priceOptions.includes(optionId)
        ? prevFilters.priceOptions.filter(id => id !== optionId)
        : [...prevFilters.priceOptions, optionId];
      
      return {
        ...prevFilters,
        priceOptions: newOptions
      };
    });
  };

  const toggleRating = (rating: number) => {
    setFilters(prevFilters => {
      const newRatings = prevFilters.ratings.includes(rating)
        ? prevFilters.ratings.filter(r => r !== rating)
        : [...prevFilters.ratings, rating];
      
      return {
        ...prevFilters,
        ratings: newRatings
      };
    });
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative flex w-full">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-20 h-12 rounded-l-full bg-white dark:bg-slate-800 dark:text-white shadow-sm border-input dark:border-slate-700"
          />
          {query && (
            <button 
              type="button" 
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </button>
          )}
        </div>

        <Dialog open={showFilters} onOpenChange={setShowFilters}>
          <DialogTrigger asChild>
            <Button 
              type="button"
              className="h-12 px-4 rounded-none flex items-center gap-2 border-r border-y border-input dark:bg-slate-700 dark:border-slate-600"
              variant="outline"
            >
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filters</span>
              {(filters.categories.length > 0 || filters.priceOptions.length > 0 || filters.ratings.length > 0 || filters.featuredOnly || filters.newOnly) && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                  {filters.categories.length + filters.priceOptions.length + filters.ratings.length + (filters.featuredOnly ? 1 : 0) + (filters.newOnly ? 1 : 0)}
                </span>
              )}
            </Button>
          </DialogTrigger>
          
          <DialogContent className="sm:max-w-[425px] dark:bg-slate-800 dark:text-white dark:border-slate-700">
            <DialogHeader>
              <DialogTitle className="dark:text-white">Search Filters</DialogTitle>
              <DialogDescription className="dark:text-slate-400">
                Narrow down your search with these filters.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Categories</h4>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map(category => (
                    <div className="flex items-center space-x-2" key={category.id}>
                      <Checkbox 
                        id={`category-${category.id}`} 
                        checked={filters.categories.includes(category.id)}
                        onCheckedChange={() => toggleCategory(category.id)}
                      />
                      <Label 
                        htmlFor={`category-${category.id}`}
                        className="dark:text-slate-300"
                      >
                        {category.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Price</h4>
                <div className="grid grid-cols-2 gap-2">
                  {priceOptions.map(option => (
                    <div className="flex items-center space-x-2" key={option.id}>
                      <Checkbox 
                        id={`price-${option.id}`} 
                        checked={filters.priceOptions.includes(option.id)}
                        onCheckedChange={() => togglePriceOption(option.id)}
                      />
                      <Label 
                        htmlFor={`price-${option.id}`}
                        className="dark:text-slate-300"
                      >
                        {option.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Rating</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[5, 4, 3, 2].map(rating => (
                    <div className="flex items-center space-x-2" key={rating}>
                      <Checkbox 
                        id={`rating-${rating}`} 
                        checked={filters.ratings.includes(rating)}
                        onCheckedChange={() => toggleRating(rating)}
                      />
                      <Label 
                        htmlFor={`rating-${rating}`}
                        className="dark:text-slate-300 flex items-center"
                      >
                        {rating}+ <span className="text-yellow-400 ml-1">★</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium dark:text-white">Special</h4>
                <div className="grid gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="featured-only" 
                      checked={filters.featuredOnly}
                      onCheckedChange={(checked) => 
                        setFilters(prev => ({ ...prev, featuredOnly: checked as boolean }))
                      }
                    />
                    <Label 
                      htmlFor="featured-only"
                      className="dark:text-slate-300"
                    >
                      Featured tools only
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="new-only" 
                      checked={filters.newOnly}
                      onCheckedChange={(checked) => 
                        setFilters(prev => ({ ...prev, newOnly: checked as boolean }))
                      }
                    />
                    <Label 
                      htmlFor="new-only"
                      className="dark:text-slate-300"
                    >
                      New tools only
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  setFilters({
                    categories: [],
                    priceOptions: [],
                    ratings: [],
                    featuredOnly: false,
                    newOnly: false
                  });
                }}
                className="dark:bg-slate-700 dark:text-white dark:border-slate-600 dark:hover:bg-slate-600"
              >
                Reset
              </Button>
              <Button 
                type="button"
                onClick={() => setShowFilters(false)}
              >
                Apply Filters
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <Button 
          type="submit"
          className="h-12 px-4 rounded-r-full flex items-center gap-2"
          variant="default"
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;

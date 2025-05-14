
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import FilterSidebar from '@/components/FilterSidebar';
import ToolGrid from '@/components/ToolGrid';
import CategoryFilter from '@/components/CategoryFilter';
import SortDropdown from '@/components/SortDropdown';
import { Tool } from '@/components/ToolCard';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Filter as FilterIcon, Search, Maximize, Minimize } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Mock categories for filter
const categories = [
  { id: 'text', name: 'Text Generation', count: 156 },
  { id: 'image', name: 'Image Generation', count: 87 },
  { id: 'voice', name: 'Voice Generation', count: 42 },
  { id: 'video', name: 'Video Generation', count: 35 },
  { id: 'code', name: 'Code Generation', count: 28 },
  { id: 'data', name: 'Data Analysis', count: 63 }
];

// Mock data for tools
const mockTools: Tool[] = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Advanced AI chatbot that can understand complex prompts and generate human-like text.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    tags: ['Chatbot', 'Writing', 'Content Creation'],
    category: 'Text Generation',
    rating: 4.8,
    isPopular: true
  },
  {
    id: 2,
    name: 'DALL-E',
    description: 'Create realistic images and art from natural language descriptions.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Dall-E_Logo.svg/1280px-Dall-E_Logo.svg.png',
    tags: ['Image Generation', 'Art', 'Design'],
    category: 'Image Generation',
    rating: 4.7,
    isPopular: true
  },
  {
    id: 3,
    name: 'Midjourney',
    description: 'Generate beautiful, detailed images from text prompts for illustration and concept art.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/800px-Midjourney_Emblem.png',
    tags: ['Image Generation', 'Art', 'Design'],
    category: 'Image Generation',
    rating: 4.9,
    isPopular: true
  },
  {
    id: 4,
    name: 'Copy.ai',
    description: 'Create marketing copy, content, and ideas for your business in seconds.',
    logo: 'https://assets-global.website-files.com/628288c5cd3e8411b90a36a4/62828fc6f3eb88379ba3198c_favicon-256.png',
    tags: ['Copywriting', 'Marketing', 'Content'],
    category: 'Text Generation',
    rating: 4.5,
    isNew: true
  },
  {
    id: 5,
    name: 'Murf.ai',
    description: 'Convert text to natural-sounding speech with AI voices for videos and presentations.',
    logo: 'https://assets-global.website-files.com/61e6465c7cb0107108edc9b2/61e64a7a4e010c0694223ef2_murf_logo_icon-1.png',
    tags: ['Voice', 'Audio', 'Text-to-Speech'],
    category: 'Voice Generation',
    rating: 4.3
  },
  {
    id: 6,
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write better code by suggesting code snippets.',
    logo: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    tags: ['Code', 'Development', 'Productivity'],
    category: 'Code Generation',
    rating: 4.6,
    isPopular: true
  },
  {
    id: 7,
    name: 'Jasper',
    description: 'AI content platform for marketing teams to create high-quality content faster.',
    logo: 'https://www.jasper.ai/images/favicon.png',
    tags: ['Writing', 'Marketing', 'Content'],
    category: 'Text Generation',
    rating: 4.2
  },
  {
    id: 8,
    name: 'Synthesia',
    description: 'Create professional videos with AI avatars and voices in minutes.',
    logo: 'https://www.synthesia.io/favicon.ico',
    tags: ['Video', 'Avatar', 'Presentation'],
    category: 'Video Generation',
    rating: 4.4,
    isNew: true
  },
  {
    id: 9,
    name: 'Stable Diffusion',
    description: 'Open-source image generation model that creates detailed images from text descriptions.',
    logo: 'https://aeiljuispo.cloudimg.io/v7/https://cdn-uploads.huggingface.co/production/uploads/6331f68a311423baeb5e3cad/CzR67KBgTa2lr5oH4K5V0.jpeg?w=200&h=200&f=face',
    tags: ['Image Generation', 'Open Source', 'Text-to-Image'],
    category: 'Image Generation',
    rating: 4.5,
    isPopular: true
  },
  {
    id: 10,
    name: 'Eleven Labs',
    description: 'AI voice cloning and text-to-speech platform for realistic voice generation.',
    logo: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/62f8589c3b237c84995255ef_Elevenlabs%20favicon.png',
    tags: ['Voice', 'Audio', 'Text-to-Speech'],
    category: 'Voice Generation',
    rating: 4.6,
    isNew: true
  },
  {
    id: 11,
    name: 'Anthropic Claude',
    description: 'Conversational AI assistant designed to be helpful, harmless, and honest.',
    logo: 'https://cdn.iconscout.com/icon/free/png-256/free-anthropic-4699318-3903261.png?f=webp',
    tags: ['Chatbot', 'Writing', 'Research'],
    category: 'Text Generation',
    rating: 4.7
  },
  {
    id: 12,
    name: 'Runway',
    description: 'Create and edit videos with AI-powered creative tools.',
    logo: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/86a8f05c-1d82-41f4-a253-85936d75d5e0/Runway_Favicon/w=3840,quality=80',
    tags: ['Video Generation', 'Editing', 'Creative'],
    category: 'Video Generation',
    rating: 4.3,
    isPopular: true
  }
];

// Sort options
const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'recent', label: 'Recently Added' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'az', label: 'A-Z' }
];

const Explore = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState('popular');
  const [isFiltersExpanded, setIsFiltersExpanded] = useState(true);
  const isMobile = useIsMobile();

  // Filter tools based on selected category
  const filteredTools = selectedCategory
    ? mockTools.filter(tool => {
        if (selectedCategory === 'text') return tool.category === 'Text Generation';
        if (selectedCategory === 'image') return tool.category === 'Image Generation';
        if (selectedCategory === 'voice') return tool.category === 'Voice Generation';
        if (selectedCategory === 'video') return tool.category === 'Video Generation';
        if (selectedCategory === 'code') return tool.category === 'Code Generation';
        if (selectedCategory === 'data') return tool.category === 'Data Analysis';
        return true;
      })
    : mockTools;

  // Sort tools based on selected sort option
  const sortedTools = [...filteredTools].sort((a, b) => {
    if (sortBy === 'popular') {
      return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    } else if (sortBy === 'recent') {
      return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'az') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const toggleFilters = () => {
    setIsFiltersExpanded(!isFiltersExpanded);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Explore AI Tools</h1>
            <p className="text-muted-foreground">Discover the perfect AI tools for your specific needs</p>
          </div>
          
          <div className="mb-8">
            <SearchBar 
              placeholder="Search for AI tools (e.g., 'image generator', 'text to speech')"
            />
          </div>
          
          <div className="mb-6">
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Drawer */}
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="mb-4 self-start flex gap-2">
                    <FilterIcon className="h-4 w-4" />
                    <span>Filters</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <FilterSidebar />
                </SheetContent>
              </Sheet>
            )}
            
            {/* Desktop Sidebar */}
            {!isMobile && (
              <div className={`w-64 shrink-0 transition-all duration-300 ${isFiltersExpanded ? 'block' : 'hidden'}`}>
                <div className="sticky top-24">
                  <FilterSidebar />
                </div>
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div className="text-sm text-muted-foreground">
                  Showing <span className="font-medium">{sortedTools.length}</span> tools
                </div>
                
                <div className="flex items-center gap-4">
                  {!isMobile && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={toggleFilters}
                      className="hidden lg:flex items-center gap-1"
                    >
                      {isFiltersExpanded ? (
                        <>
                          <Minimize className="h-4 w-4" />
                          <span>Hide Filters</span>
                        </>
                      ) : (
                        <>
                          <Maximize className="h-4 w-4" />
                          <span>Show Filters</span>
                        </>
                      )}
                    </Button>
                  )}
                  
                  <SortDropdown 
                    options={sortOptions}
                    value={sortBy}
                    onChange={setSortBy}
                  />
                </div>
              </div>
              
              <ToolGrid tools={sortedTools} />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Explore;

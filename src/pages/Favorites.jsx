
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for favorite tools
const mockFavorites = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Advanced AI chatbot that can understand complex prompts and generate human-like text.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    tags: ['Chatbot', 'Writing', 'Content Creation'],
    category: 'Text Generation',
    dateAdded: '2023-11-15'
  },
  {
    id: 3,
    name: 'Midjourney',
    description: 'Generate beautiful, detailed images from text prompts for illustration and concept art.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/800px-Midjourney_Emblem.png',
    tags: ['Image Generation', 'Art', 'Design'],
    category: 'Image Generation',
    dateAdded: '2023-12-02'
  },
  {
    id: 6,
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write better code by suggesting code snippets.',
    logo: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    tags: ['Code', 'Development', 'Productivity'],
    category: 'Code Generation',
    dateAdded: '2024-01-10'
  }
];

const Favorites = () => {
  const [favorites, setFavorites] = useState(mockFavorites);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredFavorites = favorites.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const removeFavorite = (id) => {
    setFavorites(favorites.filter(tool => tool.id !== id));
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Navbar />
      
      <div className="flex-1 container px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Your Favorites</h1>
            <p className="text-muted-foreground">All your favorite AI tools in one place</p>
          </div>
          
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search your favorites..."
              className="pl-8 w-full md:w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2 h-5 w-5 text-primary" />
              Favorite Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            {filteredFavorites.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredFavorites.map(tool => (
                  <div key={tool.id} className="bg-card hover-lift rounded-lg border border-border/50 p-5 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                        <img src={tool.logo} alt={tool.name} className="h-10 w-10 object-contain" />
                      </div>
                      <div>
                        <h3 className="font-medium">{tool.name}</h3>
                        <div className="text-xs text-muted-foreground">
                          {tool.category} • Added {tool.dateAdded}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tool.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="w-full" asChild>
                        <a href={`/tool/${tool.id}`} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Use Tool
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => removeFavorite(tool.id)}
                        className="aspect-square p-0"
                      >
                        <Heart className="h-4 w-4 fill-current" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                  <Heart className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-medium text-lg mb-1">No favorites found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchQuery 
                    ? `No favorites match "${searchQuery}"` 
                    : "You don't have any favorite tools yet"}
                </p>
                <Button asChild>
                  <Link to="/explore">Explore AI Tools</Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Favorites;

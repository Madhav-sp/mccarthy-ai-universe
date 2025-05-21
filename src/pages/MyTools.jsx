
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Edit, Trash, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for user's tools
const mockTools = [
  {
    id: 1,
    name: 'AI Text Generator',
    description: 'Generate human-like text for content creation',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    url: 'https://example.com/tool1',
    views: 1245,
    status: 'published',
    date: '2023-10-15'
  },
  {
    id: 2,
    name: 'Image Enhancer Pro',
    description: 'Enhance and restore images with AI technology',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/800px-Midjourney_Emblem.png',
    url: 'https://example.com/tool2',
    views: 867,
    status: 'published',
    date: '2023-11-03'
  },
  {
    id: 3,
    name: 'Code Assist',
    description: 'AI-powered coding assistant that helps with programming tasks',
    image: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    url: 'https://example.com/tool3',
    views: 532,
    status: 'draft',
    date: '2023-12-01'
  }
];

const MyTools = () => {
  const [tools, setTools] = useState(mockTools);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this tool?')) {
      setTools(tools.filter(tool => tool.id !== id));
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Navbar />
      
      <div className="flex-1 container px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">My Tools</h1>
            <p className="text-muted-foreground">Manage your published AI tools</p>
          </div>
          
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search your tools..."
                className="pl-8 w-full md:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button asChild>
              <Link to="/publish">
                Publish New Tool
              </Link>
            </Button>
          </div>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Published Tools</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredTools.length > 0 ? (
              <div className="space-y-6">
                {filteredTools.map(tool => (
                  <div key={tool.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg bg-card">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                        <img src={tool.image} alt={tool.name} className="h-10 w-10 object-contain" />
                      </div>
                      
                      <div>
                        <h3 className="font-medium">{tool.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">{tool.description}</p>
                        <div className="flex gap-4 mt-1">
                          <span className="text-xs text-muted-foreground">
                            {tool.views} views
                          </span>
                          <span className="text-xs text-muted-foreground">
                            Added on {tool.date}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            tool.status === 'published' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                              : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
                          }`}>
                            {tool.status === 'published' ? 'Published' : 'Draft'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 w-full md:w-auto">
                      <Button variant="outline" size="sm" asChild>
                        <a href={tool.url} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/publish/${tool.id}`}>
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDelete(tool.id)}>
                        <Trash className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-muted-foreground">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 3v18" />
                    <path d="M3 7h18" />
                  </svg>
                </div>
                <h3 className="font-medium text-lg mb-1">No tools found</h3>
                <p className="text-muted-foreground mb-4">
                  {searchQuery 
                    ? `No tools match "${searchQuery}"` 
                    : "You haven't published any tools yet"}
                </p>
                <Button asChild>
                  <Link to="/publish">Publish Your First Tool</Link>
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

export default MyTools;

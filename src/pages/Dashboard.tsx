
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Tool } from '@/components/ToolCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { Heart, Clock, List, Link as LinkIcon, Settings } from 'lucide-react';

// Mock data for user's tools
const favoriteTools: Tool[] = [
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
    id: 6,
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write better code by suggesting code snippets.',
    logo: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    tags: ['Code', 'Development', 'Productivity'],
    category: 'Code Generation',
    rating: 4.6,
    isPopular: true
  }
];

const recentTools: Tool[] = [
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
    id: 1,
    name: 'ChatGPT',
    description: 'Advanced AI chatbot that can understand complex prompts and generate human-like text.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    tags: ['Chatbot', 'Writing', 'Content Creation'],
    category: 'Text Generation',
    rating: 4.8,
    isPopular: true
  }
];

// Mock playlists
const playlists = [
  {
    id: 1,
    name: 'Content Creation',
    description: 'Tools for creating blog posts, social media content, and marketing materials',
    toolCount: 5
  },
  {
    id: 2,
    name: 'Design Work',
    description: 'AI tools for generating and editing images, creating designs, and visual content',
    toolCount: 3
  },
  {
    id: 3,
    name: 'Software Development',
    description: 'Tools that help with coding, debugging, and software documentation',
    toolCount: 4
  }
];

// Mock connected tools
const connectedTools: Tool[] = [
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
    id: 6,
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write better code by suggesting code snippets.',
    logo: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    tags: ['Code', 'Development', 'Productivity'],
    category: 'Code Generation',
    rating: 4.6,
    isPopular: true
  }
];

const Dashboard = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-secondary/30">
        <div className="container px-4 md:px-6 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
            <p className="text-muted-foreground">Manage your favorite tools, playlists, and settings</p>
          </div>
          
          <Tabs defaultValue="favorites" className="space-y-6">
            <TabsList>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span className={isMobile ? 'hidden' : ''}>Favorites</span>
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className={isMobile ? 'hidden' : ''}>Recently Used</span>
              </TabsTrigger>
              <TabsTrigger value="playlists" className="flex items-center gap-2">
                <List className="h-4 w-4" />
                <span className={isMobile ? 'hidden' : ''}>AI Playlists</span>
              </TabsTrigger>
              <TabsTrigger value="connected" className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4" />
                <span className={isMobile ? 'hidden' : ''}>Connected Tools</span>
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className={isMobile ? 'hidden' : ''}>Settings</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="favorites" className="space-y-6">
              <div className="bg-card rounded-xl shadow-sm border border-border/50 p-6">
                <h2 className="text-xl font-semibold mb-4">Your Favorite Tools</h2>
                
                {favoriteTools.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {favoriteTools.map((tool) => (
                      <div key={tool.id} className="bg-background rounded-lg border border-border/50 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                            <img src={tool.logo} alt={tool.name} className="h-8 w-8 object-contain" />
                          </div>
                          <div>
                            <h3 className="font-medium">{tool.name}</h3>
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
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tool.description}</p>
                        
                        <div className="flex gap-2">
                          <Button className="w-full" size="sm">Use Now</Button>
                          <Button variant="outline" size="sm" className="shrink-0">Remove</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">You haven't favorited any tools yet.</p>
                    <Button asChild>
                      <a href="/explore">Explore Tools</a>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="recent" className="space-y-6">
              <div className="bg-card rounded-xl shadow-sm border border-border/50 p-6">
                <h2 className="text-xl font-semibold mb-4">Recently Used Tools</h2>
                
                {recentTools.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {recentTools.map((tool, index) => (
                      <div key={tool.id} className="bg-background rounded-lg border border-border/50 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                            <img src={tool.logo} alt={tool.name} className="h-8 w-8 object-contain" />
                          </div>
                          <div>
                            <h3 className="font-medium">{tool.name}</h3>
                            <div className="text-xs text-muted-foreground">
                              {index === 0 ? 'Just now' : index === 1 ? '2 hours ago' : '1 day ago'}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 mt-2">
                          <Button className="w-full" size="sm">Use Again</Button>
                          <Button variant="outline" size="sm" className="shrink-0">Add to Favorites</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">You haven't used any tools yet.</p>
                    <Button asChild>
                      <a href="/explore">Explore Tools</a>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="playlists" className="space-y-6">
              <div className="bg-card rounded-xl shadow-sm border border-border/50 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Your AI Playlists</h2>
                  <Button>Create New Playlist</Button>
                </div>
                
                {playlists.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {playlists.map((playlist) => (
                      <div key={playlist.id} className="bg-background rounded-lg border border-border/50 p-5">
                        <h3 className="text-lg font-medium mb-2">{playlist.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{playlist.description}</p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm">{playlist.toolCount} tools</span>
                          <span className="text-xs text-muted-foreground">Created 2 weeks ago</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="default" className="w-full" size="sm">View Playlist</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">You haven't created any playlists yet.</p>
                    <Button>Create Your First Playlist</Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="connected" className="space-y-6">
              <div className="bg-card rounded-xl shadow-sm border border-border/50 p-6">
                <h2 className="text-xl font-semibold mb-4">Connected AI Tools</h2>
                
                {connectedTools.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {connectedTools.map((tool) => (
                      <div key={tool.id} className="bg-background rounded-lg border border-border/50 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                            <img src={tool.logo} alt={tool.name} className="h-8 w-8 object-contain" />
                          </div>
                          <div>
                            <h3 className="font-medium">{tool.name}</h3>
                            <div className="text-xs px-1.5 py-0.5 bg-green-100 text-green-800 rounded-full inline-block">
                              Connected
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tool.description}</p>
                        
                        <div className="flex gap-2">
                          <Button className="w-full" size="sm">Use Now</Button>
                          <Button variant="outline" size="sm" className="shrink-0">Disconnect</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">You haven't connected any tools yet.</p>
                    <Button asChild>
                      <a href="/explore">Find Tools to Connect</a>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="space-y-6">
              <div className="bg-card rounded-xl shadow-sm border border-border/50 p-6">
                <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
                
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Account Information</h3>
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border/50">
                      <div>
                        <div className="font-medium">Email Address</div>
                        <div className="text-sm text-muted-foreground">example@email.com</div>
                      </div>
                      <Button variant="outline" size="sm">Change</Button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border/50">
                      <div>
                        <div className="font-medium">Password</div>
                        <div className="text-sm text-muted-foreground">Last changed 30 days ago</div>
                      </div>
                      <Button variant="outline" size="sm">Update</Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Privacy Preferences</h3>
                    <div className="space-y-3">
                      {[
                        {
                          title: 'Usage Analytics',
                          description: 'Allow McCarthy to collect data on which tools you use to improve recommendations',
                          enabled: true
                        },
                        {
                          title: 'Save Search History',
                          description: 'Lets us remember your searches to make finding tools easier next time',
                          enabled: true
                        },
                        {
                          title: 'Third-Party Tracking',
                          description: 'Allow third-party analytics services to improve site performance',
                          enabled: false
                        }
                      ].map((setting, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border/50">
                          <div>
                            <div className="font-medium">{setting.title}</div>
                            <div className="text-sm text-muted-foreground">{setting.description}</div>
                          </div>
                          <div className="flex items-center h-6">
                            <button
                              type="button"
                              className={`relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                                setting.enabled ? 'bg-purple-600' : 'bg-gray-200'
                              }`}
                            >
                              <span
                                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                  setting.enabled ? 'translate-x-5' : 'translate-x-0'
                                }`}
                              ></span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium">Data Management</h3>
                    <div className="p-4 bg-background rounded-lg border border-border/50">
                      <p className="text-sm text-muted-foreground mb-4">
                        You can export all your data or delete your account at any time.
                      </p>
                      <div className="flex gap-4">
                        <Button variant="outline">Export Data</Button>
                        <Button variant="destructive">Delete Account</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;

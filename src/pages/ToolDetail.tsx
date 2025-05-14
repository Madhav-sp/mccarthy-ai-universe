
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Plus, ArrowRight, Share2, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToolCard, Tool } from '@/components/ToolCard';
import { useIsMobile } from '@/hooks/use-mobile';

// Mock tool data
const toolData: Record<string, Tool> = {
  '1': {
    id: 1,
    name: 'ChatGPT',
    description: 'Advanced AI chatbot that can understand complex prompts and generate human-like text.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    tags: ['Chatbot', 'Writing', 'Content Creation'],
    category: 'Text Generation',
    rating: 4.8,
    isPopular: true
  },
  '2': {
    id: 2,
    name: 'DALL-E',
    description: 'Create realistic images and art from natural language descriptions.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Dall-E_Logo.svg/1280px-Dall-E_Logo.svg.png',
    tags: ['Image Generation', 'Art', 'Design'],
    category: 'Image Generation',
    rating: 4.7,
    isPopular: true
  },
  '3': {
    id: 3,
    name: 'Midjourney',
    description: 'Generate beautiful, detailed images from text prompts for illustration and concept art.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/800px-Midjourney_Emblem.png',
    tags: ['Image Generation', 'Art', 'Design'],
    category: 'Image Generation',
    rating: 4.9,
    isPopular: true
  }
};

// Mock similar tools
const similarTools: Tool[] = [
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
    id: 11,
    name: 'Anthropic Claude',
    description: 'Conversational AI assistant designed to be helpful, harmless, and honest.',
    logo: 'https://cdn.iconscout.com/icon/free/png-256/free-anthropic-4699318-3903261.png?f=webp',
    tags: ['Chatbot', 'Writing', 'Research'],
    category: 'Text Generation',
    rating: 4.7
  }
];

const ToolDetail = () => {
  const { id } = useParams<{ id: string }>();
  const isMobile = useIsMobile();
  
  // Get tool data based on ID
  const tool = id ? toolData[id] : null;
  
  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
            <p className="text-muted-foreground mb-6">The tool you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/explore">Back to Explore</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-xl bg-secondary flex items-center justify-center overflow-hidden">
                  <img src={tool.logo} alt={tool.name} className="h-12 w-12 object-contain" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">{tool.name}</h1>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(tool.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-sm text-muted-foreground">{tool.rating.toFixed(1)}/5.0</span>
                    </div>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{tool.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {tool.tags.map((tag, index) => (
                  <span key={index} className="tag text-xs bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="alternatives">Alternatives</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-4">
                  <div className="prose prose-gray max-w-none">
                    <p className="text-lg mb-4">
                      {tool.description} 
                    </p>
                    <p className="mb-4">
                      {tool.name} is a powerful AI tool that helps users create high-quality content, solve complex problems, and boost productivity.
                      It uses advanced machine learning algorithms trained on vast amounts of data to generate human-like responses to user inputs.
                    </p>
                    <h3 className="text-xl font-semibold mt-6 mb-3">Use Cases</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Content creation for marketing, social media, and websites</li>
                      <li>Research assistance and information gathering</li>
                      <li>Brainstorming ideas and creative writing</li>
                      <li>Answering questions and providing explanations</li>
                      <li>Automating repetitive writing tasks</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="mt-4">
                  <div className="prose prose-gray max-w-none">
                    <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      <li>Natural language understanding and generation</li>
                      <li>Context-aware responses across multiple exchanges</li>
                      <li>Support for multiple languages</li>
                      <li>Integration capabilities with other software</li>
                      <li>Regular updates with new capabilities</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Limitations</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>May sometimes generate incorrect information</li>
                      <li>Limited knowledge of events after training cutoff</li>
                      <li>May not understand highly technical or specialized topics</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-4">
                  <div className="space-y-4">
                    {[
                      {
                        name: 'Alex Johnson',
                        rating: 5,
                        date: '2 weeks ago',
                        text: 'This tool has completely transformed my workflow. It saves me hours every day and the quality of the output is amazing. Highly recommended!'
                      },
                      {
                        name: 'Sarah Williams',
                        rating: 4,
                        date: '1 month ago',
                        text: 'Very good tool with excellent capabilities. The only reason I\'m not giving 5 stars is because of the occasional hiccups in understanding complex instructions.'
                      },
                      {
                        name: 'Michael Chen',
                        rating: 5,
                        date: '2 months ago',
                        text: 'Game changer for my content creation business. I can now take on more clients while maintaining quality. The interface is intuitive and the results are consistently good.'
                      }
                    ].map((review, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-medium">{review.name}</div>
                          <div className="text-sm text-muted-foreground">{review.date}</div>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-sm">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="alternatives" className="mt-4">
                  <div className="grid grid-cols-1 gap-4">
                    {similarTools.map((similarTool) => (
                      <div key={similarTool.id} className="flex items-start gap-4 p-4 border border-border rounded-lg">
                        <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center overflow-hidden">
                          <img src={similarTool.logo} alt={similarTool.name} className="h-8 w-8 object-contain" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{similarTool.name}</h3>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i} 
                                  className={`w-3 h-3 ${i < Math.floor(similarTool.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                              <span className="ml-1 text-xs text-muted-foreground">{similarTool.rating.toFixed(1)}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{similarTool.description}</p>
                          <div className="flex mt-2">
                            <Button asChild variant="outline" size="sm">
                              <Link to={`/tool/${similarTool.id}`}>View Details</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">Launch {tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Try {tool.name} directly from McCarthy without switching websites.
                  </p>
                  <Button className="w-full" size="lg">
                    Use Now <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-4 border-t border-border pt-6">
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1 gap-2">
                      <Heart className="h-4 w-4" />
                      <span>Favorite</span>
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <Plus className="h-4 w-4" />
                      <span>Playlist</span>
                    </Button>
                  </div>
                  <Button variant="ghost" className="w-full gap-2">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </Button>
                </div>
                
                <div className="border-t border-border mt-6 pt-6">
                  <h3 className="font-semibold text-sm mb-3">Data Sharing</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No personal data required</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Inputs are not stored permanently</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-amber-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span>May use inputs for service improvement</span>
                    </div>
                  </div>
                  <Button variant="link" size="sm" className="mt-2 h-auto p-0">
                    View full privacy details
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Similar Tools Section */}
          <div className="mt-12 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Similar Tools</h2>
              <Button variant="ghost" asChild>
                <Link to="/explore" className="flex items-center gap-1">
                  View all <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {similarTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ToolDetail;

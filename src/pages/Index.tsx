
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import ToolCard, { Tool } from '@/components/ToolCard';

// Mock data for the landing page
const featuredTools: Tool[] = [
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
  }
];

const toolCategories = [
  { icon: '📝', name: 'Text Generation', count: 156 },
  { icon: '🖼️', name: 'Image Generation', count: 87 },
  { icon: '🎤', name: 'Voice Generation', count: 42 },
  { icon: '🎬', name: 'Video Generation', count: 35 },
  { icon: '💻', name: 'Code Generation', count: 28 },
  { icon: '📊', name: 'Data Analysis', count: 63 }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-10">
            <div className="space-y-4 max-w-3xl animate-fade-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight gradient-text">
                There's an AI for Everything. Find it. Use it. Instantly.
              </h1>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                McCarthy is your one-stop marketplace to discover, compare, and use the best AI tools for any task.
              </p>
            </div>
            
            <div className="w-full max-w-2xl">
              <SearchBar 
                placeholder="Search for AI tools (e.g., 'image generator', 'text to speech')"
              />
            </div>
            
            <Button size="lg" className="rounded-full" asChild>
              <Link to="/explore">
                Try Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {['ChatGPT', 'Midjourney', 'Copy.ai', 'DALL-E', 'GitHub Copilot'].map((tool, index) => (
                <div key={tool} className={`animate-float delay-${index * 100}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-xl font-medium">{tool.charAt(0)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">How McCarthy Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover, compare, and use AI tools without the hassle of switching between websites.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: '🔍',
                title: 'Search & Discover',
                description: 'Explore our curated collection of AI tools categorized by use case and functionality.'
              },
              {
                icon: '💡',
                title: 'Compare & Choose',
                description: 'Read reviews, compare features, and find the perfect AI tool for your specific needs.'
              },
              {
                icon: '🚀',
                title: 'Use Instantly',
                description: 'Launch tools directly from McCarthy and start creating without any setup required.'
              }
            ].map((step, index) => (
              <div key={index} className="card-hover bg-card p-6 rounded-xl border border-border/50 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Top Trending Tools Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Top Trending Tools</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore the most popular AI tools being used right now.
              </p>
            </div>
            <Link to="/explore" className="text-primary font-medium flex items-center mt-4 md:mt-0">
              View all tools <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredTools.slice(0, 6).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect AI tool for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {toolCategories.map((category, index) => (
              <Link 
                key={index} 
                to="/explore" 
                className="card-hover bg-card p-6 rounded-xl border border-border/50 text-center"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-medium mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} tools</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why McCarthy Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Why McCarthy?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just a directory – we're your AI tool companion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'All in One Place',
                description: 'Access hundreds of AI tools without switching between websites.'
              },
              {
                title: 'User Privacy First',
                description: 'Transparent data policies so you know exactly what information is shared.'
              },
              {
                title: 'Expert Curation',
                description: 'Our team tests and reviews tools to ensure quality and usefulness.'
              },
              {
                title: 'Personalized Recommendations',
                description: 'Get AI tool suggestions based on your usage patterns and preferences.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-border/50">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to enhance your workflow with AI?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start exploring the world's best AI tools curated just for you.
            </p>
            <Button size="lg" variant="secondary" asChild className="rounded-full">
              <Link to="/explore">
                Explore AI Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

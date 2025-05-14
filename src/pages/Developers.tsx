
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';

const Developers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1">
        <section className="hero-gradient py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold gradient-text">
                Add Your AI Tool to McCarthy
              </h1>
              <p className="text-xl text-muted-foreground">
                Join hundreds of AI developers showcasing their tools to millions of users looking for the perfect solution.
              </p>
              <Button size="lg" className="rounded-full" asChild>
                <a href="#add-tool">Submit Your Tool</a>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why List Your AI Tool on McCarthy?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get discovered by the right audience and grow your user base.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '👁️',
                  title: 'Increased Visibility',
                  description: 'Get in front of thousands of users actively looking for AI tools like yours.'
                },
                {
                  icon: '📊',
                  title: 'Real-time Analytics',
                  description: 'Access detailed metrics about how users are engaging with your tool.'
                },
                {
                  icon: '🔄',
                  title: 'Direct Integration',
                  description: 'Users can access your tool directly from McCarthy without leaving the platform.'
                }
              ].map((benefit, index) => (
                <Card key={index} className="card-hover bg-card border-border/50">
                  <CardHeader>
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                <div className="space-y-6">
                  {[
                    {
                      number: '01',
                      title: 'Submit Your Tool',
                      description: 'Fill out our simple submission form with details about your AI tool.'
                    },
                    {
                      number: '02',
                      title: 'Review Process',
                      description: 'Our team reviews your submission to ensure it meets our quality standards.'
                    },
                    {
                      number: '03',
                      title: 'Get Listed',
                      description: 'Once approved, your tool will be listed in our marketplace for users to discover.'
                    },
                    {
                      number: '04',
                      title: 'Grow & Scale',
                      description: 'Gain new users and get valuable feedback to improve your tool.'
                    }
                  ].map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:w-1/2 bg-card rounded-xl shadow-sm border border-border/50 p-8">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4" />
                    </div>
                    <div className="text-sm">Fast approval process</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4" />
                    </div>
                    <div className="text-sm">Free basic listings available</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4" />
                    </div>
                    <div className="text-sm">Promotional opportunities for featured tools</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4" />
                    </div>
                    <div className="text-sm">Detailed analytics dashboard</div>
                  </div>
                </div>
                
                <div className="flex flex-col text-center">
                  <span className="text-3xl font-bold mb-2">500+</span>
                  <span className="text-lg text-muted-foreground">AI tools already listed</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="add-tool" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Submit Your AI Tool</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and our team will review your submission.
              </p>
            </div>
            
            <Card className="max-w-4xl mx-auto border-border/50">
              <CardHeader>
                <CardTitle>Tool Submission Form</CardTitle>
                <CardDescription>
                  Provide detailed information about your AI tool to help us properly showcase it.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="basic">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="basic">Basic Info</TabsTrigger>
                    <TabsTrigger value="technical">Technical Details</TabsTrigger>
                    <TabsTrigger value="business">Business Info</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="basic" className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tool-name">Tool Name</Label>
                        <Input id="tool-name" placeholder="Enter the name of your AI tool" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="tool-description">Short Description</Label>
                        <Input id="tool-description" placeholder="Brief description (max 100 characters)" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="tool-full-description">Full Description</Label>
                        <Textarea 
                          id="tool-full-description" 
                          placeholder="Provide a detailed description of what your tool does..."
                          className="min-h-[150px]"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="tool-category">Category</Label>
                          <Select>
                            <SelectTrigger id="tool-category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="text">Text Generation</SelectItem>
                              <SelectItem value="image">Image Generation</SelectItem>
                              <SelectItem value="voice">Voice Generation</SelectItem>
                              <SelectItem value="video">Video Generation</SelectItem>
                              <SelectItem value="code">Code Generation</SelectItem>
                              <SelectItem value="data">Data Analysis</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="tool-logo">Logo/Icon</Label>
                          <Input id="tool-logo" type="file" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="tool-tags">Tags (Comma Separated)</Label>
                        <Input id="tool-tags" placeholder="e.g., chatbot, writing, translation" />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="technical" className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tool-url">Tool URL</Label>
                        <Input id="tool-url" placeholder="https://yourtool.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="embed-url">Embed URL (Optional)</Label>
                        <Input id="embed-url" placeholder="URL for embedding your tool directly in McCarthy" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="api-doc">API Documentation (Optional)</Label>
                        <Input id="api-doc" placeholder="URL to your API documentation" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="data-permissions">Required Data Permissions</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: 'email', label: 'User Email' },
                            { id: 'name', label: 'User Name' },
                            { id: 'content', label: 'User Content' },
                            { id: 'history', label: 'Chat History' }
                          ].map((permission) => (
                            <div key={permission.id} className="flex items-center gap-2">
                              <input type="checkbox" id={permission.id} className="h-4 w-4 rounded border-gray-300" />
                              <Label htmlFor={permission.id} className="font-normal">{permission.label}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="technical-requirements">Technical Requirements</Label>
                        <Textarea 
                          id="technical-requirements" 
                          placeholder="Any specific browser, device, or other technical requirements..."
                        />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="business" className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company/Developer Name</Label>
                          <Input id="company-name" placeholder="Your company or individual name" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="contact-email">Contact Email</Label>
                          <Input id="contact-email" type="email" placeholder="email@example.com" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="pricing-model">Pricing Model</Label>
                        <Select>
                          <SelectTrigger id="pricing-model">
                            <SelectValue placeholder="Select pricing model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="free">Free</SelectItem>
                            <SelectItem value="freemium">Freemium</SelectItem>
                            <SelectItem value="subscription">Subscription</SelectItem>
                            <SelectItem value="one-time">One-time Payment</SelectItem>
                            <SelectItem value="usage">Usage-based</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="pricing-details">Pricing Details</Label>
                        <Textarea 
                          id="pricing-details" 
                          placeholder="Describe your pricing tiers, free trial period, etc."
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="privacy-policy">Privacy Policy URL</Label>
                        <Input id="privacy-policy" placeholder="https://yourtool.com/privacy" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="additional-info">Additional Information</Label>
                        <Textarea 
                          id="additional-info" 
                          placeholder="Any other information you'd like to share about your tool..."
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Save Draft</Button>
                <Button className="gap-2">
                  Submit for Review <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Showcase Your AI Tool?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our growing marketplace of innovative AI tools and reach thousands of potential users.
            </p>
            <Button size="lg" variant="secondary" asChild className="rounded-full">
              <a href="#add-tool">Submit Your Tool Now</a>
            </Button>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about listing your tool on McCarthy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: 'How long does the review process take?',
                  answer: 'Our team typically reviews submissions within 3-5 business days. You\'ll receive an email notification once your tool has been approved or if we need additional information.'
                },
                {
                  question: 'Is there a cost to list my tool?',
                  answer: 'Basic listings are free. We also offer premium placements and featured spots for a fee. Contact our team for more information on promotional opportunities.'
                },
                {
                  question: 'What types of AI tools can be submitted?',
                  answer: 'We accept all types of AI-powered tools including text, image, voice, video, and code generation, as well as analysis tools, chatbots, and more. The tool must be functional and provide value to users.'
                },
                {
                  question: 'Can I update my tool information after submission?',
                  answer: 'Yes, you can update your tool information at any time through the developer dashboard. Changes may require review before going live.'
                },
                {
                  question: 'What metrics will I be able to see?',
                  answer: 'You\'ll have access to metrics such as page views, click-through rates, user ratings, and usage statistics through our developer dashboard.'
                },
                {
                  question: 'Can I integrate my tool directly into McCarthy?',
                  answer: 'Yes, we offer integration options that allow users to access your tool directly from McCarthy. This requires providing an embed URL or API integration.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-card border border-border/50 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Developers;

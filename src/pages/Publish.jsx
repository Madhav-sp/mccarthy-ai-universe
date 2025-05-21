
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

const pricingOptions = ['Free', 'Freemium', 'Paid', 'Enterprise', 'Contact for Pricing'];

const Publish = () => {
  const [toolData, setToolData] = useState({
    title: '',
    description: '',
    url: '',
    pricing: 'Free',
    hashtags: '',
    keywords: '',
    isFeatured: false,
    isEditorsChoice: false,
    image: null,
    imagePreview: null
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setToolData({
      ...toolData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSwitchChange = (name) => {
    setToolData({
      ...toolData,
      [name]: !toolData[name]
    });
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setToolData({
          ...toolData,
          image: file,
          imagePreview: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Publishing tool:', toolData);
    alert('Tool published successfully!');
    // In a real application, this would make an API call to save the tool
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Navbar />
      
      <div className="flex-1 container px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Publish a New AI Tool</h1>
        <p className="text-muted-foreground mb-8">Submit your AI tool to McCarthy and share it with thousands of users.</p>
        
        <Card>
          <CardHeader>
            <CardTitle>Tool Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="h-40 w-40 border-2 border-dashed border-border rounded-lg flex items-center justify-center overflow-hidden relative">
                    {toolData.imagePreview ? (
                      <img src={toolData.imagePreview} alt="Tool preview" className="h-full w-full object-cover" />
                    ) : (
                      <div className="text-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto h-12 w-12 text-muted-foreground">
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-5-5z"/>
                          <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                          <path d="M12 18v-6"/>
                          <path d="M9 15h6"/>
                        </svg>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Drag and drop or click to upload
                        </p>
                      </div>
                    )}
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="absolute inset-0 opacity-0 cursor-pointer" 
                      onChange={handleImageChange}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Upload your tool's logo (recommended: 512x512px)</p>
                </div>
                
                <div>
                  <Label htmlFor="title">Tool Name *</Label>
                  <Input 
                    id="title" 
                    name="title" 
                    value={toolData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="url">Tool URL *</Label>
                  <Input 
                    id="url" 
                    name="url" 
                    type="url"
                    placeholder="https://"
                    value={toolData.url}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="pricing">Pricing *</Label>
                  <select 
                    id="pricing" 
                    name="pricing" 
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={toolData.pricing}
                    onChange={handleChange}
                    required
                  >
                    {pricingOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea 
                    id="description" 
                    name="description" 
                    rows={5}
                    placeholder="Write a detailed description of your AI tool..."
                    value={toolData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="hashtags">Hashtags</Label>
                  <Input 
                    id="hashtags" 
                    name="hashtags" 
                    placeholder="#AITools #MachineLearning #ComputerVision"
                    value={toolData.hashtags}
                    onChange={handleChange}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Separate hashtags with spaces</p>
                </div>
                
                <div>
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input 
                    id="keywords" 
                    name="keywords" 
                    placeholder="AI, Machine Learning, Text Generation"
                    value={toolData.keywords}
                    onChange={handleChange}
                  />
                  <p className="text-sm text-muted-foreground mt-1">Separate keywords with commas</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="isFeatured">Featured Tool</Label>
                      <p className="text-sm text-muted-foreground">
                        Request to be featured on our homepage
                      </p>
                    </div>
                    <Switch 
                      id="isFeatured" 
                      checked={toolData.isFeatured}
                      onCheckedChange={() => handleSwitchChange('isFeatured')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="isEditorsChoice">Editor's Choice</Label>
                      <p className="text-sm text-muted-foreground">
                        Request to be considered for Editor's Choice
                      </p>
                    </div>
                    <Switch 
                      id="isEditorsChoice" 
                      checked={toolData.isEditorsChoice}
                      onCheckedChange={() => handleSwitchChange('isEditorsChoice')}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-4">
                <Button type="button" variant="outline">
                  Save Draft
                </Button>
                <Button type="submit">
                  Publish Tool
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Publish;

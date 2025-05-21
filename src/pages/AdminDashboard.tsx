
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { ChevronUp, ChevronDown, Plus, Upload, Trash2, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Form schema
const toolFormSchema = z.object({
  name: z.string().min(2, { message: "Tool name must be at least 2 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  logo: z.string().url({ message: "Please enter a valid URL for the logo." }),
  tags: z.array(z.string()).min(1, { message: "Add at least one tag." }),
  category: z.string().min(1, { message: "Please select a category." }),
  isPopular: z.boolean().optional(),
  isNew: z.boolean().optional(),
});

type ToolFormValues = z.infer<typeof toolFormSchema>;

// Categories - matching the existing categories in Explore.tsx
const categories = [
  { id: 'text', name: 'Text Generation' },
  { id: 'image', name: 'Image Generation' },
  { id: 'voice', name: 'Voice Generation' },
  { id: 'video', name: 'Video Generation' },
  { id: 'code', name: 'Code Generation' },
  { id: 'data', name: 'Data Analysis' }
];

const AdminDashboard = () => {
  const [newTag, setNewTag] = useState<string>('');
  const { toast } = useToast();

  // Initialize form with default values
  const form = useForm<ToolFormValues>({
    resolver: zodResolver(toolFormSchema),
    defaultValues: {
      name: '',
      description: '',
      logo: '',
      tags: [],
      category: '',
      isPopular: false,
      isNew: true,
    },
  });

  const tags = form.watch('tags') || [];

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      form.setValue('tags', [...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    form.setValue('tags', tags.filter(tag => tag !== tagToRemove));
  };

  const onSubmit = (data: ToolFormValues) => {
    console.log('Form submitted with:', data);
    
    // Here you would typically send this data to your backend
    // Mock success for now
    toast({
      title: "Tool added successfully!",
      description: `${data.name} has been added to the marketplace.`,
    });
    
    // Reset form after submission
    form.reset({
      name: '',
      description: '',
      logo: '',
      tags: [],
      category: '',
      isPopular: false,
      isNew: true,
    });
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900">
      <Navbar />
      
      <div className="flex-1 container px-4 md:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 dark:text-white">Admin Dashboard</h1>
          <p className="text-muted-foreground dark:text-slate-400">Manage your AI marketplace tools</p>
        </div>
        
        <div className="bg-card dark:bg-slate-800 rounded-xl shadow-lg border border-border/50 p-6">
          <h2 className="text-xl font-semibold mb-6 dark:text-white">Add New Tool</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-white">Tool Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., ChatGPT" {...field} className="dark:bg-slate-700 dark:text-white dark:border-slate-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="logo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="dark:text-white">Logo URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com/logo.png" {...field} className="dark:bg-slate-700 dark:text-white dark:border-slate-600" />
                      </FormControl>
                      <FormDescription className="dark:text-slate-400">
                        Enter a URL for the tool's logo
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe the tool and its features..." {...field} className="dark:bg-slate-700 dark:text-white dark:border-slate-600 min-h-24" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-white">Category</FormLabel>
                    <select 
                      {...field}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-slate-700 dark:text-white dark:border-slate-600"
                    >
                      <option value="">Select category...</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                      ))}
                    </select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="space-y-2">
                <FormLabel className="dark:text-white">Tags</FormLabel>
                <div className="flex items-center space-x-2">
                  <Input 
                    placeholder="Add tag (e.g., Text, AI, Productivity)" 
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="dark:bg-slate-700 dark:text-white dark:border-slate-600"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                  />
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={addTag}
                    className="dark:bg-slate-700 dark:text-white dark:border-slate-600 dark:hover:bg-slate-600"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                      <div key={tag} className="bg-secondary text-secondary-foreground dark:bg-slate-700 dark:text-slate-200 rounded-full px-3 py-1 text-sm flex items-center gap-1">
                        {tag}
                        <button 
                          type="button" 
                          onClick={() => removeTag(tag)}
                          className="text-muted-foreground hover:text-foreground ml-1 rounded-full h-4 w-4 flex items-center justify-center"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                
                {form.formState.errors.tags && (
                  <p className="text-sm font-medium text-destructive">{form.formState.errors.tags.message}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="isNew"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 dark:border-slate-700">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base dark:text-white">Mark as New</FormLabel>
                        <FormDescription className="dark:text-slate-400">
                          Highlight this as a newly added tool
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="isPopular"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 dark:border-slate-700">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base dark:text-white">Mark as Popular</FormLabel>
                        <FormDescription className="dark:text-slate-400">
                          Highlight this as a popular tool
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="flex justify-end gap-4">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => form.reset()}
                  className="dark:bg-slate-700 dark:text-white dark:border-slate-600 dark:hover:bg-slate-600"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="gap-2"
                >
                  <Upload className="h-4 w-4" />
                  Add Tool
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;

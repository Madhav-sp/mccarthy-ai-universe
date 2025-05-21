
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Eye, BarChart as BarChartIcon, TrendingUp, User } from 'lucide-react';

// Mock data for analytics
const toolViews = [
  { id: 1, name: 'AI Text Generator', views: 1542 },
  { id: 2, name: 'Image Enhancer Pro', views: 895 },
  { id: 3, name: 'Code Assist', views: 673 }
];

const monthlyData = [
  { name: 'Jan', views: 500, users: 120 },
  { name: 'Feb', views: 650, users: 150 },
  { name: 'Mar', views: 800, users: 180 },
  { name: 'Apr', views: 750, users: 200 },
  { name: 'May', views: 950, users: 250 },
  { name: 'Jun', views: 1200, users: 280 }
];

const dailyData = [
  { name: 'Mon', views: 120 },
  { name: 'Tue', views: 145 },
  { name: 'Wed', views: 132 },
  { name: 'Thu', views: 164 },
  { name: 'Fri', views: 188 },
  { name: 'Sat', views: 143 },
  { name: 'Sun', views: 106 }
];

const referralSources = [
  { name: 'Direct', value: 40 },
  { name: 'Google', value: 30 },
  { name: 'Twitter', value: 15 },
  { name: 'LinkedIn', value: 10 },
  { name: 'Others', value: 5 }
];

const Analytics = () => {
  const totalViews = toolViews.reduce((acc, curr) => acc + curr.views, 0);
  const avgDailyViews = Math.round(dailyData.reduce((acc, curr) => acc + curr.views, 0) / dailyData.length);
  const totalUsers = monthlyData[monthlyData.length - 1].users;
  
  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Navbar />
      
      <div className="flex-1 container px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-muted-foreground mb-8">Track the performance of your AI tools</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                  <h3 className="text-2xl font-bold">{totalViews.toLocaleString()}</h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Daily Views</p>
                  <h3 className="text-2xl font-bold">{avgDailyViews}</h3>
                </div>
                <div className="p-2 bg-blue-500/10 rounded-full">
                  <BarChartIcon className="h-6 w-6 text-blue-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Growth Rate</p>
                  <h3 className="text-2xl font-bold">+24.5%</h3>
                </div>
                <div className="p-2 bg-green-500/10 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <h3 className="text-2xl font-bold">{totalUsers}</h3>
                </div>
                <div className="p-2 bg-amber-500/10 rounded-full">
                  <User className="h-6 w-6 text-amber-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="views" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="users" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={toolViews}
                    layout="vertical"
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="views" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Daily Traffic</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={dailyData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="views" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={referralSources}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Analytics;


import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Shield, ShieldOff, Trash, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Mock data for users
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://github.com/shadcn.png',
    isAdmin: true,
    joinDate: '2023-08-15',
    toolsCount: 5
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: null,
    isAdmin: false,
    joinDate: '2023-09-22',
    toolsCount: 3
  },
  {
    id: 3,
    name: 'Michael Smith',
    email: 'michael@example.com',
    avatar: null,
    isAdmin: false,
    joinDate: '2023-10-30',
    toolsCount: 0
  },
  {
    id: 4,
    name: 'Emily Chen',
    email: 'emily@example.com',
    avatar: 'https://github.com/shadcn.png',
    isAdmin: true,
    joinDate: '2023-07-05',
    toolsCount: 8
  }
];

const UsersManagement = () => {
  const [users, setUsers] = useState(mockUsers);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would perform a backend search
    console.log('Searching for:', searchQuery);
  };
  
  const filteredUsers = searchQuery
    ? users.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : users;
  
  const toggleAdminStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, isAdmin: !user.isAdmin } : user
    ));
  };
  
  const deleteUser = (id) => {
    if(confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      <Navbar />
      
      <div className="flex-1 container px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">User Management</h1>
        <p className="text-muted-foreground mb-8">Manage users and admin permissions</p>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>All Users</span>
              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Find user by email..."
                    className="pl-8 w-[250px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit">Search</Button>
              </form>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">User</th>
                    <th className="text-left py-3 px-4">Email</th>
                    <th className="text-left py-3 px-4">Join Date</th>
                    <th className="text-left py-3 px-4">Tools</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                      <tr key={user.id} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{user.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">{user.email}</td>
                        <td className="py-3 px-4">{user.joinDate}</td>
                        <td className="py-3 px-4">{user.toolsCount}</td>
                        <td className="py-3 px-4">
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            user.isAdmin 
                              ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' 
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
                          }`}>
                            <User className={`mr-1 h-3 w-3 ${user.isAdmin ? 'text-purple-500' : ''}`} />
                            {user.isAdmin ? 'Admin' : 'User'}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => toggleAdminStatus(user.id)}
                              title={user.isAdmin ? "Remove admin status" : "Make admin"}
                            >
                              {user.isAdmin ? (
                                <ShieldOff className="h-4 w-4" />
                              ) : (
                                <Shield className="h-4 w-4" />
                              )}
                            </Button>
                            
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => deleteUser(user.id)}
                              className="text-red-500 hover:text-red-700 border-red-200 hover:border-red-300 hover:bg-red-50"
                              title="Delete user"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-muted-foreground">
                        {searchQuery 
                          ? `No users found matching "${searchQuery}"`
                          : 'No users found'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default UsersManagement;

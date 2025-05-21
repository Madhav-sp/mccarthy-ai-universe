
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import ToolDetail from "./pages/ToolDetail";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Developers from "./pages/Developers";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Publish from "./pages/Publish";
import MyTools from "./pages/MyTools";
import Favorites from "./pages/Favorites";
import Analytics from "./pages/Analytics";
import UsersManagement from "./pages/UsersManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="mccarthy-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/tool/:id" element={<ToolDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/publish/:id" element={<Publish />} />
            <Route path="/my-tools" element={<MyTools />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/users" element={<UsersManagement />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

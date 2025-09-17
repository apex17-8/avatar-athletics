import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/Dashboard";
import ExerciseLibrary from "./components/ExerciseLibrary";
import Achievements from "./components/Achievements";
import Navigation from "./components/Navigation";
import { useState } from "react";

const queryClient = new QueryClient();

const AppContent = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "exercises":
        return <ExerciseLibrary />;
      case "achievements":
        return <Achievements />;
      case "coach":
        return <div className="min-h-screen bg-background p-4 pb-20"><div className="text-center py-20"><h2 className="text-2xl font-bold text-primary">AI Coach Coming Soon!</h2><p className="text-muted-foreground mt-2">Your personal fitness assistant is being trained</p></div></div>;
      case "progress":
        return <div className="min-h-screen bg-background p-4 pb-20"><div className="text-center py-20"><h2 className="text-2xl font-bold text-primary">Progress Analytics Coming Soon!</h2><p className="text-muted-foreground mt-2">Detailed fitness analytics and insights</p></div></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="relative">
      {renderActiveComponent()}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContent />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Button } from "@/components/ui/button";
import { Home, Dumbbell, Trophy, MessageCircle, BarChart3 } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navItems = [
    { id: "dashboard", label: "Home", icon: Home },
    { id: "exercises", label: "Quests", icon: Dumbbell },
    { id: "achievements", label: "Trophies", icon: Trophy },
    { id: "coach", label: "Coach", icon: MessageCircle },
    { id: "progress", label: "Stats", icon: BarChart3 },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-card z-50">
      <div className="flex justify-around items-center py-2 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center gap-1 h-auto py-2 px-3 ${
                isActive 
                  ? "text-primary shadow-glow" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => onTabChange(item.id)}
            >
              <IconComponent className={`w-5 h-5 ${isActive ? "drop-shadow-sm" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
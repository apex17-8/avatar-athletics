import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Zap, Dumbbell, Heart, Target, Crown, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first workout",
      icon: Star,
      progress: 100,
      maxProgress: 100,
      unlocked: true,
      rarity: "Common",
      xpReward: 50,
    },
    {
      id: 2,
      name: "Strength Seeker",
      description: "Complete 10 strength exercises",
      icon: Dumbbell,
      progress: 7,
      maxProgress: 10,
      unlocked: false,
      rarity: "Rare",
      xpReward: 100,
    },
    {
      id: 3,
      name: "Speed Demon",
      description: "Finish a workout in under 15 minutes",
      icon: Zap,
      progress: 0,
      maxProgress: 1,
      unlocked: false,
      rarity: "Epic",
      xpReward: 200,
    },
    {
      id: 4,
      name: "Endurance Master",
      description: "Exercise for 30 consecutive days",
      icon: Heart,
      progress: 12,
      maxProgress: 30,
      unlocked: false,
      rarity: "Legendary",
      xpReward: 500,
    },
    {
      id: 5,
      name: "Perfect Form",
      description: "Complete 50 exercises with perfect technique",
      icon: Target,
      progress: 23,
      maxProgress: 50,
      unlocked: false,
      rarity: "Epic", 
      xpReward: 300,
    },
    {
      id: 6,
      name: "Fitness Champion",
      description: "Reach level 25",
      icon: Crown,
      progress: 12,
      maxProgress: 25,
      unlocked: false,
      rarity: "Mythic",
      xpReward: 1000,
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "bg-muted text-muted-foreground";
      case "Rare": return "bg-accent text-accent-foreground";
      case "Epic": return "bg-primary text-primary-foreground";
      case "Legendary": return "bg-warning text-warning-foreground";
      case "Mythic": return "bg-gradient-achievement text-warning-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;

  return (
    <div className="min-h-screen bg-background p-4 pb-20 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Trophy Hall
        </h1>
        <p className="text-muted-foreground">Your legendary achievements</p>
      </div>

      {/* Progress Overview */}
      <Card className="p-6 bg-gradient-card shadow-card">
        <div className="text-center space-y-4">
          <div className="relative">
            <Trophy className="w-16 h-16 mx-auto text-warning drop-shadow-lg" />
            <Badge className="absolute -top-2 -right-2 bg-warning text-warning-foreground shadow-achievement">
              {unlockedCount}
            </Badge>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Achievement Progress</h3>
            <p className="text-3xl font-bold text-warning">{unlockedCount}/{totalCount}</p>
            <p className="text-sm text-muted-foreground">Achievements Unlocked</p>
          </div>
          <Progress 
            value={(unlockedCount / totalCount) * 100} 
            className="h-3 bg-muted"
          />
        </div>
      </Card>

      {/* Achievements List */}
      <div className="space-y-4">
        {achievements.map((achievement) => {
          const IconComponent = achievement.icon;
          
          return (
            <Card 
              key={achievement.id} 
              className={`relative overflow-hidden bg-gradient-card shadow-card border-border transition-all duration-300 ${
                achievement.unlocked ? "shadow-achievement" : "opacity-75"
              }`}
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-full ${
                    achievement.unlocked 
                      ? "bg-warning/20 text-warning shadow-achievement" 
                      : "bg-muted/50 text-muted-foreground"
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold ${
                        achievement.unlocked ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {achievement.name}
                      </h3>
                      {achievement.unlocked && (
                        <Medal className="w-4 h-4 text-warning" />
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                    
                    {/* Progress Bar */}
                    {!achievement.unlocked && (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Progress</span>
                          <span>{achievement.progress}/{achievement.maxProgress}</span>
                        </div>
                        <Progress 
                          value={(achievement.progress / achievement.maxProgress) * 100} 
                          className="h-2 bg-muted"
                        />
                      </div>
                    )}
                    
                    {/* Badges */}
                    <div className="flex gap-2">
                      <Badge className={getRarityColor(achievement.rarity)}>
                        {achievement.rarity}
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/20 text-accent">
                        {achievement.xpReward} XP
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Unlock Effect */}
              {achievement.unlocked && (
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-achievement opacity-20 rounded-bl-full" />
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
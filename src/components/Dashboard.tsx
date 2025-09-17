import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Dumbbell, Heart, Trophy, Star, Sword } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.jpg";

const Dashboard = () => {
  const userStats = {
    level: 12,
    xp: 2750,
    xpToNext: 3000,
    strength: 85,
    agility: 72,
    endurance: 68,
  };

  const recentAchievements = [
    { id: 1, name: "First Quest", icon: Star, unlocked: true },
    { id: 2, name: "Strength Builder", icon: Dumbbell, unlocked: true },
    { id: 3, name: "Speed Demon", icon: Zap, unlocked: false },
    { id: 4, name: "Endurance Master", icon: Heart, unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          FitQuest
        </h1>
        <p className="text-muted-foreground">Level up your fitness journey</p>
      </div>

      {/* Hero Avatar Section */}
      <Card className="relative overflow-hidden bg-gradient-card shadow-card border-border">
        <div className="p-6 text-center">
          <div className="relative mb-4">
            <img 
              src={heroAvatar} 
              alt="Your Hero Avatar" 
              className="w-32 h-32 mx-auto rounded-full border-4 border-primary shadow-glow object-cover"
            />
            <Badge 
              className="absolute -top-2 -right-2 bg-warning text-warning-foreground shadow-achievement"
            >
              LVL {userStats.level}
            </Badge>
          </div>
          
          <h2 className="text-xl font-semibold mb-2">Hero Champion</h2>
          
          {/* XP Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>XP</span>
              <span>{userStats.xp}/{userStats.xpToNext}</span>
            </div>
            <Progress 
              value={(userStats.xp / userStats.xpToNext) * 100} 
              className="h-3 bg-muted"
            />
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 bg-gradient-card shadow-card text-center">
          <Sword className="w-8 h-8 mx-auto mb-2 text-statStrength" />
          <p className="text-sm text-muted-foreground">Strength</p>
          <p className="text-2xl font-bold">{userStats.strength}</p>
          <Progress value={userStats.strength} className="mt-2 h-2" />
        </Card>
        
        <Card className="p-4 bg-gradient-card shadow-card text-center">
          <Zap className="w-8 h-8 mx-auto mb-2 text-statAgility" />
          <p className="text-sm text-muted-foreground">Agility</p>
          <p className="text-2xl font-bold">{userStats.agility}</p>
          <Progress value={userStats.agility} className="mt-2 h-2" />
        </Card>
        
        <Card className="p-4 bg-gradient-card shadow-card text-center">
          <Heart className="w-8 h-8 mx-auto mb-2 text-statEndurance" />
          <p className="text-sm text-muted-foreground">Endurance</p>
          <p className="text-2xl font-bold">{userStats.endurance}</p>
          <Progress value={userStats.endurance} className="mt-2 h-2" />
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button className="h-16 bg-primary hover:bg-primary/90 shadow-glow">
          <div className="text-center">
            <Dumbbell className="w-6 h-6 mx-auto mb-1" />
            <span>Start Workout</span>
          </div>
        </Button>
        
        <Button variant="secondary" className="h-16">
          <div className="text-center">
            <Trophy className="w-6 h-6 mx-auto mb-1" />
            <span>View Quests</span>
          </div>
        </Button>
      </div>

      {/* Achievements */}
      <Card className="p-6 bg-gradient-card shadow-card">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-warning" />
          Recent Achievements
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {recentAchievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={achievement.id}
                className={`flex items-center gap-3 p-3 rounded-lg border ${
                  achievement.unlocked
                    ? "bg-success/10 border-success text-success shadow-achievement"
                    : "bg-muted/50 border-border text-muted-foreground"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span className="text-sm font-medium">{achievement.name}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, Zap, Trophy } from "lucide-react";

const ExerciseLibrary = () => {
  const exercises = [
    {
      id: 1,
      name: "Power Push-ups",
      difficulty: "Beginner",
      duration: "2 min",
      xpReward: 50,
      category: "Strength",
      description: "Build upper body strength with this foundational exercise",
      completed: true,
    },
    {
      id: 2,
      name: "Lightning Squats",
      difficulty: "Intermediate", 
      duration: "3 min",
      xpReward: 75,
      category: "Agility",
      description: "Boost your leg power and agility with dynamic squats",
      completed: false,
    },
    {
      id: 3,
      name: "Endurance Plank Hold",
      difficulty: "Advanced",
      duration: "4 min", 
      xpReward: 100,
      category: "Endurance",
      description: "Test your core strength and mental fortitude",
      completed: false,
    },
    {
      id: 4,
      name: "Warrior Burpees",
      difficulty: "Expert",
      duration: "5 min",
      xpReward: 150,
      category: "Full Body",
      description: "The ultimate full-body challenge for true heroes",
      completed: false,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success text-success-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground"; 
      case "Advanced": return "bg-destructive text-destructive-foreground";
      case "Expert": return "bg-primary text-primary-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Exercise Quests
        </h1>
        <p className="text-muted-foreground">Choose your training adventure</p>
      </div>

      {/* Exercise Grid */}
      <div className="space-y-4">
        {exercises.map((exercise) => (
          <Card key={exercise.id} className="relative overflow-hidden bg-gradient-card shadow-card border-border">
            <div className="p-6">
              {/* Completion Badge */}
              {exercise.completed && (
                <Badge className="absolute top-4 right-4 bg-success text-success-foreground shadow-achievement">
                  <Trophy className="w-3 h-3 mr-1" />
                  Complete
                </Badge>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{exercise.name}</h3>
                  <p className="text-sm text-muted-foreground">{exercise.description}</p>
                </div>
              </div>

              {/* Exercise Meta */}
              <div className="flex gap-2 mb-4 flex-wrap">
                <Badge className={getDifficultyColor(exercise.difficulty)}>
                  {exercise.difficulty}
                </Badge>
                <Badge variant="secondary" className="bg-secondary/50">
                  <Clock className="w-3 h-3 mr-1" />
                  {exercise.duration}
                </Badge>
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  <Zap className="w-3 h-3 mr-1" />
                  {exercise.xpReward} XP
                </Badge>
              </div>

              {/* Action Button */}
              <Button 
                className={`w-full ${
                  exercise.completed 
                    ? "bg-success hover:bg-success/90" 
                    : "bg-primary hover:bg-primary/90 shadow-glow"
                }`}
                disabled={exercise.completed}
              >
                <Play className="w-4 h-4 mr-2" />
                {exercise.completed ? "Quest Completed!" : "Start Quest"}
              </Button>
            </div>

            {/* Progress Bar for In-Progress Exercises */}
            {!exercise.completed && exercise.id === 2 && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                <div className="h-full bg-gradient-xp" style={{ width: "35%" }} />
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Stats Summary */}
      <Card className="p-6 bg-gradient-card shadow-card">
        <h3 className="text-lg font-semibold mb-4">Today's Progress</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-success">1</p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-warning">50</p>
            <p className="text-sm text-muted-foreground">XP Earned</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-accent">8</p>
            <p className="text-sm text-muted-foreground">Minutes Active</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExerciseLibrary;
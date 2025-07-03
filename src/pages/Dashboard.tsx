
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  BookOpen, 
  Trophy, 
  Target, 
  Play, 
  CheckCircle, 
  Star,
  Calendar,
  TrendingUp,
  Award,
  Users,
  Brain,
  Gamepad2,
  ArrowLeft,
  BarChart3,
  FileText,
  Video
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userProgress = {
    name: "Alex Johnson",
    enrollmentDate: "Jan 15, 2024",
    overallProgress: 65,
    completedModules: 3,
    totalModules: 5,
    totalPoints: 2450,
    rank: 23,
    streak: 12
  };

  const moduleProgress = [
    {
      id: 1,
      title: "Introduction to ITS & Global Case Studies",
      progress: 100,
      status: "completed",
      score: 92,
      timeSpent: "14h 30m",
      nextLesson: null
    },
    {
      id: 2,
      title: "AI & Data Analytics in Transport",
      progress: 100,
      status: "completed",
      score: 88,
      timeSpent: "21h 15m",
      nextLesson: null
    },
    {
      id: 3,
      title: "Smart Signals, ATMS & Urban Traffic Control",
      progress: 75,
      status: "in-progress",
      score: 0,
      timeSpent: "16h 45m",
      nextLesson: "Traffic Management Centers"
    },
    {
      id: 4,
      title: "Public Transport Integration & EV Ecosystems",
      progress: 25,
      status: "in-progress",
      score: 0,
      timeSpent: "4h 20m",
      nextLesson: "Electric Vehicle Technology"
    },
    {
      id: 5,
      title: "IoT in Infrastructure, Sensors & Smart Parking",
      progress: 0,
      status: "locked",
      score: 0,
      timeSpent: "0h 0m",
      nextLesson: "IoT Fundamentals in Transportation"
    }
  ];

  const achievements = [
    { name: "First Steps", description: "Complete your first module", earned: true, date: "Feb 1, 2024" },
    { name: "Quick Learner", description: "Complete 3 lessons in one day", earned: true, date: "Feb 5, 2024" },
    { name: "Perfect Score", description: "Score 100% on a quiz", earned: true, date: "Feb 10, 2024" },
    { name: "Consistent", description: "Maintain a 7-day learning streak", earned: true, date: "Feb 12, 2024" },
    { name: "AI Expert", description: "Complete AI & Data Analytics module", earned: true, date: "Feb 20, 2024" },
    { name: "Simulation Master", description: "Complete all simulations", earned: false, date: null },
    { name: "Course Champion", description: "Complete all modules", earned: false, date: null },
    { name: "Top Performer", description: "Rank in top 10", earned: false, date: null }
  ];

  const upcomingDeadlines = [
    { title: "Module 3 Quiz", dueDate: "Dec 28, 2024", type: "quiz" },
    { title: "Traffic Simulation Assignment", dueDate: "Jan 2, 2025", type: "assignment" },
    { title: "Module 4 Final Test", dueDate: "Jan 10, 2025", type: "test" }
  ];

  const recentActivity = [
    { action: "Completed lesson", item: "Adaptive Signal Control Technology", time: "2 hours ago" },
    { action: "Scored 95%", item: "Traffic Flow Theory Quiz", time: "1 day ago" },
    { action: "Started simulation", item: "Traffic Management Center", time: "2 days ago" },
    { action: "Completed module", item: "AI & Data Analytics in Transport", time: "3 days ago" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'locked': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 100) return 'bg-green-500';
    if (progress > 50) return 'bg-blue-500';
    if (progress > 0) return 'bg-yellow-500';
    return 'bg-gray-300';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ITS</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Learning Dashboard
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Welcome back,</p>
                <p className="font-semibold text-gray-800">{userProgress.name}</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">AJ</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Overall Progress</p>
                  <p className="text-3xl font-bold">{userProgress.overallProgress}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-green-600 to-teal-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Completed Modules</p>
                  <p className="text-3xl font-bold">{userProgress.completedModules}/{userProgress.totalModules}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Total Points</p>
                  <p className="text-3xl font-bold">{userProgress.totalPoints.toLocaleString()}</p>
                </div>
                <Trophy className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Learning Streak</p>
                  <p className="text-3xl font-bold">{userProgress.streak} days</p>
                </div>
                <Target className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="progress" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur-sm">
            <TabsTrigger value="progress" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Progress
            </TabsTrigger>
            <TabsTrigger value="courses" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="activity" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Activity
            </TabsTrigger>
          </TabsList>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Module Progress</CardTitle>
                    <CardDescription>Track your progress through each course module</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {moduleProgress.map((module) => (
                      <div key={module.id} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {module.id}
                            </div>
                            <div>
                              <h4 className="font-medium text-sm">{module.title}</h4>
                              <p className="text-xs text-gray-500">Time spent: {module.timeSpent}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className={getStatusColor(module.status)}>
                              {module.status === 'completed' ? 'Completed' : 
                               module.status === 'in-progress' ? 'In Progress' : 'Locked'}
                            </Badge>
                            {module.score > 0 && (
                              <Badge variant="outline">{module.score}%</Badge>
                            )}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{module.progress}%</span>
                          </div>
                          <Progress value={module.progress} className="h-2" />
                        </div>
                        {module.nextLesson && (
                          <div className="flex items-center gap-2 text-sm text-blue-600">
                            <Play className="w-4 h-4" />
                            Next: {module.nextLesson}
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">Upcoming Deadlines</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingDeadlines.map((deadline, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{deadline.title}</p>
                          <p className="text-xs text-gray-500">{deadline.dueDate}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {deadline.type}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                  <CardContent className="p-6 text-center">
                    <Star className="w-8 h-8 mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Current Rank</h3>
                    <p className="text-2xl font-bold mb-1">#{userProgress.rank}</p>
                    <p className="text-sm text-yellow-100">out of 1,247 students</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-6">
              {moduleProgress.map((module) => (
                <Card key={module.id} className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                          {module.id}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{module.title}</CardTitle>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                            <span>Progress: {module.progress}%</span>
                            <span>Time: {module.timeSpent}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className={getStatusColor(module.status)}>
                        {module.status === 'completed' ? 'Completed' : 
                         module.status === 'in-progress' ? 'In Progress' : 'Locked'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={module.progress} className="mb-4" />
                    <div className="flex items-center justify-between">
                      {module.nextLesson ? (
                        <div className="flex items-center gap-2 text-sm text-blue-600">
                          <Play className="w-4 h-4" />
                          Continue: {module.nextLesson}
                        </div>
                      ) : module.status === 'completed' ? (
                        <div className="flex items-center gap-2 text-sm text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          Module Completed
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          Locked
                        </div>
                      )}
                      
                      <div className="flex gap-2">
                        {module.status !== 'locked' && (
                          <>
                            <Button size="sm" variant="outline">
                              <Video className="w-4 h-4 mr-1" />
                              Videos
                            </Button>
                            <Button size="sm" variant="outline">
                              <Brain className="w-4 h-4 mr-1" />
                              Quiz
                            </Button>
                            <Button size="sm" variant="outline">
                              <Gamepad2 className="w-4 h-4 mr-1" />
                              Simulate
                            </Button>
                          </>
                        )}
                        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          {module.status === 'locked' ? 'Unlock' : 'Continue'}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Achievements</h2>
              <p className="text-gray-600">Unlock badges as you progress through your learning journey</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className={`border-0 transition-all duration-300 ${
                  achievement.earned 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:shadow-lg' 
                    : 'bg-white/80 backdrop-blur-sm hover:shadow-md'
                }`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      achievement.earned 
                        ? 'bg-white/20' 
                        : 'bg-gray-100'
                    }`}>
                      <Trophy className={`w-8 h-8 ${
                        achievement.earned 
                          ? 'text-white' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                    <h3 className={`font-bold mb-2 ${
                      achievement.earned 
                        ? 'text-white' 
                        : 'text-gray-800'
                    }`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-sm mb-3 ${
                      achievement.earned 
                        ? 'text-yellow-100' 
                        : 'text-gray-600'
                    }`}>
                      {achievement.description}
                    </p>
                    {achievement.earned && achievement.date && (
                      <p className="text-xs text-yellow-100">
                        Earned on {achievement.date}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest learning activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {activity.action}: <span className="text-blue-600">{activity.item}</span>
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Learning Statistics</CardTitle>
                  <CardDescription>Your learning journey by the numbers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Total Study Time</span>
                    <span className="text-sm text-blue-600 font-bold">56h 50m</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Lessons Completed</span>
                    <span className="text-sm text-green-600 font-bold">28/50</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Quizzes Passed</span>
                    <span className="text-sm text-purple-600 font-bold">12/17</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Average Score</span>
                    <span className="text-sm text-orange-600 font-bold">88.5%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;

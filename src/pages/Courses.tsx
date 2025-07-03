
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  BookOpen, 
  Users, 
  Award, 
  Play, 
  FileText, 
  Zap, 
  CheckCircle,
  ArrowLeft,
  Star,
  Target,
  Brain,
  Gamepad2
} from "lucide-react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courseModules = [
    {
      id: 1,
      title: "Introduction to ITS & Global Case Studies",
      description: "Explore the fundamentals of Intelligent Transportation Systems and learn from successful implementations worldwide. This module covers the history, evolution, and current state of ITS globally.",
      duration: "2 weeks",
      lessons: 8,
      difficulty: "Beginner",
      completed: 0,
      topics: [
        "History and Evolution of ITS",
        "Global ITS Standards and Frameworks",
        "Case Study: Singapore's Smart Nation Initiative",
        "Case Study: European ITS Deployment",
        "ITS Architecture and Components",
        "Cost-Benefit Analysis of ITS Projects",
        "Future Trends in Transportation",
        "Project: ITS Implementation Plan"
      ],
      quizzes: 3,
      simulations: 1
    },
    {
      id: 2,
      title: "AI & Data Analytics in Transport",
      description: "Master the application of artificial intelligence and data analytics in modern transportation systems. Learn machine learning algorithms, predictive analytics, and data visualization techniques.",
      duration: "3 weeks",
      lessons: 12,
      difficulty: "Intermediate",
      completed: 0,
      topics: [
        "Introduction to AI in Transportation",
        "Machine Learning Fundamentals",
        "Traffic Pattern Recognition",
        "Predictive Analytics for Transport",
        "Big Data in Transportation",
        "Computer Vision for Traffic Management",
        "Natural Language Processing in Transport",
        "Real-time Data Processing",
        "AI Ethics in Transportation",
        "Hands-on: Building ML Models",
        "Case Study: Uber's AI Systems",
        "Project: AI-Powered Traffic Predictor"
      ],
      quizzes: 4,
      simulations: 3
    },
    {
      id: 3,
      title: "Smart Signals, ATMS & Urban Traffic Control",
      description: "Deep dive into Advanced Traffic Management Systems and smart signal optimization techniques. Learn about adaptive signal control, traffic flow optimization, and urban mobility solutions.",
      duration: "3 weeks",
      lessons: 10,
      difficulty: "Advanced",
      completed: 0,
      topics: [
        "Traffic Signal Control Systems",
        "Adaptive Signal Control Technology",
        "Traffic Flow Theory",
        "SCATS and SCOOT Systems",
        "Intersection Design and Optimization",
        "Coordinated Signal Systems",
        "Traffic Management Centers",
        "Emergency Vehicle Preemption",
        "Performance Measurement and KPIs",
        "Project: Signal Timing Optimization"
      ],
      quizzes: 3,
      simulations: 2
    },
    {
      id: 4,
      title: "Public Transport Integration & EV Ecosystems",
      description: "Learn about sustainable transportation solutions and electric vehicle ecosystem integration. Explore multimodal transport integration, charging infrastructure, and sustainable mobility planning.",
      duration: "2 weeks",
      lessons: 9,
      difficulty: "Intermediate",
      completed: 0,
      topics: [
        "Multimodal Transportation Systems",
        "Public Transit Integration",
        "Electric Vehicle Technology",
        "Charging Infrastructure Planning",
        "Battery Management Systems",
        "Smart Grid Integration",
        "Mobility as a Service (MaaS)",
        "Sustainable Transport Planning",
        "Project: EV Charging Network Design"
      ],
      quizzes: 3,
      simulations: 2
    },
    {
      id: 5,
      title: "IoT in Infrastructure, Sensors & Smart Parking",
      description: "Understand IoT applications in transportation infrastructure and smart parking solutions. Learn about sensor networks, data collection, and intelligent parking management systems.",
      duration: "2 weeks",
      lessons: 11,
      difficulty: "Advanced",
      completed: 0,
      topics: [
        "IoT Fundamentals in Transportation",
        "Sensor Technologies and Applications",
        "Wireless Communication Protocols",
        "Smart Parking Systems",
        "Dynamic Parking Pricing",
        "Infrastructure Monitoring",
        "Environmental Sensors",
        "Edge Computing in IoT",
        "Data Security and Privacy",
        "Maintenance and Lifecycle Management",
        "Project: Smart Parking Solution"
      ],
      quizzes: 4,
      simulations: 3
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalLessons = courseModules.reduce((sum, module) => sum + module.lessons, 0);
  const totalQuizzes = courseModules.reduce((sum, module) => sum + module.quizzes, 0);
  const totalSimulations = courseModules.reduce((sum, module) => sum + module.simulations, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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
                ITS India Academy
              </h1>
            </div>
          </div>
          <Link to="/dashboard">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Course Overview */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Intelligent Transportation Systems
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master the cutting-edge technologies transforming modern transportation. From AI-powered traffic management 
            to smart parking solutions, become an expert in the field that's reshaping how cities move.
          </p>
          
          {/* Course Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{courseModules.length}</div>
                <div className="text-gray-600">Modules</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">{totalLessons}</div>
                <div className="text-gray-600">Lessons</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">{totalQuizzes}</div>
                <div className="text-gray-600">Quizzes</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 bg-white/70 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">{totalSimulations}</div>
                <div className="text-gray-600">Simulations</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Content */}
        <Tabs defaultValue="modules" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white/70 backdrop-blur-sm">
            <TabsTrigger value="modules" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Course Modules
            </TabsTrigger>
            <TabsTrigger value="quizzes" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Quizzes & Tests
            </TabsTrigger>
            <TabsTrigger value="simulations" className="flex items-center gap-2">
              <Gamepad2 className="w-4 h-4" />
              Simulations
            </TabsTrigger>
          </TabsList>

          {/* Modules Tab */}
          <TabsContent value="modules" className="space-y-6">
            <div className="grid gap-6">
              {courseModules.map((module) => (
                <Card key={module.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="secondary" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                            Module {module.id}
                          </Badge>
                          <Badge className={getDifficultyColor(module.difficulty)}>
                            {module.difficulty}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{module.title}</CardTitle>
                        <CardDescription className="text-gray-600 text-base leading-relaxed">
                          {module.description}
                        </CardDescription>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {module.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {module.lessons} lessons
                      </div>
                      <div className="flex items-center gap-1">
                        <Brain className="w-4 h-4" />
                        {module.quizzes} quizzes
                      </div>
                      <div className="flex items-center gap-1">
                        <Gamepad2 className="w-4 h-4" />
                        {module.simulations} simulations
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-gray-500">{module.completed}%</span>
                      </div>
                      <Progress value={module.completed} className="h-2" />
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-gray-800">Topics Covered:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {module.topics.map((topic, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {topic}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Play className="w-4 h-4 mr-2" />
                        Start Module
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        Syllabus
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Quizzes Tab */}
          <TabsContent value="quizzes" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Interactive Quizzes & Assessments</h2>
              <p className="text-gray-600">Test your knowledge and track your progress with our comprehensive quiz system.</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {courseModules.map((module) => (
                <Card key={module.id} className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                        Module {module.id}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Brain className="w-4 h-4" />
                        {module.quizzes} quizzes
                      </div>
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Knowledge Check Quiz</span>
                        <Badge variant="outline">10 questions</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Practical Assessment</span>
                        <Badge variant="outline">15 questions</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Final Module Test</span>
                        <Badge variant="outline">20 questions</Badge>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                      <Target className="w-4 h-4 mr-2" />
                      Take Quiz
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Simulations Tab */}
          <TabsContent value="simulations" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Interactive Simulations</h2>
              <p className="text-gray-600">Practice with real-world scenarios using our advanced simulation tools.</p>
            </div>
            
            <div className="grid gap-6">
              <Card className="border-0 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-6 h-6" />
                    Traffic Flow Simulator
                  </CardTitle>
                  <CardDescription className="text-orange-100">
                    Simulate traffic patterns and optimize signal timing in virtual city environments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-orange-100">Interactive 3D Environment</div>
                    <Button variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                      Launch Simulator
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-6 h-6" />
                    AI Traffic Predictor
                  </CardTitle>
                  <CardDescription className="text-purple-100">
                    Build and train machine learning models to predict traffic congestion patterns.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-purple-100">Python-based ML Environment</div>
                    <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                      Start Coding
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-r from-green-500 to-teal-500 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    Smart Parking Designer
                  </CardTitle>
                  <CardDescription className="text-green-100">
                    Design and optimize smart parking systems with IoT sensors and dynamic pricing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-green-100">Drag & Drop Interface</div>
                    <Button variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                      Design System
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Enrollment CTA */}
        <div className="mt-16">
          <Card className="border-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your ITS Journey?</h3>
              <p className="text-lg mb-6 text-blue-100">
                Join thousands of professionals advancing their careers in transportation technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Enroll Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Courses;


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Clock, Award, ArrowRight, BookOpen, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const courseModules = [
    {
      id: 1,
      title: "Introduction to ITS & Global Case Studies",
      description: "Explore the fundamentals of Intelligent Transportation Systems and learn from successful implementations worldwide.",
      duration: "2 weeks",
      lessons: 8,
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "AI & Data Analytics in Transport",
      description: "Master the application of artificial intelligence and data analytics in modern transportation systems.",
      duration: "3 weeks",
      lessons: 12,
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Smart Signals, ATMS & Urban Traffic Control",
      description: "Deep dive into Advanced Traffic Management Systems and smart signal optimization techniques.",
      duration: "3 weeks",
      lessons: 10,
      difficulty: "Advanced"
    },
    {
      id: 4,
      title: "Public Transport Integration & EV Ecosystems",
      description: "Learn about sustainable transportation solutions and electric vehicle ecosystem integration.",
      duration: "2 weeks",
      lessons: 9,
      difficulty: "Intermediate"
    },
    {
      id: 5,
      title: "IoT in Infrastructure, Sensors & Smart Parking",
      description: "Understand IoT applications in transportation infrastructure and smart parking solutions.",
      duration: "2 weeks",
      lessons: 11,
      difficulty: "Advanced"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Interactive Learning",
      description: "Engage with hands-on projects and real-world case studies"
    },
    {
      icon: Zap,
      title: "Live Simulations",
      description: "Practice with industry-standard simulation tools"
    },
    {
      icon: Target,
      title: "Skills Assessment",
      description: "Test your knowledge with quizzes and practical assessments"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">ITS</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ITS India Academy
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/courses" className="text-gray-700 hover:text-blue-600 transition-colors">Courses</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">Dashboard</Link>
          </nav>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Master the Future of Transportation
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join India's premier Intelligent Transportation Systems academy and learn cutting-edge technologies 
            that are revolutionizing how we move through cities.
          </p>
          
          {/* Video Promo Section */}
          <div className="relative mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Watch Our Course Introduction</h3>
              <p className="text-blue-100 mb-6">
                Get a preview of what you'll learn in our comprehensive ITS program
              </p>
              <Link to="/courses">
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Click Here to Explore Courses
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-gray-600">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose ITS India Academy?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Course Modules Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Course Modules</h3>
          <p className="text-gray-600 text-lg">Comprehensive curriculum designed by industry experts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseModules.map((module) => (
            <Card key={module.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Module {module.id}
                  </Badge>
                  <Badge variant="outline">{module.difficulty}</Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-gray-600">
                  {module.description}
                </CardDescription>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {module.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {module.lessons} lessons
                  </div>
                </div>
                <Link to="/courses">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Start Learning
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/courses">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              View All Course Details
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals who have advanced their careers with our comprehensive ITS program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Explore Courses
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Access Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">ITS</span>
                </div>
                <span className="text-xl font-bold">ITS India Academy</span>
              </div>
              <p className="text-gray-400">
                Leading the future of transportation education in India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ITS India Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

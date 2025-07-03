
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import CourseSyllabus from "@/components/CourseSyllabus";

const CourseModule = () => {
  const { moduleId } = useParams();
  const moduleNumber = parseInt(moduleId || "1");

  const moduleNames = {
    1: "Introduction to ITS & Global Case Studies",
    2: "AI & Data Analytics in Transport", 
    3: "Smart Signals, ATMS & Urban Traffic Control",
    4: "Public Transport Integration & EV Ecosystems",
    5: "IoT in Infrastructure, Sensors & Smart Parking"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/courses" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Courses
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
          <div className="flex gap-3">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">
            Module {moduleNumber}: {moduleNames[moduleNumber as keyof typeof moduleNames]}
          </h1>
          <p className="text-gray-600">Comprehensive course syllabus and learning materials</p>
        </div>

        <CourseSyllabus moduleId={moduleNumber} />
      </div>
    </div>
  );
};

export default CourseModule;

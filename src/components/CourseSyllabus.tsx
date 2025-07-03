
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  BookOpen, 
  Users, 
  Award, 
  Play, 
  FileText, 
  CheckCircle,
  Brain,
  Gamepad2,
  Target,
  Download
} from "lucide-react";

interface SyllabusProps {
  moduleId: number;
}

const CourseSyllabus = ({ moduleId }: SyllabusProps) => {
  const syllabusData = {
    1: {
      title: "Introduction to ITS & Global Case Studies",
      description: "Foundation course covering ITS fundamentals and global implementations",
      duration: "2 weeks",
      totalHours: 40,
      difficulty: "Beginner",
      prerequisites: "Basic understanding of transportation systems",
      learningObjectives: [
        "Understand the evolution and importance of ITS",
        "Analyze global ITS implementations and best practices",
        "Evaluate cost-benefit frameworks for ITS projects",
        "Design basic ITS architecture components"
      ],
      weeks: [
        {
          week: 1,
          title: "ITS Fundamentals & History",
          lessons: [
            {
              id: 1,
              title: "Introduction to Intelligent Transportation Systems",
              duration: "90 min",
              type: "Video Lecture",
              topics: ["Definition of ITS", "Historical evolution", "Key stakeholders"]
            },
            {
              id: 2,
              title: "ITS Architecture and Components",
              duration: "120 min",
              type: "Interactive Session",
              topics: ["System architecture", "Hardware components", "Software integration"]
            },
            {
              id: 3,
              title: "Global ITS Standards and Frameworks",
              duration: "90 min",
              type: "Case Study",
              topics: ["ISO standards", "Regional frameworks", "Interoperability"]
            },
            {
              id: 4,
              title: "Hands-on: ITS Component Analysis",
              duration: "120 min",
              type: "Lab Exercise",
              topics: ["Component identification", "System mapping", "Architecture design"]
            }
          ],
          assignment: "Design an ITS architecture for a small city intersection",
          quiz: "Knowledge check on ITS fundamentals (20 questions)"
        },
        {
          week: 2,
          title: "Global Case Studies & Implementation",
          lessons: [
            {
              id: 5,
              title: "Singapore's Smart Nation Initiative",
              duration: "90 min",
              type: "Case Study",
              topics: ["Smart mobility", "Traffic management", "Urban planning integration"]
            },
            {
              id: 6,
              title: "European ITS Deployment Strategies",
              duration: "90 min",
              type: "Video Lecture",
              topics: ["C-ITS corridor", "ERTMS systems", "Cross-border cooperation"]
            },
            {
              id: 7,
              title: "Cost-Benefit Analysis of ITS Projects",
              duration: "120 min",
              type: "Workshop",
              topics: ["ROI calculation", "Risk assessment", "Funding strategies"]
            },
            {
              id: 8,
              title: "Project: ITS Implementation Plan",
              duration: "180 min",
              type: "Capstone Project",
              topics: ["Stakeholder analysis", "Implementation roadmap", "Budget planning"]
            }
          ],
          assignment: "Develop a comprehensive ITS implementation plan for a chosen city",
          quiz: "Case study analysis and practical assessment (25 questions)"
        }
      ],
      assessments: [
        { type: "Weekly Quizzes", weight: "30%", description: "2 quizzes covering theoretical concepts" },
        { type: "Assignments", weight: "40%", description: "Practical exercises and case study analysis" },
        { type: "Final Project", weight: "30%", description: "Comprehensive ITS implementation plan" }
      ],
      resources: [
        "ITS Handbook by USDOT",
        "Smart Cities: Digital Solutions for a More Livable Future",
        "IEEE ITS Standards Documentation",
        "Global ITS Case Study Database"
      ]
    },
    2: {
      title: "AI & Data Analytics in Transport",
      description: "Advanced course on applying AI and machine learning in transportation systems",
      duration: "3 weeks",
      totalHours: 60,
      difficulty: "Intermediate",
      prerequisites: "Basic programming knowledge (Python preferred), Statistics fundamentals",
      learningObjectives: [
        "Master machine learning algorithms for transportation applications",
        "Implement predictive analytics for traffic management",
        "Design AI-powered transportation solutions",
        "Evaluate ethical considerations in transportation AI"
      ],
      weeks: [
        {
          week: 1,
          title: "AI Fundamentals in Transportation",
          lessons: [
            {
              id: 1,
              title: "Introduction to AI in Transportation",
              duration: "90 min",
              type: "Video Lecture",
              topics: ["AI applications overview", "Machine learning types", "Transportation use cases"]
            },
            {
              id: 2,
              title: "Machine Learning Fundamentals",
              duration: "120 min",
              type: "Coding Workshop",
              topics: ["Supervised learning", "Unsupervised learning", "Python libraries"]
            },
            {
              id: 3,
              title: "Traffic Pattern Recognition",
              duration: "120 min",
              type: "Lab Exercise",
              topics: ["Data preprocessing", "Pattern analysis", "Feature extraction"]
            },
            {
              id: 4,
              title: "Hands-on: Building Your First ML Model",
              duration: "150 min",
              type: "Coding Session",
              topics: ["Model training", "Validation techniques", "Performance metrics"]
            }
          ],
          assignment: "Build a traffic volume prediction model using historical data",
          quiz: "AI and ML fundamentals assessment (30 questions)"
        },
        {
          week: 2,
          title: "Advanced Analytics & Computer Vision",
          lessons: [
            {
              id: 5,
              title: "Predictive Analytics for Transport",
              duration: "120 min",
              type: "Workshop",
              topics: ["Time series analysis", "Demand forecasting", "Route optimization"]
            },
            {
              id: 6,
              title: "Big Data in Transportation",
              duration: "90 min",
              type: "Lecture + Demo",
              topics: ["Data sources", "Real-time processing", "Storage solutions"]
            },
            {
              id: 7,
              title: "Computer Vision for Traffic Management",
              duration: "150 min",
              type: "Lab Exercise",
              topics: ["Image recognition", "Vehicle detection", "Traffic monitoring"]
            },
            {
              id: 8,
              title: "Real-time Data Processing",
              duration: "120 min",
              type: "Coding Workshop",
              topics: ["Stream processing", "Edge computing", "API integration"]
            }
          ],
          assignment: "Develop a computer vision system for vehicle counting",
          quiz: "Advanced analytics and computer vision (25 questions)"
        },
        {
          week: 3,
          title: "AI Applications & Ethics",
          lessons: [
            {
              id: 9,
              title: "Natural Language Processing in Transport",
              duration: "90 min",
              type: "Interactive Session",
              topics: ["Customer service bots", "Social media analysis", "Sentiment analysis"]
            },
            {
              id: 10,
              title: "AI Ethics in Transportation",
              duration: "90 min",
              type: "Discussion Forum",
              topics: ["Bias in algorithms", "Privacy concerns", "Regulatory compliance"]
            },
            {
              id: 11,
              title: "Case Study: Uber's AI Systems",
              duration: "120 min",
              type: "Case Analysis",
              topics: ["Dynamic pricing", "Route optimization", "Demand prediction"]
            },
            {
              id: 12,
              title: "Capstone: AI-Powered Traffic Predictor",
              duration: "180 min",
              type: "Final Project",
              topics: ["Full system design", "Implementation", "Testing and validation"]
            }
          ],
          assignment: "Design and implement an AI solution for a transportation challenge",
          quiz: "Comprehensive assessment covering all AI applications (35 questions)"
        }
      ],
      assessments: [
        { type: "Coding Assignments", weight: "40%", description: "4 programming assignments with real datasets" },
        { type: "Weekly Quizzes", weight: "25%", description: "3 quizzes covering theoretical and practical concepts" },
        { type: "Final Project", weight: "35%", description: "End-to-end AI solution for transportation problem" }
      ],
      resources: [
        "Hands-On Machine Learning by Aurélien Géron",
        "Python for Data Analysis by Wes McKinney",
        "Transportation Analytics Toolkit",
        "Kaggle Transportation Datasets",
        "TensorFlow and PyTorch Documentation"
      ]
    },
    // Add more modules data here...
  };

  const currentModule = syllabusData[moduleId as keyof typeof syllabusData];

  if (!currentModule) {
    return <div>Module not found</div>;
  }

  return (
    <div className="space-y-8">
      {/* Course Overview */}
      <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Badge variant="secondary" className="bg-white/20 text-white">
              Module {moduleId}
            </Badge>
            <Badge variant="outline" className="border-white/50 text-white bg-white/10">
              {currentModule.difficulty}
            </Badge>
          </div>
          <CardTitle className="text-2xl">{currentModule.title}</CardTitle>
          <CardDescription className="text-blue-100 text-lg">
            {currentModule.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{currentModule.duration}</div>
              <div className="text-blue-100 text-sm">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{currentModule.totalHours}h</div>
              <div className="text-blue-100 text-sm">Total Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{currentModule.weeks.length}</div>
              <div className="text-blue-100 text-sm">Weeks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">
                {currentModule.weeks.reduce((sum, week) => sum + week.lessons.length, 0)}
              </div>
              <div className="text-blue-100 text-sm">Lessons</div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Play className="w-4 h-4 mr-2" />
              Start Course
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              <Download className="w-4 h-4 mr-2" />
              Download Syllabus
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Learning Objectives */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {currentModule.learningObjectives.map((objective, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-sm font-medium text-gray-700 mb-1">Prerequisites:</div>
            <div className="text-sm text-gray-600">{currentModule.prerequisites}</div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Breakdown */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">Course Content</h3>
        {currentModule.weeks.map((week, weekIndex) => (
          <Card key={weekIndex} className="border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Week {week.week}: {week.title}</CardTitle>
                <Badge variant="outline">
                  {week.lessons.length} lessons
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {week.lessons.map((lesson) => (
                  <div key={lesson.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{lesson.title}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {lesson.topics.join(" • ")}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <Badge variant="secondary" className="text-xs">
                        {lesson.type}
                      </Badge>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {lesson.duration}
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4 mt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="font-medium text-blue-800 mb-1">📝 Assignment</div>
                      <div className="text-sm text-blue-700">{week.assignment}</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="font-medium text-green-800 mb-1">🧠 Quiz</div>
                      <div className="text-sm text-green-700">{week.quiz}</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Assessment Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-purple-600" />
            Assessment Structure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {currentModule.assessments.map((assessment, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium">{assessment.type}</div>
                  <div className="text-sm text-gray-600">{assessment.description}</div>
                </div>
                <Badge className="bg-purple-100 text-purple-800 text-lg px-3 py-1">
                  {assessment.weight}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-600" />
            Required Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {currentModule.resources.map((resource, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <FileText className="w-4 h-4 text-gray-500" />
                <span>{resource}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseSyllabus;

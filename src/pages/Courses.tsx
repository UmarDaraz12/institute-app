import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Star, Calendar } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import PageLoader from "@/components/PageLoader";
import { useEffect, useState } from "react";
const courses = [
  {
    id: "csX3f2a7Lp",
    title: "O Level/IGCSE Computer Science (2210 / 0478)",
    level: "O Level / IGCSE",
    duration: "4 Months",
    students: "Max 30",
    schedule: "Mon, Wed & Fri",
    description:
      "Covers Paper 1 & Paper 2. For students preparing for Cambridge O Level & IGCSE Computer Science exams.",
    topics: ["Paper 1 - Theory", "Paper 2 - Problem Solving & Coding"],
    rating: 4.9,
  },
  {
    id: "a9PqL7vE1z",
    title: "AS Level Computer Science (9618)",
    level: "AS Level",
    duration: "4 Months",
    students: "Max 30",
    schedule: "Tue, Thu & Sat",
    description:
      "Covers Paper 1 & Paper 2. Focused on building strong programming and logic foundations at advanced level.",
    topics: [
      "Paper 1 - Core Theory",
      "Paper 2 - Programming & Problem Solving",
    ],
    rating: 4.8,
  },
  {
    id: "M7rQw2TzX8",
    title: "A Level Computer Science (9618)",
    level: "A Level",
    duration: "4 Months",
    students: "Max 30",
    schedule: "Mon, Wed & Fri",
    description:
      "Covers Paper 3 & Paper 4. Full preparation for A2 with depth in theory and advanced practical programming.",
    topics: ["Paper 3 - Advanced Theory", "Paper 4 - Advanced Programming"],
    rating: 5.0,
  },
  {
    id: "tL9bF3vH2k",
    title: "Fajarathon (Crash Prep Program)",
    level: "All Levels",
    duration: "1 Month",
    students: "Max 75",
    schedule: "Daily Intensive",
    description:
      "Last month crash course designed for fast-tracked revision and powerful exam strategies.",
    topics: ["Revision", "Exam Practice", "Time Management"],
    rating: 4.9,
  },
  {
    id: "E4zVn1yK5q",
    title: "Logic & Pseudocode Mastery",
    level: "Skill Course",
    duration: "6 Weeks",
    students: "Max 40",
    schedule: "Weekend Sessions",
    description:
      "Focused on problem-solving, pseudocode writing, and building exam-level logic with hands-on exercises.",
    topics: ["Problem Solving", "Pseudocode", "Logic Building"],
    rating: 5.0,
  },
  {
    id: "B2rXh9cT0p",
    title: "Python for Cambridge CS",
    level: "Skill Course",
    duration: "8 Weeks",
    students: "Max 40",
    schedule: "Tue & Thu",
    description:
      "Hands-on programming practice aligned with O Level, IGCSE, and A Level Computer Science syllabus.",
    topics: ["Python Basics", "File Handling", "Algorithm Implementation"],
    rating: 4.8,
  },
];

const Courses = () => {
  const navigate = useNavigate();
  const onEnRoll = (id: string) => {
    navigate(`/contact-us?${id}`);
  };
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [location]);

  if (!loading)
    return (
      <div className="min-h-screen">
        <Navigation />

        {/* Header */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-accent/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gradient animate-slide-up">
                Courses Offered
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in">
                Engaging courses designed to inspire learning and academic
                excellence
              </p>
            </div>
          </div>
        </section>

        {/* Course Highlights */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="p-6 text-center bg-gradient-to-br from-card to-secondary/30 border-primary/20">
                  <BookOpen className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-foreground mb-1">
                    6+
                  </h3>
                  <p className="text-muted-foreground">Active Courses</p>
                </Card>
                <Card className="p-6 text-center bg-gradient-to-br from-card to-secondary/30 border-primary/20">
                  <Users className="w-12 h-12 text-accent mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-foreground mb-1">
                    800+
                  </h3>
                  <p className="text-muted-foreground">Total Students</p>
                </Card>
                <Card className="p-6 text-center bg-gradient-to-br from-card to-secondary/30 border-primary/20">
                  <Star className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-foreground mb-1">
                    4.9
                  </h3>
                  <p className="text-muted-foreground">Average Rating</p>
                </Card>
                <Card className="p-6 text-center bg-gradient-to-br from-card to-secondary/30 border-primary/20">
                  <Clock className="w-12 h-12 text-accent mx-auto mb-3" />
                  <h3 className="text-3xl font-bold text-foreground mb-1">
                    500+
                  </h3>
                  <p className="text-muted-foreground">Teaching Hours</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 bg-card border-2 border-primary/10 group"
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-1 bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-1 rounded-full">
                            <Star className="w-4 h-4 text-primary fill-primary" />
                            <span className="text-sm font-semibold text-primary">
                              {course.rating}
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {course.description}
                        </p>
                      </div>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-secondary text-foreground text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Details */}
                      {/* <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span>{course.level}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="w-4 h-4 text-primary" />
                          <span>{course.students} students</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-xs">{course.schedule}</span>
                        </div>
                      </div>
                    </div> */}

                      {/* CTA Button */}
                      <Button
                        onClick={() => onEnRoll(course?.id)}
                        className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                      >
                        Enroll Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
};

export default Courses;

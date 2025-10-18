import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Clock,
  Users,
  Star,
  Calendar,
  Code2,
  Brain,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Courses() {
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
  ];

  const navigate = useNavigate();
  const onEnRoll = (id: string) => {
    navigate(`/contact-us?${id}`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Cambridge Computer Science Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master Computer Science from O Level to A Level — Build Logic, Learn
            Python, and Excel in Exams
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 bg-card border-2 border-primary/10 group"
            >
              <div className="space-y-6">
              <div className="space-y-6" onClick={()=>navigate(`/course/${course.id}`)}>
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
              </div>
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
    </section>
  );
}

export default Courses;

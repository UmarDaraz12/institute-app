import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useLocation } from "react-router-dom";

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

const Contact = () => {
  const location = useLocation();
  const [course, setCourse] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.keys().next().value;
    if (id) {
      const foundCourse = courses.find((c) => c.id === id);
      if (foundCourse) setCourse(foundCourse);
    }
  }, [location.search]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    if (course) form.append("course", course.title);
    form.append("access_key", "315b5c1c-d397-4b19-935e-2ba2b632cc00");
    const json = JSON.stringify(Object.fromEntries(form));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to send message.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions or want to discuss your child's education? I'd love
              to hear from you!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Let's Connect
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're a parent seeking information, a student with
                  questions, or an educator interested in collaboration, I'm
                  here to help.
                </p>
              </div>
              <div className="space-y-4">
                <Card className="p-6 hover:shadow-medium transition-all duration-300 bg-card/80 border-primary/20 group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground">teacher@email.com</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-medium transition-all duration-300 bg-card/80 border-primary/20 group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-medium transition-all duration-300 bg-card/80 border-primary/20 group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">City School District</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <Card className="p-8 shadow-strong hover:shadow-glow transition-all duration-500 bg-gradient-to-br from-card to-secondary/30 border-2 border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {course && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Selected Course
                    </label>
                    <Input value={course.title} disabled className="bg-muted" />
                  </div>
                )}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-primary/30 focus:border-primary transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-primary/30 focus:border-primary transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-primary/30 focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

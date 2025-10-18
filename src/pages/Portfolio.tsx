import Navigation from "@/components/Navigation";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, FileText, Users, Video } from "lucide-react";
import PageLoader from "@/components/PageLoader";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TeachingJourney from "@/components/TeachingJourney";

const achievements = [
  {
    icon: Award,
    title: "Teacher of the Year 2023",
    description:
      "Recognized for outstanding dedication and innovative teaching methods",
    year: "2023",
  },
  {
    icon: Users,
    title: "Student Success Rate",
    description:
      "95% of students achieved above-average performance in standardized tests",
    year: "2022-2023",
  },
  {
    icon: FileText,
    title: "Published Research",
    description: "Educational research papers on modern teaching methodologies",
    year: "2022",
  },
  {
    icon: Video,
    title: "Educational Content Creator",
    description: "Created 50+ instructional videos reaching 10K+ students",
    year: "2021-Present",
  },
];

const projects = [
  {
    title: "Interactive STEM Lab",
    description:
      "Developed hands-on science experiments that increased student engagement by 85%",
    subject: "Science",
    impact: "200+ students",
  },
  {
    title: "Reading Challenge Program",
    description:
      "Created a year-long reading initiative that improved literacy scores across all grades",
    subject: "English",
    impact: "150+ students",
  },
  {
    title: "Math Mastery Workshop",
    description:
      "Designed after-school program focusing on problem-solving and critical thinking",
    subject: "Mathematics",
    impact: "75+ students",
  },
  {
    title: "Cultural Exchange Project",
    description:
      "Organized international pen-pal program connecting students with peers worldwide",
    subject: "Social Studies",
    impact: "100+ students",
  },
];

const Portfolio = () => {
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
        <section className="pt-32 pb-6 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gradient animate-slide-up">
                My Portfolio
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in">
                A showcase of achievements, projects, and the impact made in
                education
              </p>
            </div>
          </div>
        </section>
        <TeachingJourney />
        {/* Achievements */}
        <section className="pb-10 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
                Key Achievements
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/30 border-2 border-primary/20 group cursor-pointer"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-bold text-foreground">
                            {achievement.title}
                          </h3>
                          <span className="text-sm text-primary font-semibold">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <Expertise />

        {/* Projects */}
        {/* <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
                Notable Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 bg-card border-2 border-primary/10 group cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary text-sm font-medium">
                          {project.subject}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      <div className="pt-4 flex items-center gap-2 text-sm text-primary font-semibold">
                        <Users className="w-4 h-4" />
                        <span>{project.impact}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section> */}

        <Footer />
      </div>
    );
};

export default Portfolio;

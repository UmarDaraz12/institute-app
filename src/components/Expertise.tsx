import { Brain, Code, Cpu, BookOpen, Award, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const subjects = [
  {
    icon: Brain,
    title: "Algorithm Breaking Technique",
    description:
      "Complex algorithms simplified into bite-sized, logical steps that actually make sense",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Code,
    title: "Founder of PseudoCompiler",
    description:
      "Innovative teaching methods backed by proven frameworks for mastering programming logic",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Cpu,
    title: "Python Made Powerful",
    description:
      "From basics to advanced - learn the world's most in-demand programming language with confidence",
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: BookOpen,
    title: "Programming Fundamentals Mastery",
    description:
      "Building rock-solid foundations in CS concepts that prepare you for any coding challenge",
    color: "from-blue-600 to-indigo-600",
  },
  {
    icon: Award,
    title: "91% Success Rate",
    description:
      "7 years of proven results with O & A Level students achieving top grades",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Lightbulb,
    title: "Explanation Breaking Method",
    description:
      "No more confusion - every concept broken down until it clicks, guaranteed understanding for every student",
    color: "from-blue-400 to-purple-500",
  },
];

const Expertise = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              Areas of Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive subject knowledge combined with engaging teaching
              methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-3 bg-card border-2 border-primary/10 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-8 space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${subject.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-medium`}
                  >
                    <subject.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {subject.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {subject.description}
                  </p>

                  <div className="pt-4">
                    <div className="h-1 w-0 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;

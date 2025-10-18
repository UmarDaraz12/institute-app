import { Award, Heart, Target, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import about from "@/assets/about-png.png";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "Deeply committed to fostering a love for learning in every student",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Setting high standards and supporting students to achieve their goals",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description:
      "Creating an environment where every student feels valued and supported",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Embracing modern teaching methods and educational technology",
  },
];

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming education through dedication, creativity, and
              personalized learning approaches
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative flex justify-center items-center ">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <Card className="flex justify-center items-center w-5/6 relative p-2 bg-gradient-to-br from-primary/40 to-accent rounded-b-full aspect-square backdrop-blur shadow-strong hover:shadow-glow transition-all duration-500">
                <img src={about} alt="" className="w-full rounded-b-full" />
              </Card>
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-foreground">
                Dedicated to Educational Excellence
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome! I’m Kabeer Kalhoro, an experienced Computer Science
                educator with a passion for teaching O and A-level students the
                foundations of programming, algorithms, and pseudocode. If
                you’re looking for a structured, interactive, and engaging way
                to master pseudocode and boost your programming skills, you’ve
                come to the right place!
              </p>
          
              <div className="flex gap-5 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">7+</h4>
                    <p className="text-muted-foreground">Years Experience</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">800+</h4>
                    <p className="text-muted-foreground">Students Taught</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 md:pt-10 lg:pt-20">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/50 border-primary/20 group cursor-pointer"
              >
                <value.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-xl font-bold mb-2 text-foreground">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

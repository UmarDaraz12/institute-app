import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    text: "it was really good. I scored rlly bad in my mocks and left all the pseudocode questions so i was rlly bad at it but watching his fajarathon lectures helped immensely, i got sm better in pseudocode and all credits go to him. His way of teaching is rlly nice and he's very helpful, overall amazing teacher mA!",
  },
  {
    rating: 5,
    text: "It was really good and very helpful. The classes covered almost everything in my Computer Science P2 (Paper 2), especially the coding part. The way he conducted the classes was excellent. Overall, it was a fantastic experience.",
  },
  {
    rating: 5,
    text: "WalikumSalam WarehMatullahi Wa-barakatuhu, honestly speaking, Sir Kabeer is a very humble and nice guy. I really enjoyed the Fajarathon Session with him. I was a noob at pseudocode, Sir Kabeer helped me strengthening my grip and taught me the concepts. Really Enjoyed it. Alhamdulillah",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-10 left-10 opacity-5">
        <Quote className="w-64 h-64 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 rotate-180">
        <Quote className="w-64 h-64 text-accent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">
              What People Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Feedback from students and parents who have experienced the
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-card to-secondary/50 border-2 border-primary/20 relative group cursor-pointer"
              >
                {/* Floating quote icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                <div className="space-y-6">
                  {/* Star rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground italic leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>

                  {/* <div className="pt-4 border-t border-primary/20">
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div> */}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 -z-10" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

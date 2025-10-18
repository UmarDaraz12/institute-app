import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import PageLoader from "@/components/PageLoader";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ContactPage = () => {
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
                Let's Connect
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in">
                I'm here to answer questions and discuss how we can work
                together
              </p>
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </div>
    );
};

export default ContactPage;

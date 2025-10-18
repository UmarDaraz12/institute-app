import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import PageLoader from "@/components/PageLoader";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const blogPosts = [
  {
    title: "Understanding Programming Fundamentals",
    excerpt:
      "Learn the core building blocks of programming, including variables, loops, and conditionals, with simple real-world examples.",
    date: "March 15, 2024",
    readTime: "6 min read",
    category: "Programming Fundamentals",
    image: "💻",
  },
  {
    title: "Mastering Data Structures & Algorithms",
    excerpt:
      "Explore how efficient data handling and algorithmic thinking can supercharge your coding performance and interview prep.",
    date: "March 8, 2024",
    readTime: "8 min read",
    category: "Data Structures & Algorithms",
    image: "🧠",
  },
  {
    title: "Networking Basics Every Developer Should Know",
    excerpt:
      "Understand the key concepts of computer networks — IPs, protocols, and routing — that power the internet and modern apps.",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Computer Networks",
    image: "🌐",
  },
  {
    title: "Introduction to Artificial Intelligence",
    excerpt:
      "Dive into AI fundamentals — from machine learning and neural networks to real-world applications like chatbots and vision systems.",
    date: "February 20, 2024",
    readTime: "9 min read",
    category: "Artificial Intelligence",
    image: "🤖",
  },
  {
    title: "Software Engineering Best Practices",
    excerpt:
      "Discover how professional developers design, build, and maintain reliable software through agile methods and clean code principles.",
    date: "February 12, 2024",
    readTime: "6 min read",
    category: "Software Engineering",
    image: "🧩",
  },
  {
    title: "Debugging Like a Pro",
    excerpt:
      "Learn techniques to identify and fix bugs efficiently using modern debugging tools and logical problem-solving strategies.",
    date: "February 5, 2024",
    readTime: "5 min read",
    category: "Programming Fundamentals",
    image: "🐞",
  },
  {
    title: "Optimizing Algorithms for Performance",
    excerpt:
      "Understand time and space complexity, and learn how to write faster, more efficient code for real-world applications.",
    date: "January 28, 2024",
    readTime: "8 min read",
    category: "Data Structures & Algorithms",
    image: "⚙️",
  },
  {
    title: "Version Control with Git and GitHub",
    excerpt:
      "A beginner-friendly guide to managing your codebase, collaborating with teams, and mastering essential Git commands.",
    date: "January 20, 2024",
    readTime: "6 min read",
    category: "Software Engineering",
    image: "📁",
  },
];


const categories = [
  "All",
  "Programming Fundamentals",
  "Data Structures & Algorithms",
  "Computer Networks",
  "Artificial Intelligence",
  "Software Engineering",
];


const Blog = () => {
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
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gradient animate-slide-up">
                Educational Insights
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in">
                Thoughts, strategies, and reflections on teaching and learning
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background sticky top-16 z-40 border-b border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    variant={category === "All" ? "default" : "outline"}
                    className={
                      category === "All"
                        ? "bg-gradient-to-r from-primary to-accent hover:shadow-glow whitespace-nowrap"
                        : "whitespace-nowrap border-primary/20 hover:bg-primary/10"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="overflow-hidden hover:shadow-strong transition-all duration-500 bg-gradient-to-br from-card to-secondary/30 border-2 border-primary/20 group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                  <div className="flex items-center justify-center">
                    <div className="text-9xl">{blogPosts[0].image}</div>
                  </div>
                  <div className="space-y-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                          Featured
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {blogPosts[0].date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blogPosts[0].readTime}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {blogPosts[0].title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {blogPosts[0].excerpt}
                      </p>
                    </div>
                    <Button className="self-start bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300 transform hover:scale-105 group">
                      Read Article
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-strong transition-all duration-500 hover:-translate-y-2 bg-card border-2 border-primary/10 group cursor-pointer"
                  >
                    <div className="p-8 space-y-4">
                      <div className="text-6xl mb-4">{post.image}</div>

                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-primary/10">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-primary/10 transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

export default Blog;

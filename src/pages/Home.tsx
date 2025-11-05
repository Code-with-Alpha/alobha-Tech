import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with performance in mind, delivering optimal load times and smooth interactions for the best user experience.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Industry-standard security practices ensure your data is protected with enterprise-grade encryption and compliance.",
    },
    {
      icon: Sparkles,
      title: "Modern Design",
      description: "Clean, accessible interfaces built with the latest design principles and responsive layouts that work everywhere.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Build Something Amazing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A modern, responsive landing UI built with React, featuring best practices in accessibility, performance, and design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with thoughtful design to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of satisfied users and experience the difference today
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

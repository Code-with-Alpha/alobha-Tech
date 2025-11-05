import { motion } from "framer-motion";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Building the future of web experiences
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={aboutImage}
                alt="Modern workspace showcasing collaboration and innovation"
                className="rounded-lg shadow-soft w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're dedicated to crafting exceptional digital experiences that combine beautiful design with powerful functionality. Our approach focuses on user-centered design, accessibility, and performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in modern web development, we leverage the latest technologies and best practices to deliver solutions that not only meet but exceed expectations.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 text-center"
          >
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">100+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">50+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-primary">5+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 bg-muted/50 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  We never compromise on quality, ensuring every project meets the highest standards of excellence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Staying ahead of the curve with cutting-edge technologies and modern development practices.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Collaboration</h3>
                <p className="text-muted-foreground">
                  Working closely with clients to understand their needs and deliver tailored solutions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  Building inclusive experiences that work for everyone, regardless of their abilities.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

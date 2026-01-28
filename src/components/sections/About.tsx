import { motion } from "framer-motion";
import { CheckCircle2, Users, Award, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of specialists brings diverse expertise across all digital channels.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "We've helped 50+ brands achieve measurable growth and success.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround times without compromising on quality.",
  },
  {
    icon: Target,
    title: "Data-Driven",
    description: "Every decision is backed by analytics and real performance data.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              We're More Than an Agency—
              <span className="gradient-text">We're Your Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2019, Digita has grown from a small startup to a
              full-service digital marketing agency. We believe in the power of
              creative thinking combined with data-driven strategies.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is simple: help businesses of all sizes harness the
              full potential of digital marketing to achieve sustainable growth
              and build lasting customer relationships.
            </p>

            {/* Checkmarks */}
            <div className="space-y-4">
              {[
                "Transparent communication & reporting",
                "Dedicated account managers",
                "Flexible engagement models",
                "24/7 support for critical campaigns",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Globe,
  Smartphone,
  Palette,
  Target,
  Share2,
  Film,
  Image,
  Video,
  ArrowRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites that drive conversions",
    details:
      "We build fast, responsive, and SEO-optimized websites that not only look stunning but also convert visitors into customers. Using the latest technologies like React, Next.js, and modern CMS platforms.",
    benefits: [
      "Lightning-fast performance",
      "Mobile-first responsive design",
      "SEO optimization included",
      "Custom CMS integration",
    ],
    process: ["Discovery", "Design", "Development", "Testing", "Launch"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "iOS & Android apps that users love",
    details:
      "From concept to launch, we create mobile applications that deliver exceptional user experiences. Our apps are built to scale and perform flawlessly across all devices.",
    benefits: [
      "Cross-platform development",
      "Native performance",
      "App store optimization",
      "Ongoing maintenance & support",
    ],
    process: ["Strategy", "Wireframing", "Development", "QA Testing", "Deployment"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that converts",
    details:
      "We craft intuitive, beautiful interfaces that put users first. Our design process ensures every interaction is meaningful and drives business results.",
    benefits: [
      "User research & testing",
      "Wireframes & prototypes",
      "Design systems",
      "Accessibility compliance",
    ],
    process: ["Research", "Ideation", "Prototyping", "User Testing", "Iteration"],
  },
  {
    icon: Target,
    title: "Meta Ads",
    description: "Facebook & Instagram advertising mastery",
    details:
      "Maximize your ROI with data-driven Meta advertising campaigns. We target the right audiences with compelling creatives that convert.",
    benefits: [
      "Advanced audience targeting",
      "A/B tested creatives",
      "Conversion tracking",
      "Monthly performance reports",
    ],
    process: ["Audit", "Strategy", "Creative", "Launch", "Optimize"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build your brand's online presence",
    details:
      "Grow your following and engagement with strategic social media management. We create content that resonates with your audience and builds community.",
    benefits: [
      "Content strategy & calendar",
      "Community management",
      "Influencer partnerships",
      "Analytics & insights",
    ],
    process: ["Audit", "Strategy", "Content Creation", "Publishing", "Analysis"],
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional video production",
    details:
      "Transform raw footage into compelling stories. Our video editing services include color grading, motion graphics, and sound design.",
    benefits: [
      "Professional editing",
      "Motion graphics",
      "Color grading",
      "Sound design",
    ],
    process: ["Review", "Storyboard", "Edit", "Review", "Delivery"],
  },
  {
    icon: Image,
    title: "Social Media Design",
    description: "Scroll-stopping visual content",
    details:
      "Stand out in the feed with eye-catching graphics. From posts to stories, we create cohesive visual content that elevates your brand.",
    benefits: [
      "Brand-consistent designs",
      "Post & story templates",
      "Carousel designs",
      "Animated content",
    ],
    process: ["Brief", "Concept", "Design", "Revisions", "Delivery"],
  },
  {
    icon: Video,
    title: "UGC Ads Creation",
    description: "Authentic user-generated content",
    details:
      "Create authentic-looking ads that feel native to social platforms. UGC-style content builds trust and drives higher engagement rates.",
    benefits: [
      "Authentic content style",
      "Higher engagement rates",
      "Platform-native feel",
      "Creator network access",
    ],
    process: ["Brief", "Casting", "Production", "Editing", "Delivery"],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(
    null
  );

  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Scale Digitally</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategy to execution, we provide comprehensive digital
            solutions that help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="group bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-border hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-card rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                  <selectedService.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {selectedService.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedService.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-foreground mb-8">{selectedService.details}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-display font-bold text-foreground mb-4">
                  Benefits
                </h4>
                <ul className="space-y-3">
                  {selectedService.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-4">
                  Our Process
                </h4>
                <div className="space-y-3">
                  {selectedService.process.map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button variant="hero" className="w-full">
              Get Started with {selectedService.title}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Services;

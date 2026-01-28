import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Palette,
  Target,
  Share2,
  Film,
  Image,
  Video,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites that convert",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "iOS & Android applications",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions",
  },
  {
    icon: Target,
    title: "Meta Ads",
    description: "Facebook & Instagram advertising",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Grow your online presence",
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional video production",
  },
  {
    icon: Image,
    title: "Social Media Design",
    description: "Engaging visual content",
  },
  {
    icon: Video,
    title: "UGC Ads Creation",
    description: "Authentic user-generated content",
  },
];

const ServicesDropdown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px]"
    >
      <div className="bg-card rounded-2xl shadow-2xl border border-border p-6">
        <div className="grid grid-cols-2 gap-3">
          {services.map((service) => (
            <a
              key={service.title}
              href="#services"
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                <service.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesDropdown;

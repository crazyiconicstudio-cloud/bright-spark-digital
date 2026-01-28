import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Fitness App",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
  },
  {
    title: "Brand Identity",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
  },
  {
    title: "Social Campaign",
    category: "Meta Ads",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    title: "Content Strategy",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d6?w=800&q=80",
  },
  {
    title: "Product Video",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 lg:py-32">
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
            Our Portfolio
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our latest projects and see how we've helped brands achieve
            their digital goals.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-primary-foreground/80 text-sm font-medium mb-2">
                  {project.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-display font-bold text-primary-foreground">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors link-underline"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;

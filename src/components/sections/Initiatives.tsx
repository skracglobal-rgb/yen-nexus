import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const initiatives = [
  {
    title: "YEN Conclaves",
    description: "Large-scale gatherings bringing together entrepreneurs, investors, and industry leaders.",
  },
  {
    title: "YEN Club",
    description: "Exclusive membership benefits and access to premium networking events.",
  },
  {
    title: "Business Tours",
    description: "Curated tours to successful businesses and startup ecosystems.",
  },
  {
    title: "Social Commitment",
    description: "Programs dedicated to social awareness and community development.",
  },
  {
    title: "YEN Chai Meetups",
    description: "Informal networking sessions over chai, fostering genuine connections.",
  },
  {
    title: "Panel Discussions",
    description: "Monthly online discussions on trending topics with industry experts.",
  },
  {
    title: "Webinars",
    description: "Bi-monthly educational sessions covering diverse entrepreneurial topics.",
  },
  {
    title: "YEN Pods",
    description: "YouTube channel featuring inspiring entrepreneur stories and insights.",
  },
  {
    title: "YEN News",
    description: "Stay updated with the latest in the entrepreneurial world.",
  },
  {
    title: "YEN Awards",
    description: "Recognizing and celebrating outstanding entrepreneurial achievements.",
  },
  {
    title: "Blog & Articles",
    description: "Thought leadership content and success stories from our community.",
  },
];

const Initiatives = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="yen-section bg-yen-graphite overflow-hidden" ref={ref}>
      <div className="yen-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="yen-label mb-4">YEN Initiatives</p>
          <h2 className="yen-heading-lg text-foreground">
            Programs That{" "}
            <span className="yen-gradient-text">Drive Impact</span>
          </h2>
        </motion.div>

        {/* Horizontal scrolling cards on mobile, grid on desktop */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group"
              >
                <div
                  className={`yen-card p-6 h-full transition-all duration-300 ${
                    hoveredIndex === index ? "border-primary/50 scale-[1.02]" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform duration-300" />
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {initiative.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;

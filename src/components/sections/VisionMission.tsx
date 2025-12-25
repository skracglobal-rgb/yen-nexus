import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      label: "Our Vision",
      title: "A Vibrant Entrepreneurial Ecosystem",
      content:
        "YEN envisions a thriving entrepreneurial ecosystem in Kerala, empowering young innovators to drive economic growth and social progress. By fostering collaboration, innovation, and community, we aim to nurture the next generation of leaders who will create impactful businesses and inspire meaningful change.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
          <circle cx="24" cy="24" r="20" stroke="hsl(var(--yen-cyan))" strokeWidth="1.5" />
          <path
            d="M24 12V24L32 28"
            stroke="hsl(var(--yen-cyan))"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="3" fill="hsl(var(--yen-cyan))" />
        </svg>
      ),
    },
    {
      label: "Our Mission",
      title: "Connect, Learn, and Grow",
      content:
        "YEN is dedicated to creating a dynamic platform for young entrepreneurs to connect, learn, and grow. By offering mentorship, resources, and funding opportunities, we promote innovation, collaboration, and social responsibility—equipping aspiring entrepreneurs with the tools and network needed to overcome challenges and achieve success.",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
          <path
            d="M12 36L24 12L36 36"
            stroke="hsl(var(--yen-cyan))"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 28H32"
            stroke="hsl(var(--yen-cyan))"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="24" cy="12" r="3" fill="hsl(var(--yen-cyan))" />
          <circle cx="12" cy="36" r="3" fill="hsl(var(--yen-cyan))" />
          <circle cx="36" cy="36" r="3" fill="hsl(var(--yen-cyan))" />
        </svg>
      ),
    },
  ];

  return (
    <section className="yen-section bg-yen-graphite" ref={ref}>
      <div className="yen-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="yen-label mb-4">Purpose & Direction</p>
          <h2 className="yen-heading-lg text-foreground">
            Driven by <span className="yen-gradient-text">Vision</span>, Guided by{" "}
            <span className="yen-gradient-text">Mission</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="yen-card p-8 lg:p-12 group transition-all duration-500"
            >
              <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {card.icon}
              </div>
              <p className="yen-label mb-3">{card.label}</p>
              <h3 className="yen-heading-md text-foreground mb-6">{card.title}</h3>
              <p className="yen-body">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    members: "100",
    description:
      "Carefully selected members representing established startups and businesses, forming the core foundation of our network.",
  },
  {
    phase: "Phase 2",
    title: "Expansion",
    members: "1,000",
    description:
      "Invited by Phase 1 members, expanding the community's reach and influence across Kerala's entrepreneurial landscape.",
  },
  {
    phase: "Budding Entrepreneurs",
    title: "Future Leaders",
    members: "∞",
    description:
      "A dedicated program for students interested in entrepreneurship, providing guidance and resources to nurture their aspirations.",
  },
];

const GrowthPhases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="yen-section" ref={ref}>
      <div className="yen-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="yen-label mb-4">Community Growth</p>
          <h2 className="yen-heading-lg text-foreground">
            Building a Movement,{" "}
            <span className="yen-gradient-text">Phase by Phase</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left"
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                  className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-yen-graphite border-2 border-primary items-center justify-center"
                >
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </motion.div>

                <div className="yen-card p-8 text-center lg:mt-8 group hover:border-primary/50 transition-all duration-500">
                  <p className="yen-label mb-4">{phase.phase}</p>
                  
                  {/* Big number */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    className="mb-4"
                  >
                    <span className="text-6xl lg:text-7xl font-heading font-bold yen-gradient-text">
                      {phase.members}
                    </span>
                    {phase.members !== "∞" && (
                      <span className="text-xl text-muted-foreground ml-2">members</span>
                    )}
                  </motion.div>

                  <h3 className="yen-heading-md text-foreground mb-4">{phase.title}</h3>
                  <p className="yen-body">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthPhases;

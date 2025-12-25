import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const JoinUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="join" className="yen-section" ref={ref}>
      <div className="yen-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mentors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="yen-card p-10 lg:p-12 text-center group"
          >
            <div className="mb-8">
              <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mx-auto">
                {/* Abstract mentor figure */}
                <circle cx="40" cy="24" r="12" stroke="hsl(var(--yen-cyan))" strokeWidth="2" />
                <path d="M20 72V60C20 52 28 44 40 44C52 44 60 52 60 60V72" stroke="hsl(var(--yen-cyan))" strokeWidth="2" strokeLinecap="round" />
                {/* Crown/star element */}
                <path d="M30 8L32 14L40 12L48 14L50 8" stroke="hsl(var(--yen-cyan))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="yen-label mb-4">For Mentors</p>
            <h3 className="yen-heading-md text-foreground mb-6">
              Share Your <span className="yen-gradient-text">Expertise</span>
            </h3>
            <p className="yen-body mb-8">
              We invite experienced entrepreneurs, business leaders, and government officials 
              to join our mentor panel and share their expertise with the next generation 
              of Kerala's innovators.
            </p>
            <a href="#contact" className="yen-button-primary inline-block">
              Apply as Mentor
            </a>
          </motion.div>

          {/* Members */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="yen-card p-10 lg:p-12 text-center group"
          >
            <div className="mb-8">
              <svg viewBox="0 0 80 80" fill="none" className="w-20 h-20 mx-auto">
                {/* Group of people */}
                <circle cx="28" cy="28" r="10" stroke="hsl(var(--yen-cyan))" strokeWidth="2" />
                <circle cx="52" cy="28" r="10" stroke="hsl(var(--yen-cyan))" strokeWidth="2" />
                <circle cx="40" cy="48" r="10" stroke="hsl(var(--yen-cyan))" strokeWidth="2" />
                {/* Connection lines */}
                <path d="M28 38V50M52 38V50M32 52H48" stroke="hsl(var(--yen-cyan))" strokeWidth="1" strokeOpacity="0.5" />
                {/* Rising arrow */}
                <path d="M60 72L60 58M60 58L52 66M60 58L68 66" stroke="hsl(var(--yen-cyan))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="yen-label mb-4">For Members</p>
            <h3 className="yen-heading-md text-foreground mb-6">
              Join the <span className="yen-gradient-text">Community</span>
            </h3>
            <p className="yen-body mb-8">
              We urge selected entrepreneurs to actively participate in building this 
              community and contribute to its success. Together, we can create a thriving 
              ecosystem for innovation.
            </p>
            <a href="#contact" className="yen-button-secondary inline-block">
              Apply as Member
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;

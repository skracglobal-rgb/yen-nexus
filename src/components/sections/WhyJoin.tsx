import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  "Access to a network of like-minded peers and mentors",
  "Opportunities for learning, growth, and collaboration",
  "Support in navigating the challenges of entrepreneurship",
  "Access to funding and valuable resources",
  "Increased visibility and recognition for your ventures",
];

const WhyJoin = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="yen-section" ref={ref}>
      <div className="yen-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <svg viewBox="0 0 400 400" fill="none" className="w-full h-auto">
              {/* Growth graph */}
              <motion.path
                d="M60 340 L100 300 L160 320 L220 240 L280 260 L340 160"
                stroke="hsl(var(--yen-cyan))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              
              {/* Data points */}
              {[
                { cx: 60, cy: 340 },
                { cx: 100, cy: 300 },
                { cx: 160, cy: 320 },
                { cx: 220, cy: 240 },
                { cx: 280, cy: 260 },
                { cx: 340, cy: 160 },
              ].map((point, i) => (
                <motion.circle
                  key={i}
                  cx={point.cx}
                  cy={point.cy}
                  r="6"
                  fill="hsl(var(--yen-graphite))"
                  stroke="hsl(var(--yen-cyan))"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                />
              ))}
              
              {/* Upward arrow */}
              <motion.path
                d="M340 160 L340 100 M340 100 L320 120 M340 100 L360 120"
                stroke="hsl(var(--yen-cyan))"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.8 }}
              />
              
              {/* Grid lines */}
              {[100, 160, 220, 280, 340].map((x, i) => (
                <motion.line
                  key={i}
                  x1={x}
                  y1="360"
                  x2={x}
                  y2="80"
                  stroke="hsl(var(--yen-slate))"
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                />
              ))}
              
              {/* Success text */}
              <motion.text
                x="340"
                y="80"
                fill="hsl(var(--yen-cyan))"
                fontSize="14"
                fontFamily="Syne"
                fontWeight="600"
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 2 }}
              >
                SUCCESS
              </motion.text>
            </svg>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="yen-label mb-4">Why Join YEN</p>
            <h2 className="yen-heading-lg text-foreground mb-8">
              Your Gateway to{" "}
              <span className="yen-gradient-text">Entrepreneurial Success</span>
            </h2>
            <p className="yen-body-lg mb-10">
              Join a community that understands your journey and is committed to 
              helping you achieve your entrepreneurial dreams.
            </p>

            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-primary" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-lg text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;

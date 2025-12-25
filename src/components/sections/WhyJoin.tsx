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
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="yen-label mb-4">Why Join YEN</p>
            <h2 className="yen-heading-lg text-foreground mb-8">
              Your Gateway to{" "}
              <span className="yen-gradient-text">Entrepreneurial Success</span>
            </h2>
            <p className="yen-body-lg mb-12">
              Join a community that understands your journey and is committed to 
              helping you achieve your entrepreneurial dreams.
            </p>

            <ul className="space-y-6 text-left max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import YENLogo from "../icons/YENLogo";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="yen-section relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--yen-cyan) / 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--yen-cyan) / 0.08) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="yen-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-10"
          >
            <YENLogo size={100} />
          </motion.div>

          <p className="yen-label mb-6">Ready to Begin?</p>
          <h2 className="yen-heading-xl text-foreground mb-8">
            Your Journey Starts{" "}
            <span className="yen-gradient-text">Here</span>
          </h2>
          <p className="yen-body-lg max-w-2xl mx-auto mb-12">
            Whether you're an aspiring entrepreneur, an established business owner, 
            or a seasoned mentor—there's a place for you in YEN. Join us in building 
            Kerala's most vibrant entrepreneurial community.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://yenkerala.org" target="_blank" rel="noopener noreferrer" className="yen-button-primary">
              Join the Network
            </a>
            <a href="mailto:info@yenkerala.org" className="yen-button-secondary">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

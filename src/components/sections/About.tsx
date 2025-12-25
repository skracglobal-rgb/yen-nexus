import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutIllustration = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Abstract people connections */}
    <motion.circle
      cx="200"
      cy="200"
      r="120"
      stroke="hsl(var(--yen-cyan))"
      strokeWidth="1"
      strokeOpacity="0.2"
      strokeDasharray="8 8"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />
    <motion.circle
      cx="200"
      cy="200"
      r="80"
      stroke="hsl(var(--yen-cyan))"
      strokeWidth="1"
      strokeOpacity="0.3"
      initial={{ rotate: 0 }}
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    
    {/* Person silhouettes as abstract shapes */}
    {[
      { cx: 200, cy: 80, delay: 0 },
      { cx: 320, cy: 200, delay: 0.2 },
      { cx: 200, cy: 320, delay: 0.4 },
      { cx: 80, cy: 200, delay: 0.6 },
      { cx: 270, cy: 120, delay: 0.3 },
      { cx: 130, cy: 280, delay: 0.5 },
    ].map((node, i) => (
      <motion.g key={i}>
        {/* Head */}
        <motion.circle
          cx={node.cx}
          cy={node.cy - 15}
          r="12"
          fill="hsl(var(--yen-slate))"
          stroke="hsl(var(--yen-cyan))"
          strokeWidth="1.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: node.delay + 0.5 }}
        />
        {/* Body */}
        <motion.ellipse
          cx={node.cx}
          cy={node.cy + 15}
          rx="10"
          ry="14"
          fill="hsl(var(--yen-slate))"
          stroke="hsl(var(--yen-cyan))"
          strokeWidth="1.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: node.delay + 0.6 }}
        />
      </motion.g>
    ))}
    
    {/* Connection lines */}
    <motion.path
      d="M200 80 L320 200 L200 320 L80 200 Z"
      stroke="hsl(var(--yen-cyan))"
      strokeWidth="1"
      strokeOpacity="0.4"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 1 }}
    />
    
    {/* Center node */}
    <motion.circle
      cx="200"
      cy="200"
      r="20"
      fill="hsl(var(--yen-cyan))"
      fillOpacity="0.2"
      stroke="hsl(var(--yen-cyan))"
      strokeWidth="2"
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="yen-section" ref={ref}>
      <div className="yen-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="yen-label mb-4">Who We Are</p>
            <h2 className="yen-heading-lg text-foreground mb-8">
              Building Kerala's Future,{" "}
              <span className="yen-gradient-text">One Entrepreneur at a Time</span>
            </h2>
            <div className="space-y-6">
              <p className="yen-body-lg">
                The Young Entrepreneurs Network (YEN) is a premier community based in Kerala, 
                dedicated to nurturing young entrepreneurs between the ages of 15 and 30.
              </p>
              <p className="yen-body">
                We provide unparalleled opportunities for mentorship, networking, and learning 
                to inspire innovation and drive economic and social progress across the region. 
                By fostering collaboration among like-minded visionaries and promoting a culture 
                of creativity and leadership, YEN is shaping the next generation of successful 
                entrepreneurs.
              </p>
              <p className="yen-body">
                Our mission is to empower ambitious individuals to achieve their dreams and 
                create lasting impact in their communities and beyond.
              </p>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <AboutIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

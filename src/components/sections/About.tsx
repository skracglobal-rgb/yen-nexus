import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="yen-section" ref={ref}>
      <div className="yen-container">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="yen-label mb-4">Who We Are</p>
            <h2 className="yen-heading-lg text-foreground mb-8">
              Building Kerala's Future,{" "}
              <span className="yen-gradient-text">One Entrepreneur at a Time</span>
            </h2>
            <div className="space-y-6 text-left md:text-center">
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
        </div>
      </div>
    </section>
  );
};

export default About;

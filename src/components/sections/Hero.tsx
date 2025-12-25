import { motion } from "framer-motion";
import NetworkSVG from "../icons/NetworkSVG";
import YENLogo from "../icons/YENLogo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-yen-graphite" />
      
      {/* Animated network background */}
      <div className="absolute inset-0 opacity-30">
        <NetworkSVG className="w-full h-full" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />

      {/* Content */}
      <div className="yen-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <YENLogo size={80} />
          </motion.div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="yen-label mb-6"
          >
            Young Entrepreneurs Network
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="yen-heading-xl text-foreground mb-8"
          >
            Empowering the Next Generation of{" "}
            <span className="yen-gradient-text">Entrepreneurs</span> in Kerala
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="yen-body-lg max-w-3xl mx-auto mb-12"
          >
            A vibrant community dedicated to young entrepreneurs aged 15 to 30, providing 
            a platform for learning, collaboration, and empowerment to drive economic 
            and social progress.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#join" className="yen-button-primary">
              Join the Network
            </a>
            <a href="#about" className="yen-button-secondary">
              Explore YEN
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

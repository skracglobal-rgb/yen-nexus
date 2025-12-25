import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const offerings = [
  {
    title: "Mentorship",
    description:
      "A distinguished panel of experienced entrepreneurs, business leaders, government officials, and investors providing guidance and support.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 44V38C12 34 16 30 24 30C32 30 36 34 36 38V44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M36 18L42 24L36 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Learning & Development",
    description:
      "Workshops, seminars, and training programs on various aspects of entrepreneurship, business management, and leadership.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 20H32M16 26H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="36" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Networking Opportunities",
    description:
      "Regular events and gatherings to facilitate meaningful connections and collaborations among members.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="36" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="36" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="36" cy="36" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 14L22 22M26 22L34 14M22 26L14 34M26 26L34 34" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Funding Facilitation",
    description:
      "Assistance with accessing venture capital, angel investors, incubation programs, and government support schemes.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 16V32M20 20C20 18 22 16 24 16C26 16 28 18 28 20C28 22 26 24 24 24C22 24 20 26 20 28C20 30 22 32 24 32C26 32 28 30 28 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Community Events",
    description:
      "Social gatherings, workshops, and conferences to foster camaraderie and knowledge sharing among members.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="16" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 24H40" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 8V16M32 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="14" y="30" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="28" y="30" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Charity & Social Impact",
    description:
      "Initiatives to give back to the community and support social causes, creating positive change beyond business.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 40L12 28C8 24 8 18 12 14C16 10 22 10 24 16C26 10 32 10 36 14C40 18 40 24 36 28L24 40Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const Offerings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="yen-section bg-yen-graphite" ref={ref}>
      <div className="yen-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="yen-label mb-4">What We Offer</p>
          <h2 className="yen-heading-lg text-foreground">
            Everything You Need to{" "}
            <span className="yen-gradient-text">Succeed</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="yen-card p-8 group cursor-default"
            >
              <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-6">
                {offering.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {offering.title}
              </h3>
              <p className="yen-body">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;

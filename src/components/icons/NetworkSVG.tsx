import { motion } from "framer-motion";

interface NetworkSVGProps {
  className?: string;
}

const NetworkSVG = ({ className }: NetworkSVGProps) => {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Animated connection lines */}
      <motion.path
        d="M100 300 Q 200 200 300 250 T 500 200 T 700 300"
        stroke="hsl(var(--yen-cyan))"
        strokeWidth="1"
        strokeOpacity="0.3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M50 400 Q 150 350 250 380 T 450 350 T 650 400 T 750 350"
        stroke="hsl(var(--yen-cyan))"
        strokeWidth="1"
        strokeOpacity="0.2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
      />
      <motion.path
        d="M150 150 Q 250 100 350 150 T 550 100 T 700 150"
        stroke="hsl(var(--yen-cyan))"
        strokeWidth="1"
        strokeOpacity="0.2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Network nodes */}
      {[
        { cx: 100, cy: 300, r: 6, delay: 0 },
        { cx: 200, cy: 220, r: 4, delay: 0.1 },
        { cx: 300, cy: 250, r: 8, delay: 0.2 },
        { cx: 400, cy: 180, r: 5, delay: 0.3 },
        { cx: 500, cy: 200, r: 7, delay: 0.4 },
        { cx: 600, cy: 280, r: 4, delay: 0.5 },
        { cx: 700, cy: 300, r: 6, delay: 0.6 },
        { cx: 150, cy: 400, r: 5, delay: 0.2 },
        { cx: 250, cy: 380, r: 6, delay: 0.3 },
        { cx: 450, cy: 350, r: 8, delay: 0.4 },
        { cx: 650, cy: 400, r: 5, delay: 0.5 },
        { cx: 200, cy: 150, r: 4, delay: 0.3 },
        { cx: 350, cy: 130, r: 6, delay: 0.4 },
        { cx: 550, cy: 100, r: 5, delay: 0.5 },
      ].map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill="hsl(var(--yen-cyan))"
          fillOpacity="0.6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: node.delay + 1 }}
        />
      ))}

      {/* Glowing center node */}
      <motion.circle
        cx="400"
        cy="300"
        r="12"
        fill="hsl(var(--yen-cyan))"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="400"
        cy="300"
        r="24"
        fill="none"
        stroke="hsl(var(--yen-cyan))"
        strokeWidth="1"
        strokeOpacity="0.3"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />

      {/* Connecting lines to center */}
      {[
        { x1: 300, y1: 250, x2: 400, y2: 300 },
        { x1: 500, y1: 200, x2: 400, y2: 300 },
        { x1: 450, y1: 350, x2: 400, y2: 300 },
        { x1: 350, y1: 130, x2: 400, y2: 300 },
      ].map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="hsl(var(--yen-cyan))"
          strokeWidth="1"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.5 + i * 0.2 }}
        />
      ))}
    </svg>
  );
};

export default NetworkSVG;

// YEN Logo Component
// To replace this logo with your own:
// 1. Replace this file content with your SVG logo, OR
// 2. Import an image: import logo from "@/assets/yen-logo.svg" and use <img src={logo} />

interface YENLogoProps {
  className?: string;
  size?: number;
}

const YENLogo = ({ className, size = 48 }: YENLogoProps) => {
  // REPLACE THIS SVG WITH YOUR OWN LOGO
  // You can paste your SVG code here or use an image import
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Abstract Y shape with network nodes */}
      <path
        d="M20 12L32 28L44 12"
        stroke="hsl(var(--yen-cyan))"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 28V52"
        stroke="hsl(var(--yen-cyan))"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Network nodes */}
      <circle cx="20" cy="12" r="4" fill="hsl(var(--yen-cyan))" />
      <circle cx="44" cy="12" r="4" fill="hsl(var(--yen-cyan))" />
      <circle cx="32" cy="28" r="5" fill="hsl(var(--yen-cyan))" />
      <circle cx="32" cy="52" r="4" fill="hsl(var(--yen-cyan))" />
      {/* Outer ring */}
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke="hsl(var(--yen-cyan))"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
    </svg>
  );
};

export default YENLogo;

/*
 * HOW TO USE YOUR OWN LOGO:
 * 
 * Option 1: Replace SVG directly
 * - Edit the SVG code above with your own logo SVG
 * 
 * Option 2: Use an image file
 * - Upload your logo to src/assets/yen-logo.svg (or .png)
 * - Replace this component with:
 * 
 * import logo from "@/assets/yen-logo.svg";
 * 
 * const YENLogo = ({ className, size = 48 }: YENLogoProps) => {
 *   return (
 *     <img 
 *       src={logo} 
 *       alt="YEN Kerala Logo" 
 *       width={size} 
 *       height={size} 
 *       className={className}
 *     />
 *   );
 * };
 */

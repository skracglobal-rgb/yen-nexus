interface YENLogoProps {
  className?: string;
  size?: number;
}

const YENLogo = ({ className, size = 48 }: YENLogoProps) => {
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

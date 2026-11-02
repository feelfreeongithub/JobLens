interface LogoProps {
  size?: number;
}

// JobLens logo: a magnifying lens with a checkmark ("check your match")
export default function Logo({ size = 28 }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#4F46E5" />
      <circle
        cx="14"
        cy="14"
        r="7.5"
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
      />
      <path
        d="M19.6 19.6 L25 25"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M10.6 14.2 L13 16.6 L17.6 11.8"
        fill="none"
        stroke="#A5F3FC"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

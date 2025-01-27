export default function Spinner({
  size = "h-5 w-5",
  speed = "motion-safe:animate-spin",
  strokeWidth = 4,
  color = "text-current",
  className = "",
  style = {},
}: {
  size?: string;
  speed?: string;
  strokeWidth?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={`${speed} ${size} ${color} ${className} motion-reduce:hidden`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="status"
      aria-label="Laden..."
      style={style}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v3.6a4.4 4.4 0 100 8.8V20a8 8 0 01-8-8z"
      />
    </svg>
  );
}

import { Link } from "react-router-dom";
export default function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Prep Pilot home">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M6 25V7h9c7 0 11 4 11 9s-4 9-11 9H6Z"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="m11 20 10-9M11 11h10v9"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
      <span>
        prep pilot<span className="brand-period">.</span>
      </span>
    </Link>
  );
}

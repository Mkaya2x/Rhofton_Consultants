import { Link } from "react-router-dom";

const styles = {
  primary:
    "inline-flex items-center justify-center rounded-full bg-evergreen-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-evergreen-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evergreen-700 active:scale-[0.98]",
  ghost:
    "inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-6 py-3 text-sm font-semibold text-evergreen-700 transition hover:border-evergreen-600 hover:text-evergreen-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evergreen-700 active:scale-[0.98]",
  light:
    "inline-flex items-center justify-center rounded-full bg-emerald-50 px-6 py-3 text-sm font-semibold text-evergreen-700 transition hover:bg-emerald-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-evergreen-700 active:scale-[0.98]"
};

export default function Button({ to, href, variant = "primary", className = "", children }) {
  const classes = `${styles[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={classes} aria-label={typeof children === "string" ? children : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes} aria-label={typeof children === "string" ? children : undefined}>
      {children}
    </Link>
  );
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="pill">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-3xl font-semibold text-evergreen-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base text-slate-600">{subtitle}</p>}
    </div>
  );
}

import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, outcomes, link }) {
  return (
    <div className="card-surface flex h-full flex-col gap-4 p-6">
      <h3 className="font-heading text-xl font-semibold text-evergreen-800">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>
      <ul className="mt-auto space-y-2 text-sm text-slate-600">
        {outcomes.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {link && (
        <Link to={link} className="pt-2 text-sm font-semibold text-evergreen-700 hover:text-evergreen-800">
          Learn more →
        </Link>
      )}
    </div>
  );
}

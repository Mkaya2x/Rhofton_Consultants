import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Contact", to: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/img/yyyy-removebg-preview-removebg-preview.png"
            alt="Rhofton Consultants logo"
            className="h-10 w-10 rounded-full border border-emerald-100 bg-white object-contain p-1"
          />
          <div>
            <p className="font-heading text-lg font-semibold text-evergreen-800">Rhofton</p>
            <p className="-mt-1 text-xs uppercase tracking-[0.2em] text-emerald-700">Consultants</p>
          </div>
        </NavLink>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive ? "text-evergreen-700" : "text-slate-700 hover:text-evergreen-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-full bg-evergreen-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-evergreen-700"
          >
            Get a Quote
          </NavLink>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 text-evergreen-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>
      {open && (
        <div className="border-t border-emerald-100 bg-white px-5 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-semibold ${
                    isActive ? "text-evergreen-700" : "text-slate-700 hover:text-evergreen-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-evergreen-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-evergreen-700"
            >
              Get a Quote
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

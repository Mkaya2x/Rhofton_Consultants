import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-white">
      <div className="section-pad mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/img/yyyy-removebg-preview-removebg-preview.png"
                alt="Rhofton Consultants logo"
                className="h-12 w-12 rounded-full border border-emerald-100 bg-white object-contain p-1"
              />
              <div>
                <p className="font-heading text-lg font-semibold text-evergreen-800">Rhofton Consultants</p>
                <p className="-mt-1 text-xs uppercase tracking-[0.2em] text-emerald-700">Healthcare Advisory</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-600">
              Strategic partners for hospitals, clinics, and health innovators seeking sustainable growth, compliance,
              and digital transformation.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-evergreen-700">Explore</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-600">
              <NavLink to="/about" className="hover:text-evergreen-700">
                About Us
              </NavLink>
              <NavLink to="/services" className="hover:text-evergreen-700">
                Services
              </NavLink>
              <NavLink to="/case-studies" className="hover:text-evergreen-700">
                Case Studies
              </NavLink>
              <NavLink to="/contact" className="hover:text-evergreen-700">
                Contact
              </NavLink>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-evergreen-700">Contact</p>
            <div className="mt-4 text-sm text-slate-600">
              <p>Nairobi, Kenya</p>
              <p className="mt-2">
                <a href="mailto:mkayatone@gmail.com" className="font-semibold text-evergreen-700">
                  mkayatone@gmail.com
                </a>
              </p>
              <p className="mt-2">
                <a href="tel:+254722617608" className="font-semibold text-evergreen-700">
                  +254 722 617 608
                </a>
              </p>
              <p>
                <a href="tel:+254784935271" className="font-semibold text-evergreen-700">
                  +254 784 935 271
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-emerald-100 pt-6 text-xs text-slate-500">
          © 2026 Rhofton Consultants. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

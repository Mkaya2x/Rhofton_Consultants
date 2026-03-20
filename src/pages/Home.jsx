import Button from "../components/Button.jsx";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/services.js";

export default function Home() {
  return (
    <div>
      <Seo
        title="Rhofton Consultants | Healthcare Strategy & Operations"
        description="Healthcare strategy, hospital management, quality compliance, and health IT solutions for hospitals and clinics."
        path="/"
      />
      <section className="section-pad bg-hero-grid">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-rise">
            <p className="pill">Healthcare Advisory</p>
            <h1 className="mt-4 font-heading text-4xl font-semibold text-evergreen-900 sm:text-5xl">
              Elevating healthcare organizations with strategy, compliance, and digital excellence.
            </h1>
            <p className="mt-4 text-base text-slate-600">
              Rhofton Consultants partners with hospitals, clinics, and health innovators to deliver measurable growth,
              operational clarity, and patient-centered outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button to="/services">Our Services</Button>
              <Button to="/contact" variant="ghost">
                Get a Quote
              </Button>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="rounded-2xl border border-emerald-100 bg-white/80 px-5 py-4">
                <p className="text-sm font-semibold text-evergreen-700">Trusted by healthcare teams</p>
                <p className="mt-1 text-xs text-slate-500">Across East Africa and beyond</p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white/80 px-5 py-4">
                <p className="text-sm font-semibold text-evergreen-700">Outcome-driven delivery</p>
                <p className="mt-1 text-xs text-slate-500">Strategy, compliance, and IT in one partner</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="card-surface overflow-hidden">
              <img
                src="/img/web1.jpeg"
                alt="Healthcare leadership team"
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="p-6">
                <p className="text-sm font-semibold text-evergreen-700">Strategic Advisory</p>
                <p className="mt-2 text-sm text-slate-600">
                  Board-ready insights and operational blueprints tailored to your facility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we do"
            title="A consulting partner built for healthcare complexity."
            subtitle="We combine strategic planning, operational excellence, and digital transformation to move healthcare organizations forward."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} link={`/services/${service.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card-surface overflow-hidden">
            <img src="/img/web2.jpg" alt="Hospital operations" className="h-72 w-full object-cover" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Why Rhofton"
              title="We drive clarity for leaders and confidence for patients."
              subtitle="Our team blends clinical insight, operational rigor, and digital expertise so your organization can deliver safe, efficient, and compassionate care."
            />
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                Tailored diagnostics and actionable roadmaps.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                Compliance-first systems that meet global standards.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                Change management that brings teams along.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button to="/about" variant="light">
                About Us
              </Button>
              <Button to="/contact">Book a Consultation</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Proof of impact"
            title="Recent wins for healthcare partners."
            subtitle="A snapshot of what our consulting engagements deliver."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Operational turnaround",
                body: "Reduced outpatient wait times by 35% through workflow redesign and digital queueing."
              },
              {
                title: "Compliance readiness",
                body: "Achieved full regulatory compliance for a multi-site clinic network within 90 days."
              },
              {
                title: "Digital health launch",
                body: "Implemented EMR and data governance frameworks for a growing private hospital."
              }
            ].map((item) => (
              <div key={item.title} className="card-surface p-6">
                <h3 className="font-heading text-lg font-semibold text-evergreen-800">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Let’s talk"
              title="Ready to elevate your healthcare organization?"
              subtitle="Tell us about your goals. We’ll respond with a tailored proposal and timeline."
            />
          </div>
          <div className="flex items-center">
            <div className="card-surface w-full p-6">
              <p className="text-sm text-slate-600">Start with a discovery call.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button to="/contact">Contact Us</Button>
                <Button to="/services" variant="ghost">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Button from "../components/Button.jsx";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { caseStudies } from "../data/caseStudies.js";

export default function CaseStudies() {
  return (
    <div>
      <Seo
        title="Case Studies | Rhofton Consultants"
        description="Explore healthcare case studies and outcomes delivered by Rhofton Consultants."
        path="/case-studies"
      />
      <section className="section-pad">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Case Studies"
            title="Outcomes that move healthcare forward."
            subtitle="A selection of recent engagements that show how we deliver measurable impact."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {caseStudies.map((item) => (
              <div key={item.title} className="card-surface p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">{item.industry}</p>
                <h3 className="mt-3 font-heading text-lg font-semibold text-evergreen-800">{item.title}</h3>
                <p className="mt-4 text-sm text-slate-600">{item.impact}</p>
                <Button to={`/case-studies/${item.slug}`} variant="light" className="mt-6 w-full">
                  View Case Study
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact">Start Your Project</Button>
            <Button to="/services" variant="ghost">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Focus areas"
              title="Where we deliver the most value."
              subtitle="We work alongside leadership teams to create repeatable results."
            />
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                Patient access, throughput, and capacity utilization.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                Compliance readiness and quality assurance systems.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                Digital transformation and data governance.
              </li>
            </ul>
          </div>
          <div className="card-surface overflow-hidden">
            <img src="/img/web5.webp" alt="Healthcare technology" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

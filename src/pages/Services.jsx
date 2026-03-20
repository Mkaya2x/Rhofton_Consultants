import Button from "../components/Button.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <div>
      <section className="section-pad">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Services"
            title="Specialized consulting for healthcare growth and resilience."
            subtitle="From strategy to execution, we help healthcare organizations deliver better outcomes with confidence."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Engagement model"
              title="Collaborative, measurable, and built for your team."
              subtitle="We tailor each engagement to your context, ensuring alignment, execution, and long-term capability."
            />
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                Diagnostic assessment and stakeholder interviews.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                Data-driven roadmap with KPIs and milestones.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                Change enablement and performance tracking.
              </li>
            </ul>
          </div>
          <div className="card-surface p-6">
            <p className="text-sm text-slate-600">Looking for a tailored proposal?</p>
            <p className="mt-3 text-lg font-semibold text-evergreen-800">Let’s build a plan for your facility.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact">Request a Proposal</Button>
              <Button to="/case-studies" variant="ghost">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

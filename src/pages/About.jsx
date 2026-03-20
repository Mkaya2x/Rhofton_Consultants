import Button from "../components/Button.jsx";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function About() {
  return (
    <div>
      <Seo
        title="About Rhofton Consultants"
        description="Learn about Rhofton Consultants and our healthcare advisory mission across East Africa."
        path="/about"
      />
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              eyebrow="About Rhofton"
              title="Healthcare consulting grounded in data, empathy, and execution."
              subtitle="We align clinical excellence with operational clarity to help healthcare leaders build resilient organizations."
            />
            <p className="mt-6 text-sm text-slate-600">
              Rhofton Consultants is a healthcare-focused advisory firm supporting hospitals, clinics, NGOs, and health
              innovators across East Africa. Our team blends strategic insight, operational expertise, and digital
              transformation experience to create actionable, measurable outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button to="/services">Explore Services</Button>
              <Button to="/contact" variant="ghost">
                Meet the Team
              </Button>
            </div>
          </div>
          <div className="card-surface overflow-hidden">
            <img
              src="/img/what-can-you-do-with-a-master-of-business-administration-in-healthcare.jpeg"
              alt="Healthcare strategy workshop"
              className="h-72 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm font-semibold text-evergreen-700">Our mission</p>
              <p className="mt-2 text-sm text-slate-600">
                Empower healthcare organizations to deliver safer, smarter, and more sustainable care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Strategy first",
              body: "We co-create growth blueprints that align clinical priorities with financial sustainability."
            },
            {
              title: "Operational clarity",
              body: "We simplify complex workflows so teams deliver better patient outcomes with less friction."
            },
            {
              title: "Digital confidence",
              body: "We design secure, compliant health IT systems that scale with your organization."
            }
          ].map((item) => (
            <div key={item.title} className="card-surface p-6">
              <h3 className="font-heading text-lg font-semibold text-evergreen-800">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

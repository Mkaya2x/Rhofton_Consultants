import { useParams, Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { services } from "../data/services.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <p className="pill mx-auto w-fit">Service not found</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-evergreen-900">We can’t find that service.</h1>
          <p className="mt-4 text-sm text-slate-600">
            Explore our services page to see the full list of offerings.
          </p>
          <div className="mt-6">
            <Button to="/services">Back to Services</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <Seo
        title={`${service.title} | Rhofton Consultants`}
        description={service.description}
        path={`/services/${service.slug}`}
      />
      <section className="section-pad">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Service detail"
            title={service.title}
            subtitle={service.description}
          />
          <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="card-surface p-6">
              <h3 className="font-heading text-lg font-semibold text-evergreen-800">What this includes</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-surface p-6">
              <h3 className="font-heading text-lg font-semibold text-evergreen-800">Typical deliverables</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/contact">Request This Service</Button>
            <Link to="/services" className="text-sm font-semibold text-evergreen-700 hover:text-evergreen-800">
              Back to Services →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useParams, Link } from "react-router-dom";
import Button from "../components/Button.jsx";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { caseStudies } from "../data/caseStudies.js";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return (
      <section className="section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <p className="pill mx-auto w-fit">Case study not found</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-evergreen-900">We can’t find that story.</h1>
          <p className="mt-4 text-sm text-slate-600">
            Return to the case studies page to explore our latest work.
          </p>
          <div className="mt-6">
            <Button to="/case-studies">Back to Case Studies</Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <Seo
        title={`${study.title} | Case Study`}
        description={study.impact}
        path={`/case-studies/${study.slug}`}
      />
      <section className="section-pad">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow={study.industry}
            title={study.title}
            subtitle={study.impact}
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="card-surface p-6 md:col-span-2">
              <h3 className="font-heading text-lg font-semibold text-evergreen-800">Challenge</h3>
              <p className="mt-3 text-sm text-slate-600">{study.challenge}</p>
              <h3 className="mt-6 font-heading text-lg font-semibold text-evergreen-800">Solution</h3>
              <p className="mt-3 text-sm text-slate-600">{study.solution}</p>
            </div>
            <div className="card-surface p-6">
              <h3 className="font-heading text-lg font-semibold text-evergreen-800">Results</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {study.results.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-evergreen-600"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/contact">Start a Similar Project</Button>
            <Link to="/case-studies" className="text-sm font-semibold text-evergreen-700 hover:text-evergreen-800">
              Back to Case Studies →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

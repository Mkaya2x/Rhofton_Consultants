import { useState } from "react";
import Button from "../components/Button.jsx";
import Seo from "../components/Seo.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const initialState = {
  name: "",
  email: "",
  organization: "",
  service: "Healthcare Strategy & Planning",
  message: ""
};

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please complete all required fields." });
      return;
    }
    const emailOk = /\S+@\S+\.\S+/.test(form.email);
    if (!emailOk) {
      setStatus({ type: "error", message: "Please provide a valid email address." });
      return;
    }
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Submission failed.");
      }
      setStatus({
        type: "success",
        message: "Thanks! Your request has been sent. We will reply within 24 hours."
      });
      setForm(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Seo
        title="Contact Rhofton Consultants"
        description="Contact Rhofton Consultants to discuss healthcare strategy, compliance, operations, or health IT."
        path="/contact"
      />
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Start your healthcare transformation."
              subtitle="Tell us about your organization and we will respond with a tailored consultation plan."
            />
            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <p>
                Email:{" "}
                <a href="mailto:mkayatone@gmail.com" className="font-semibold text-evergreen-700">
                  mkayatone@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+254722617608" className="font-semibold text-evergreen-700">
                  +254 722 617 608
                </a>
              </p>
              <p>
                Alternate:{" "}
                <a href="tel:+254784935271" className="font-semibold text-evergreen-700">
                  +254 784 935 271
                </a>
              </p>
              <p>Nairobi, Kenya</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="tel:+254722617608">Call Now</Button>
              <Button href="mailto:mkayatone@gmail.com" variant="ghost">
                Email Us
              </Button>
            </div>
          </div>
          <div className="card-surface p-6">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-emerald-100 px-4 py-3 text-sm focus:border-evergreen-600 focus:outline-none"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Email *</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-emerald-100 px-4 py-3 text-sm focus:border-evergreen-600 focus:outline-none"
                  placeholder="you@organization.com"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Organization</label>
                <input
                  name="organization"
                  value={form.organization}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-emerald-100 px-4 py-3 text-sm focus:border-evergreen-600 focus:outline-none"
                  placeholder="Hospital or clinic name"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-emerald-100 bg-white px-4 py-3 text-sm focus:border-evergreen-600 focus:outline-none"
                >
                  <option>Healthcare Strategy & Planning</option>
                  <option>Hospital & Clinic Management</option>
                  <option>Quality & Compliance Consulting</option>
                  <option>Health IT Solutions</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows="4"
                  className="mt-2 w-full rounded-2xl border border-emerald-100 px-4 py-3 text-sm focus:border-evergreen-600 focus:outline-none"
                  placeholder="Tell us about your goals"
                  required
                />
              </div>
              {status.type !== "idle" && (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-emerald-700" : "text-rose-600"
                  }`}
                >
                  {status.message}
                </p>
              )}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-evergreen-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-evergreen-700 disabled:cursor-not-allowed disabled:bg-emerald-300"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="card-surface p-6">
            <p className="text-sm text-slate-600">
              We typically respond within 24 hours. For urgent requests, include your preferred call time and we will
              prioritize accordingly.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button to="/services" variant="ghost">
                Explore Services
              </Button>
              <Button to="/case-studies">View Case Studies</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

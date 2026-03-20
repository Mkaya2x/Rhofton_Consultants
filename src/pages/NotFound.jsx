import Button from "../components/Button.jsx";
import Seo from "../components/Seo.jsx";

export default function NotFound() {
  return (
    <section className="section-pad">
      <Seo
        title="Page Not Found | Rhofton Consultants"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <div className="mx-auto max-w-3xl text-center">
        <p className="pill mx-auto w-fit">Page not found</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold text-evergreen-900">We can’t find that page.</h1>
        <p className="mt-4 text-sm text-slate-600">
          The page you are looking for may have moved. Use the navigation or head back to the homepage.
        </p>
        <div className="mt-6">
          <Button to="/">Back to Home</Button>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="container py-20 sm:py-28">
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[.18em] text-brand-700">404</p>
      <h1 className="mt-4 font-display text-5xl font-bold tracking-[-.05em] text-slate-950 sm:text-6xl">Page not found.</h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-600">The address may be outdated. Continue to the portfolio, explore case studies or read the technical blog.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn-primary">Back to home</Link>
        <Link to="/projects" className="btn-secondary">Explore projects</Link>
        <Link to="/blog" className="btn-secondary">Read the blog</Link>
      </div>
    </div>
  </section>
);

export default NotFoundPage;

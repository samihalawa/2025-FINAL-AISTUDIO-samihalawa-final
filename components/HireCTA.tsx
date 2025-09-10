import React from 'react';

const HireCTA: React.FC = () => {
  return (
    <section className="mt-12 p-6 bg-slate-900 text-white rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h3 className="text-xl font-semibold">Ready to ship results with AI?</h3>
        <p className="opacity-90">Book a free consultation or ping me on WhatsApp. I work with founders, teams and enterprises.</p>
      </div>
      <div className="flex gap-3">
        <a href="/contact" className="inline-block bg-white text-slate-900 px-5 py-3 rounded-md font-semibold hover:bg-slate-200">Contact</a>
        <a href="https://wa.me/34679794037" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-500 text-white px-5 py-3 rounded-md font-semibold hover:bg-emerald-400">WhatsApp</a>
      </div>
    </section>
  );
};

export default HireCTA;


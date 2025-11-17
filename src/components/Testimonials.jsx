import { motion } from 'framer-motion';

export default function Testimonials() {
  const items = [
    { quote: 'We replaced 12 tools and saved $9,600/mo.', author: 'VP Ops, Series B SaaS' },
    { quote: 'Built our sales workflow in 4 minutes.', author: 'Head of Sales, B2B' },
    { quote: 'Zero engineers involved. Magic.', author: 'COO, eCommerce' },
  ];

  return (
    <section className="relative py-24" id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Loved by operators
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/80 backdrop-blur shadow-[0_0_50px_rgba(14,165,233,0.15)]">
              <div className="text-white/90">“{t.quote}”</div>
              <div className="mt-3 text-sm text-white/60">{t.author}</div>
              <div className="mt-4 text-emerald-300/80 text-xs">ROI in week one</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

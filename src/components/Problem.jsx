import { motion } from 'framer-motion';

export default function Problem() {
  return (
    <section className="relative py-24" id="problem">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          You're Drowning in SaaS Subscriptions
        </motion.h2>
        <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto">$10k+/month for tools → $49/month with OneUAI</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { title: 'Manual tasks', desc: 'Copy-paste, CSVs, busywork that never ends.' },
            { title: 'SaaS overload', desc: '10 tools stitched together, 10 invoices.' },
            { title: 'Developer bottleneck', desc: 'Weeks of tickets for simple automations.' },
          ].map((i, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/80 backdrop-blur">
              <div className="text-white font-semibold">{i.title}</div>
              <div className="mt-2 text-white/70 text-sm">{i.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

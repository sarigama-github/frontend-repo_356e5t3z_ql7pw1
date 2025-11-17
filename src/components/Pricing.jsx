import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section className="relative py-24" id="pricing">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Simple pricing
        </motion.h2>
        <div className="mt-10 mx-auto max-w-md">
          <div className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500/40 via-sky-500/40 to-cyan-400/40">
            <div className="rounded-3xl bg-[#0A0E27] p-8 border border-white/10 text-center">
              <div className="text-white/70">Unlimited everything</div>
              <div className="mt-2 text-5xl font-extrabold text-white tracking-tight">$49<span className="text-xl text-white/60">/month</span></div>
              <div className="mt-2 text-white/70">14-day free trial. No credit card.</div>
              <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-xl bg-sky-500 text-white px-6 py-3 font-semibold shadow-[0_10px_40px_rgba(14,165,233,0.35)] hover:shadow-[0_10px_50px_rgba(14,165,233,0.5)] transition w-full">Start Free Trial</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

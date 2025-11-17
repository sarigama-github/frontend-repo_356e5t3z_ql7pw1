import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-24" id="cta">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500 via-sky-500 to-cyan-400">
          <div className="relative rounded-3xl bg-[#0A0E27] p-12 text-center border border-white/10">
            <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-extrabold text-white">
              Your Last Manual Process
            </motion.h3>
            <p className="mt-3 text-white/70">Record it once. OneUAI handles the rest.</p>
            <a href="#pricing" className="mt-8 inline-flex items-center justify-center rounded-xl bg-sky-500 text-white px-8 py-4 font-semibold shadow-[0_10px_40px_rgba(14,165,233,0.35)] hover:shadow-[0_10px_50px_rgba(14,165,233,0.5)] transition">
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

export default function Demo() {
  return (
    <section className="relative py-24" id="demo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl p-1 bg-gradient-to-r from-fuchsia-500/40 via-sky-500/40 to-cyan-400/40">
          <div className="rounded-3xl bg-[#0A0E27] p-6 border border-white/10 backdrop-blur">
            <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
              Glassmorphic video player (drop in your demo mp4)
            </div>
            <div className="mt-4 flex gap-2 flex-wrap text-xs text-white/60">
              {['00:10 Capture', '01:00 AI plan', '03:00 Deploy', '04:30 Run'].map((t, i) => (
                <span key={i} className="px-2 py-1 rounded bg-white/10 border border-white/10">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

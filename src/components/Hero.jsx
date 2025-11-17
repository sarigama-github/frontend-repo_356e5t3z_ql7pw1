import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27]/50 via-[#0A0E27]/70 to-[#0A0E27] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 pt-28 pb-20">
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(56,189,248,0.25)]"
          >
            Stop Building Workflows. Start Recording Them.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0"
          >
            Turn any process into automated workflows in 5 minutes. No coding.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-sky-500 text-white px-6 py-3 font-semibold shadow-[0_10px_40px_rgba(14,165,233,0.35)] hover:shadow-[0_10px_50px_rgba(14,165,233,0.5)] transition">
              Start Free Trial
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-6 py-3 font-semibold backdrop-blur border border-white/20 hover:bg-white/15 transition">
              Watch Demo
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
            {[
              { label: '5 min setup' },
              { label: '$0 setup cost' },
              { label: '∞ runs/month' },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-white/10 backdrop-blur border border-white/10 text-white/80 text-center py-3">
                {s.label}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_80px_rgba(14,165,233,0.15)]">
            <div className="grid grid-cols-3 gap-3 text-xs text-white/70">
              <div className="col-span-1 rounded-lg bg-white/5 border border-white/10 p-3">Record</div>
              <div className="col-span-1 rounded-lg bg-white/5 border border-white/10 p-3">AI Process</div>
              <div className="col-span-1 rounded-lg bg-white/5 border border-white/10 p-3">Deploy</div>
              <div className="col-span-3 rounded-lg bg-gradient-to-r from-fuchsia-500/20 via-sky-500/20 to-cyan-400/20 border border-white/10 p-4 mt-2 text-white">
                Example: when contact added → create in HubSpot → send email. OneUAI builds it automatically.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

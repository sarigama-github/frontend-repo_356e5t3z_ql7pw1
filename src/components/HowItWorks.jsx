import { motion } from 'framer-motion';
import { Mic, Cpu, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: Mic, title: 'Record your process', desc: 'RAIZE captures it: voice, screen, or text.' },
    { icon: Cpu, title: 'AI generates workflow', desc: 'Claude builds it end-to-end.' },
    { icon: Rocket, title: 'Connect & run', desc: 'Authenticate once, automate forever.' },
  ];

  return (
    <section className="relative py-24" id="how">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          How It Works
        </motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/80 backdrop-blur">
              <s.icon className="h-6 w-6 text-sky-300" />
              <div className="mt-4 text-white font-semibold">{s.title}</div>
              <div className="mt-2 text-white/70 text-sm">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

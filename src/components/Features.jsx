import { motion } from 'framer-motion';
import { Shield, Zap, Server, Wand2, Terminal, Boxes } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: Boxes, title: 'RAIZE Process Capture', desc: 'Record voice, screen, and text in one place.' },
    { icon: Wand2, title: 'Claude AI Generation', desc: 'From description to ready workflow.' },
    { icon: Server, title: 'Private n8n Server', desc: 'Your workflows on your infra.' },
    { icon: Zap, title: 'One-Click Deploy', desc: 'Go live instantly with zero setup.' },
    { icon: Terminal, title: 'Natural Language Control', desc: 'Tell it what to do. It obeys.' },
    { icon: Shield, title: 'Enterprise Security', desc: 'SSO, audit logs, SOC2-ready patterns.' },
  ];

  return (
    <section className="relative py-24" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Everything you need to automate
        </motion.h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="relative group rounded-2xl bg-white/5 border border-white/10 p-6 text-white/80 backdrop-blur overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-fuchsia-500/10 via-sky-500/10 to-cyan-400/10" />
              <f.icon className="h-6 w-6 text-sky-300" />
              <div className="mt-4 text-white font-semibold">{f.title}</div>
              <div className="mt-2 text-white/70 text-sm">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

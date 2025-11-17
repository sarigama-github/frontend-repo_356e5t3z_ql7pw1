import { motion } from 'framer-motion';

export default function Comparison() {
  const rows = [
    { label: 'Setup', old: 'Weeks', new: '5 minutes' },
    { label: 'Cost', old: '$10k/mo', new: '$49/mo' },
    { label: 'Skills', old: 'Developers needed', new: 'Anyone' },
    { label: 'Control', old: 'Vendor-hosted', new: 'Self-hosted' },
  ];

  return (
    <section className="relative py-24" id="compare">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Traditional SaaS vs OneUAI
        </motion.h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-left text-white/80">
            <thead className="bg-white/5">
              <tr>
                <th className="p-4 text-white/60">Category</th>
                <th className="p-4 text-white/60">Traditional SaaS</th>
                <th className="p-4 text-white/60">OneUAI</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="p-4 text-white">{r.label}</td>
                  <td className="p-4">{r.old}</td>
                  <td className="p-4 text-sky-300 font-semibold">{r.new}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

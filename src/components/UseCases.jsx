import { motion } from 'framer-motion';

const tabs = {
  Operations: [
    'When invoice paid → update ERP → Slack finance',
    'Daily report → email leadership',
  ],
  Marketing: [
    'New lead → enrich → HubSpot → welcome email',
    'Blog publish → tweet → LinkedIn post',
  ],
  Sales: [
    'Contact added → create in CRM → outreach sequence',
    'Meeting booked → create Zoom → notes to CRM',
  ],
  Support: [
    'Ticket created → sentiment → route to owner',
    'Bug report → create Jira → notify engineering',
  ],
};

export default function UseCases() {
  const keys = Object.keys(tabs);
  return (
    <section className="relative py-24" id="use-cases">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Use Cases
        </motion.h2>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {keys.map((k) => (
            <a key={k} href={`#tab-${k}`} className="px-3 py-1.5 rounded-lg bg-white/10 text-white/80 border border-white/10 hover:text-white">{k}</a>
          ))}
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {keys.map((k, i) => (
            <motion.div id={`tab-${k}`} key={k} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/80 backdrop-blur">
              <div className="text-white font-semibold">{k}</div>
              <div className="mt-4 space-y-2 text-sm">
                {tabs[k].map((line, idx) => (
                  <div key={idx} className="rounded-lg bg-black/20 border border-white/10 p-3">{line}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

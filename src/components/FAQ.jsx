import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'Technical skills needed?', a: 'No. Describe your process, OneUAI builds it.' },
  { q: 'Integrations?', a: '400+ via n8n. Connect your stack in minutes.' },
  { q: 'Data location?', a: 'On your servers. You own your workflows and data.' },
  { q: 'Different from Zapier?', a: 'You own everything. No vendor lock-in, unlimited runs.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-24" id="faq">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">FAQ</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl bg-white/5 border border-white/10">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-4 text-white/80">
                <span>{f.q}</span>
                <ChevronDown className={`h-5 w-5 transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-white/60 text-sm">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

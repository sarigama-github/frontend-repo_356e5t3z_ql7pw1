export default function Footer() {
  const cols = {
    Product: ['Features', 'Pricing', 'Demo', 'Changelog'],
    Company: ['About', 'Careers', 'Blog', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Security'],
    Social: ['Twitter', 'LinkedIn', 'GitHub'],
  };
  return (
    <footer className="relative border-t border-white/10 py-14 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <div className="text-white font-semibold">OneUAI</div>
          <div className="text-sm mt-2">From Process to Automation. Instantly.</div>
        </div>
        {Object.keys(cols).map((k) => (
          <div key={k}>
            <div className="text-white/80 font-medium">{k}</div>
            <div className="mt-3 space-y-2 text-sm">
              {cols[k].map((i) => (
                <a key={i} href="#" className="block hover:text-white">{i}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} OneUAI. All rights reserved.</div>
    </footer>
  );
}

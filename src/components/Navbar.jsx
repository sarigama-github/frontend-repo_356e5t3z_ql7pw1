import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-[#0A0E27]/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-400 via-fuchsia-500 to-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.4)]"
            />
          </div>
          <span className="text-white/90 font-semibold tracking-wide">OneUAI</span>
          <span className="ml-2 px-2 py-0.5 rounded-full text-xs bg-white/10 text-white/70 hidden sm:inline-flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-sky-300" />
            From Process to Automation. Instantly.
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a href="#demo" className="hover:text-white transition">Demo</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="text-white/70 hover:text-white hidden sm:inline">Sign in</a>
          <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/20 text-sky-200 hover:bg-sky-500/30 border border-sky-400/30 shadow-[0_0_30px_rgba(56,189,248,0.25)] transition">
            <span>Start Free Trial</span>
          </a>
          <button className="md:hidden text-white/80" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

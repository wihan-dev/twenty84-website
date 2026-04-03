"use client";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[12px] tracking-[0.3em] text-white/30 uppercase">
              Twenty84
            </p>
            <p className="mt-2 text-[12px] text-white/15">
              Capital. Systems. AI. Built for Africa.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#about"
              className="text-[12px] text-white/20 hover:text-white/50 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-[12px] text-white/20 hover:text-white/50 transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-[12px] text-white/20 hover:text-white/50 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-[12px] text-white/20 hover:text-white/50 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/[0.03] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-white/10">
            &copy; {new Date().getFullYear()} Twenty84ai (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-[11px] text-white/10">
            Johannesburg, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}

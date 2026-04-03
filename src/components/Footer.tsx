"use client";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 py-10 sm:py-14 md:py-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 md:gap-0">
          {/* Brand */}
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.35em] text-white/25 uppercase">
              Twenty84
            </p>
            <p className="mt-2 sm:mt-3 text-[13px] text-white/18 leading-relaxed max-w-xs">
              Capital. Systems. AI. Built for Africa.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 md:col-start-6">
            <div className="grid grid-cols-2 gap-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/25 hover:text-white/50 active:text-white/50 transition-colors duration-300 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 md:col-start-10 flex md:justify-end items-start">
            <a
              href="https://twenty84.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] tracking-wide text-white/25 hover:text-white/50 active:text-white/50 transition-colors duration-300 border-b border-white/[0.08] hover:border-white/[0.15] pb-0.5 py-1"
            >
              Subscribe to newsletter
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <p className="text-[11px] text-white/15">
            &copy; {new Date().getFullYear()} Twenty84ai (Pty) Ltd. All rights
            reserved.
          </p>
          <p className="text-[11px] text-white/15">
            Johannesburg, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}

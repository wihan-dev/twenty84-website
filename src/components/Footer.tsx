"use client";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-0">
          {/* Brand */}
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.35em] text-white/25 uppercase">
              Twenty84
            </p>
            <p className="mt-3 text-[13px] text-white/12 leading-relaxed max-w-xs">
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
                  className="text-[13px] text-white/18 hover:text-white/50 transition-colors duration-300"
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
              className="text-[12px] tracking-wide text-white/20 hover:text-white/50 transition-colors duration-300 border-b border-white/[0.06] hover:border-white/[0.15] pb-0.5"
            >
              Subscribe to newsletter
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.03] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[11px] text-white/8">
            &copy; {new Date().getFullYear()} Twenty84ai (Pty) Ltd. All rights
            reserved.
          </p>
          <p className="text-[11px] text-white/8">
            Johannesburg, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}

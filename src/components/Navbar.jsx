import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Home', href: '#' },
    { label: 'Follow Us', href: '#newsletter' },
    { label: 'Foundation', href: 'https://www.themoonshotfoundation.org' },
  ];

  return (
    <>
      {/* Skip to Content Accessibility Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-midnight text-peach z-[100] px-4 py-2 rounded-lg">
        Skip to Content
      </a>
      
      <nav
        ref={navRef}
        className={`absolute top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          ${scrolled
            ? 'bg-peach/90 backdrop-blur-xl border-b border-midnight/10 shadow-sm'
            : 'bg-transparent'
          }
          px-6 py-4 md:px-12 md:py-6
        `}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          {/* Logo */}
          <a
            href="#"
            className={`font-heading font-bold text-sm md:text-base tracking-tight whitespace-nowrap transition-colors duration-500 ${
              scrolled ? 'text-midnight' : 'text-peach'
            }`}
          >
            Moonshot Mindset
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`text-sm font-medium link-hover whitespace-nowrap transition-colors duration-500 ${
                  scrolled ? 'text-midnight/70 hover:text-coral' : 'text-peach/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA removed per user request */}

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-1 transition-colors duration-500 ${
              scrolled ? 'text-midnight' : 'text-peach'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={`md:hidden mt-3 pb-3 pt-3 border-t ${
            scrolled ? 'border-midnight/10' : 'border-peach/20'
          }`}>
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-sm font-medium px-3 py-1 transition-colors ${
                    scrolled ? 'text-midnight/70 hover:text-coral' : 'text-peach/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              {/* Mobile CTA removed per user request */}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

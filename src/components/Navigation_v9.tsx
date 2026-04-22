import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: '首页', path: '/' },
    { name: '产品系列', path: '/products' },
    { name: '服务', path: '/services' },
    { name: '关于我们', path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-neutral-200' : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="container-x flex items-center justify-between h-24 gap-6">
        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
          <img src="/assets/logo.png" alt="华安达" className="h-14 md:h-[72px] w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-xl md:text-2xl font-semibold text-neutral-900 tracking-wide">华安达</span>
            <span className="text-[9px] md:text-[10px] tracking-[0.22em] text-neutral-500 uppercase">Guangzhou Veranda Corporation</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link font-serif-cn ${location.pathname === item.path ? 'active text-neutral-950 font-medium' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 text-neutral-800 border-l border-neutral-200 pl-6 flex-shrink-0">
          <Phone className="w-5 h-5 text-neutral-700" strokeWidth={1.5} />
          <div className="flex flex-col leading-tight">
            <span className="text-[9px] tracking-[0.3em] text-neutral-500 uppercase mb-0.5">Hotline</span>
            <span className="text-sm font-semibold tracking-wider text-neutral-950">+86 20 8769 0208</span>
            <span className="text-sm font-semibold tracking-wider text-neutral-950">+86 133 9247 3750</span>
          </div>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="container-x py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-serif-cn py-2 ${location.pathname === item.path ? 'text-neutral-950 font-medium' : 'text-neutral-600'}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-neutral-200">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm">+86 20 8769 0208</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-sm">+86 133 9247 3750</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
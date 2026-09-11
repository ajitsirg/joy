import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, User, UserPlus, ChevronDown } from 'lucide-react';

type ChildLink = { name: string; path: string; note?: string };
type NavItem = { name: string; path?: string; children?: ChildLink[] };

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Stay', path: '/resort-keys' },
  {
    name: 'Experiences',
    children: [
      { name: 'Adventure', path: '/adventure', note: 'Outdoor thrills' },
      { name: 'Wellness', path: '/wellness', note: 'Rest & restore' },
      { name: 'The Experience', path: '/experience', note: 'Resort living' },
      { name: 'Weddings', path: '/weddings', note: 'Celebrate here' },
      { name: 'Gallery', path: '/gallery', note: 'Moments & views' },
      { name: 'Packages', path: '/packages', note: 'Day & night plans' },
    ],
  },
  {
    name: 'Membership',
    children: [
      { name: 'Earning Plan', path: '/investment', note: 'Returns & growth' },
      { name: 'Member Plan', path: '/member-plan', note: 'Ownership path' },
      { name: 'Investor Benefits', path: '/investor-benefits', note: 'What you receive' },
      { name: 'Legal Formation', path: '/legal-formation', note: 'Trust & structure' },
    ],
  },
  { name: 'Location', path: '/location' },
  { name: 'Contact', path: '/contact' },
];

const isPathActive = (pathname: string, path: string) => {
  if (path === '/') return pathname === '/';
  if (path === '/resort-keys') return pathname === '/resort-keys' || pathname === '/stay';
  return pathname === path;
};

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenMobileGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((current) => (current === name ? null : name));
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a291c]/95 backdrop-blur-md border-b border-[#cfa353]/25 shadow-[0_8px_30px_rgba(7,26,18,0.35)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#cfa353]/70 to-transparent" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[72px] flex items-center justify-between gap-6" ref={navRef}>
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#cfa353]/80 bg-white flex items-center justify-center shadow-md group-hover:border-[#e6bf73] group-hover:scale-[1.03] transition-all">
                <img
                  src="/brand/joy-hospitality-logo.png?v=20260911"
                  alt="Joy Hospitality and Real Estate Group"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[1.45rem] leading-none text-white tracking-[0.04em] group-hover:text-[#e6bf73] transition-colors">
                  Joy Club
                </span>
                <span className="font-sans text-[9px] text-[#cfa353] tracking-[0.28em] font-medium uppercase mt-1">
                  Adventure Resort
                </span>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
              {navItems.map((item) => {
                if (item.children) {
                  const isActive = item.children.some((child) => isPathActive(location.pathname, child.path));
                  const isExpanded = openDropdown === item.name;

                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() => toggleDropdown(item.name)}
                        aria-expanded={isExpanded}
                        aria-haspopup="true"
                        className={`font-sans text-[13px] font-medium tracking-[0.08em] px-3.5 py-2 rounded-full inline-flex items-center gap-1 transition-colors ${
                          isActive || isExpanded
                            ? 'text-[#e6bf73]'
                            : 'text-white/80 hover:text-[#e6bf73]'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <div
                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
                          isExpanded ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                        }`}
                      >
                        <div className="min-w-[248px] rounded-2xl bg-[#082317] border border-[#cfa353]/25 shadow-2xl p-2">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={() =>
                                `block rounded-xl px-3.5 py-2.5 transition-colors ${
                                  isPathActive(location.pathname, child.path)
                                    ? 'bg-white/8 text-[#e6bf73]'
                                    : 'text-white/85 hover:bg-white/6 hover:text-[#e6bf73]'
                                }`
                              }
                            >
                              <span className="font-sans text-[13px] font-medium tracking-wide block">{child.name}</span>
                              {child.note && (
                                <span className="font-sans text-[11px] text-white/45 block mt-0.5">{child.note}</span>
                              )}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={item.name}
                    to={item.path!}
                    className={() =>
                      `font-sans text-[13px] font-medium tracking-[0.08em] px-3.5 py-2 rounded-full transition-colors ${
                        isPathActive(location.pathname, item.path!)
                          ? 'text-[#e6bf73]'
                          : 'text-white/80 hover:text-[#e6bf73]'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>

            <div className="flex items-center gap-2.5 shrink-0">
              <Link
                to="/login"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#cfa353]/70 text-[#cfa353] hover:bg-[#cfa353]/10 font-sans text-[12px] font-semibold tracking-[0.12em] uppercase transition-all"
              >
                <User className="w-3.5 h-3.5" />
                Login
              </Link>

              <Link
                to="/join"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#cfa353] hover:bg-[#e6bf73] text-[#0a291c] font-sans text-[12px] font-semibold tracking-[0.12em] uppercase transition-all shadow-md"
              >
                <UserPlus className="w-3.5 h-3.5" />
                Join Now
              </Link>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="xl:hidden p-2 rounded-lg text-[#cfa353] hover:bg-white/10 transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 w-[22rem] max-w-[88vw] bg-[#0a291c] border-l border-[#cfa353]/25 z-50 shadow-2xl flex flex-col xl:hidden transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[#cfa353] bg-white flex items-center justify-center">
              <img
                src="/brand/joy-hospitality-logo.png?v=20260911"
                alt="Joy Hospitality and Real Estate Group"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl leading-none text-white tracking-[0.04em]">Joy Club</span>
              <span className="font-sans text-[9px] text-[#cfa353] tracking-[0.22em] uppercase mt-1">Resort</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-[#cfa353] hover:bg-white/10 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1" aria-label="Mobile">
          {navItems.map((item) => {
            if (item.children) {
              const isActive = item.children.some((child) => isPathActive(location.pathname, child.path));
              const isExpanded = openMobileGroup === item.name;

              return (
                <div key={item.name} className="rounded-2xl">
                  <button
                    type="button"
                    onClick={() => setOpenMobileGroup((current) => (current === item.name ? null : item.name))}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl font-sans text-sm tracking-[0.08em] transition-colors ${
                      isActive || isExpanded ? 'text-[#e6bf73] bg-white/6' : 'text-white/85 hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  {isExpanded && (
                    <div className="mt-1 mb-2 ml-2 pl-3 border-l border-[#cfa353]/25 space-y-0.5">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={() =>
                            `block rounded-xl px-3 py-2.5 ${
                              isPathActive(location.pathname, child.path)
                                ? 'text-[#e6bf73] bg-white/8'
                                : 'text-white/75 hover:text-[#e6bf73] hover:bg-white/5'
                            }`
                          }
                        >
                          <span className="font-sans text-[13px] font-medium block">{child.name}</span>
                          {child.note && (
                            <span className="font-sans text-[11px] text-white/40 block">{child.note}</span>
                          )}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path!}
                className={() =>
                  `block rounded-xl px-3.5 py-3 font-sans text-sm tracking-[0.08em] ${
                    isPathActive(location.pathname, item.path!)
                      ? 'text-[#e6bf73] bg-white/8'
                      : 'text-white/85 hover:text-[#e6bf73] hover:bg-white/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="px-5 py-5 border-t border-white/8 space-y-2.5">
          <Link
            to="/login"
            className="w-full py-3 rounded-full border border-[#cfa353] text-[#cfa353] font-sans text-[12px] font-semibold tracking-[0.14em] text-center block uppercase hover:bg-[#cfa353]/10 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/join"
            className="w-full py-3 rounded-full bg-[#cfa353] text-[#0a291c] font-sans text-[12px] font-semibold tracking-[0.14em] text-center block uppercase hover:bg-[#e6bf73] transition-colors"
          >
            Join Now
          </Link>
        </div>
      </div>
    </>
  );
};

import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import logoImg from '../../assets/logo.png';
import posterImg from '../../assets/poster.png';

/* ─── Dropdown data ─── */
const committees = [
  { label: 'Organising Committee', to: '/organising' },
  { label: 'Advisory Committee', to: '/advisory' },
  { label: 'Technical Program Committee', to: '/technical' },
];

const callForPapers = [
  { label: 'Submission Guidelines', to: '/submission' },
  { label: 'Tracks / Topics', to: '/tracks' },
];

const planTravel = [
  { label: 'About NIT Raipur', to: '/about-nit' },
  { label: 'Conference Venue', to: '/venue' },
];

/* ─── Desktop Dropdown Component ─── */
function DesktopDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef(null);

  const handleEnter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-1 hover:text-orange-200 transition-colors whitespace-nowrap">
        {label}
        <HiChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 min-w-[220px] bg-white text-gray-700 shadow-xl rounded-lg py-2 z-50 border border-gray-100">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm hover:bg-primary-50 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

/* ─── Mobile Dropdown Component ─── */
function MobileDropdown({ label, items, onClose }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
        onClick={() => setOpen(!open)}
      >
        {label}
        <HiChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="pl-4">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-2.5 text-sm rounded-lg transition-colors ${isActive
                  ? 'text-primary font-semibold bg-primary-50'
                  : 'text-gray-600 hover:text-primary hover:bg-primary-50'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Navbar ─── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  /* active-link helper for desktop */
  const desktopLink = ({ isActive }) =>
    `hover:text-orange-200 transition-colors whitespace-nowrap ${isActive ? 'text-orange-200 font-semibold' : ''
    }`;

  return (
    <header className="w-full relative z-50">
      {/* ── Poster Banner ── */}
      <div className="w-full bg-white">
        <img
          src={posterImg}
          alt="CGCON 2027 Conference Banner"
          className="w-full h-24 sm:h-32 lg:h-36 object-fit bg-white"
        />
      </div>

      {/* ── Desktop Navbar ── */}
      <nav className={`bg-primary text-white shadow-md sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="px-20 lg:px-10">
          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 h-14 text-sm xl:text-base font-medium">
            <li>
              <NavLink to="/" end className={desktopLink}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={desktopLink}>About Conference</NavLink>
            </li>

            <DesktopDropdown label="Committees" items={committees} />
            <DesktopDropdown label="Call for Papers" items={callForPapers} />

            <li>
              <NavLink to="/dates" className={desktopLink}>Important Dates</NavLink>
            </li>
            <li>
              <NavLink to="/registration" className={desktopLink}>Registration</NavLink>
            </li>

            <DesktopDropdown label="Plan Travel" items={planTravel} />

            <li>
              <NavLink to="/gallery" className={desktopLink}>Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={desktopLink}>Contact</NavLink>
            </li>
          </ul>

          {/* Mobile: logo + hamburger */}
          <div className="lg:hidden flex items-center justify-between h-12">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoImg} alt="CGCON" className="h-8 w-auto" />
              <span className="font-bold text-sm">CGCON 2027</span>
            </Link>
            <button
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[70vh] overflow-y-auto">
          <nav className="flex flex-col px-3 py-3 gap-0.5">
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'text-primary font-semibold bg-primary-50' : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'text-primary font-semibold bg-primary-50' : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                }`
              }
            >
              About Conference
            </NavLink>

            <MobileDropdown label="Committees" items={committees} onClose={closeMenu} />
            <MobileDropdown label="Call for Papers" items={callForPapers} onClose={closeMenu} />

            <NavLink
              to="/dates"
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'text-primary font-semibold bg-primary-50' : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                }`
              }
            >
              Important Dates
            </NavLink>
            <NavLink
              to="/registration"
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'text-primary font-semibold bg-primary-50' : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                }`
              }
            >
              Registration
            </NavLink>

            <MobileDropdown label="Plan Travel" items={planTravel} onClose={closeMenu} />

            <NavLink
              to="/gallery"
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'text-primary font-semibold bg-primary-50' : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive ? 'text-primary font-semibold bg-primary-50' : 'text-gray-700 hover:text-primary hover:bg-primary-50'
                }`
              }
            >
              Contact
            </NavLink>

            <a
              href="https://cmt3.research.microsoft.com/CGCON2026"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 btn-accent text-sm text-center"
            >
              Register Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
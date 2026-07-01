import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaLinkedin } from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Conference', to: '/about' },
  { label: 'Conference Tracks', to: '/tracks' },
  { label: 'Important Dates', to: '/dates' },
  { label: 'Registration', to: '/registration' },
  { label: 'Submission', to: '/submission' },
  { label: 'Committee', to: '/committee' },
  { label: 'Venue', to: '/venue' },
  { label: 'Contact', to: '/contact' },
];

const downloads = [
  { label: 'IEEE Paper Template', href: '#' },
  { label: 'Conference Brochure', href: '#' },
  { label: 'Registration Form', href: '#' },
  { label: 'Call For Papers', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand column */}
        <div className="lg:col-span-1">
          <h3 className="text-white font-bold text-lg mb-1">IEEE CGCON 2027</h3>
          <p className="text-primary text-sm font-medium mb-3">
            First International IEEE Chhattisgarh Conference
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Intelligent Computing, Sustainable Energy and Smart Industrial Automation.
            Organized by Dept. of EED &amp; IT, NIT Raipur.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Hybrid Conference &bull; 2–4 Feb 2027
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Downloads */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Downloads</h4>
          <ul className="space-y-2">
            {downloads.map((d) => (
              <li key={d.label}>
                <a
                  href={d.href}
                  className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                >
                  ↓ {d.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Submission Portal</h4>
            <a
              href="https://cmt3.research.microsoft.com/CGCON2026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light hover:text-blue-300 text-sm transition-colors"
            >
              CMT Microsoft Research Portal ↗
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">Contact</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-2 text-sm">
              <FaMapMarkerAlt className="text-primary mt-0.5 shrink-0" />
              <span className="text-gray-400">
                NIT Raipur, G.E. Road,<br />Raipur, Chhattisgarh – 492010, India
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaEnvelope className="text-primary shrink-0" />
              <a href="mailto:cgcon@nitrr.ac.in" className="text-gray-400 hover:text-primary transition-colors">
                cgcon@nitrr.ac.in
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaPhone className="text-primary shrink-0" />
              <span className="text-gray-400">+91 9425852654</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaGlobe className="text-primary shrink-0" />
              <a
                href="https://www.nitrr.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                www.nitrr.ac.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-5 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2027 IEEE CGCON 2027. All rights reserved. | National Institute of Technology Raipur</p>
          <a
            href="https://www.nitrr.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Official NIT Raipur Website →
          </a>
        </div>
      </div>
    </footer>
  );
}

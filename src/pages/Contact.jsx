import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">Get In Touch</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">Contact Us</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Have questions about IEEE CGCON 2027? We'd love to hear from you.
        </p>
      </div>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-xl font-bold text-gray-800 mb-5">Conference Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                    <FaEnvelope className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase">Email</p>
                    <a href="mailto:cgcon@nitrr.ac.in" className="text-accent hover:underline font-medium">
                      cgcon@nitrr.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase">Address</p>
                    <p className="text-gray-700 text-sm">
                      National Institute of Technology Raipur<br />
                      G.E. Road, Raipur, Chhattisgarh – 492010, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                    <FaGlobe className="text-primary text-sm" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase">Website</p>
                    <a
                      href="https://www.nitrr.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      www.nitrr.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Organizing Secretaries */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-xl font-bold text-gray-800 mb-5">Organizing Secretaries</h2>
              <div className="space-y-4">
                {[
                  { name: 'Prof. Anamika Yadav', role: 'Professor, EED, NIT Raipur', phone: '9425852654' },
                  { name: 'Prof. Ebha Koley', role: 'Professor, EED, NIT Raipur', phone: '9827215396' },
                  { name: 'Dr. Mridu Sahu', role: 'Associate Professor, IT, NIT Raipur', phone: '9826501139' },
                  { name: 'Dr. Haripriya', role: 'Assistant Professor, EED, NIT Raipur', phone: '9948226112' },
                ].map((sec) => (
                  <div key={sec.name} className="flex items-start justify-between border-b border-gray-50 pb-3 gap-4">
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{sec.name}</p>
                      <p className="text-xs text-gray-500">{sec.role}</p>
                    </div>
                    <a
                      href={`tel:+91${sec.phone}`}
                      className="flex items-center gap-1.5 text-accent text-sm font-medium hover:underline shrink-0"
                    >
                      <FaPhone size={11} />
                      +91 {sec.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-xl font-bold text-gray-800 mb-5">Send Us a Message</h2>

              {submitted && (
                <div className="mb-4 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 text-sm flex items-center gap-2">
                   Message sent! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. John Doe"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@university.edu"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g., Query about paper submission"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-accent w-full justify-center">
                  <FaPaperPlane size={14} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import TimelineItem from '../components/ui/TimelineItem';
import { importantDates } from '../data/dates';

export default function Dates() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">Schedule</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">Important Dates</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Mark your calendar — key milestones for IEEE CGCON 2027
        </p>
      </div>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-8">Timeline at a Glance</h2>
            <div className="space-y-0">
              {importantDates.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Sidebar info */}
          <div className="space-y-6">
            {/* Submission info */}
            <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
              <h3 className="font-bold text-gray-800 text-lg mb-4"> Submission Information</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  Submit via the Microsoft CMT portal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  IEEE format only — maximum 6 pages
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  Both Research and Review articles accepted
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">→</span>
                  At least one author must register for the paper to be included
                </li>
              </ul>
              <a
                href="https://cmt3.research.microsoft.com/CGCON2026"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 btn-accent text-sm inline-flex"
              >
                Go to Submission Portal →
              </a>
            </div>

            {/* Payment reminder */}
            <div className="bg-orange-50 rounded-2xl border border-primary/20 p-7">
              <h3 className="font-bold text-gray-800 text-lg mb-3"> Registration Reminder</h3>
              <p className="text-sm text-gray-600 mb-2">
                Pay the registration fee directly to the bank account and send the filled registration form
                with payment proof to <a href="mailto:cgcon@nitrr.ac.in" className="text-accent underline">cgcon@nitrr.ac.in</a> before <strong>31st December 2026</strong>.
              </p>
              <p className="text-xs text-gray-400">*GST applicable as per Government Directives</p>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
              <h3 className="font-bold text-gray-800 text-lg mb-4"> Contact Organizing Secretaries</h3>
              <div className="space-y-3 text-sm">
                {[
                  { name: 'Prof. Anamika Yadav', phone: '9425852654' },
                  { name: 'Prof. Ebha Koley', phone: '9827215396' },
                  { name: 'Dr. Mridu Sahu', phone: '9826501139' },
                  { name: 'Dr. Haripriya', phone: '9948226112' },
                ].map((sec) => (
                  <div key={sec.name} className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{sec.name}</span>
                    <a href={`tel:+91${sec.phone}`} className="text-accent hover:underline">
                      +91 {sec.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

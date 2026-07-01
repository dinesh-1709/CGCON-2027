import { FaFileDownload, FaPaperPlane, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

export default function Submission() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">Call For Papers</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">Paper Submission</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Submit your original research for IEEE CGCON 2027 via the Microsoft CMT portal
        </p>
      </div>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Submission types */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-xl font-bold text-gray-800 mb-5">Submission Types</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-orange-50 rounded-xl p-5 border border-primary/20">
                  <span className="text-3xl"></span>
                  <h3 className="font-bold text-gray-800 mt-3 mb-2">Research Articles</h3>
                  <p className="text-sm text-gray-500">
                    Original research contributions presenting novel findings, methods, or experiments in the conference scope.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-5 border border-accent/20">
                  <span className="text-3xl"></span>
                  <h3 className="font-bold text-gray-800 mt-3 mb-2">Review Articles</h3>
                  <p className="text-sm text-gray-500">
                    Critical evaluation of existing studies, identification of research gaps and future directions within the conference scope.
                  </p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-xl font-bold text-gray-800 mb-5">Instructions for Authors</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: '',
                    title: 'IEEE Format Only',
                    desc: 'Papers must be submitted in the IEEE two-column format. Papers in other formats will not be considered.',
                  },
                  {
                    icon: '',
                    title: 'Page Limit',
                    desc: 'Maximum 6 pages. Papers exceeding 6 pages will be rejected without review.',
                  },
                  {
                    icon: '',
                    title: 'Oral Presentation',
                    desc: 'Authors of accepted papers will be invited for oral presentation — online or in-person.',
                  },
                  {
                    icon: '',
                    title: 'IEEE Xplore (Scopus Indexed)',
                    desc: 'All registered and presented papers will be submitted to IEEE for inclusion in IEEE Xplore.',
                  },
                  {
                    icon: '',
                    title: 'Mandatory Registration',
                    desc: 'At least one author per paper must register. Unregistered papers will not be published.',
                  },
                  {
                    icon: '',
                    title: 'Presentation Modes',
                    desc: 'Details of online and offline presentation modes will be made available on the conference website.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Submit CTA */}
            <div className="bg-primary rounded-2xl p-6 text-white text-center">
              <FaPaperPlane className="text-4xl mx-auto mb-3 opacity-90" />
              <h3 className="font-bold text-xl mb-2">Ready to Submit?</h3>
              <p className="text-white/80 text-sm mb-5">
                Use the Microsoft CMT portal for paper submission.
              </p>
              <a
                href="https://cmt3.research.microsoft.com/CGCON2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary font-bold px-5 py-2.5 rounded-lg hover:bg-orange-50 transition-colors w-full justify-center"
              >
                Submit Paper <FaExternalLinkAlt size={12} />
              </a>
            </div>

            {/* Template */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
              <FaFileDownload className="text-4xl text-accent mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">IEEE Paper Template</h3>
              <p className="text-sm text-gray-500 mb-4">
                Download the official IEEE conference paper template.
              </p>
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-sm w-full justify-center"
              >
                Download Template
              </a>
            </div>

            {/* Deadlines */}
            <div className="bg-orange-50 rounded-2xl border border-primary/20 p-6">
              <h3 className="font-bold text-gray-800 mb-4"> Key Deadlines</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Submission Opens</span>
                  <span className="font-semibold text-gray-800">1 Jul 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Submission Deadline</span>
                  <span className="font-semibold text-primary">30 Oct 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Acceptance Notice</span>
                  <span className="font-semibold text-gray-800">30 Nov 2026</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Camera Ready</span>
                  <span className="font-semibold text-gray-800">15 Dec 2026</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm text-sm">
              <h3 className="font-bold text-gray-800 mb-2"> Questions?</h3>
              <a href="mailto:cgcon@nitrr.ac.in" className="text-accent hover:underline break-all">
                cgcon@nitrr.ac.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

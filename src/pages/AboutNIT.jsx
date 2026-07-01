import SectionWrapper from '../components/ui/SectionWrapper';
import nitCampusImg from '../assets/campus.png';

export default function AboutNIT() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">Institution</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">About NIT Raipur</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          National Institute of Technology Raipur — A premier institute of national importance
        </p>
      </div>

      {/* History + image */}
      <SectionWrapper className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">Institute History</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>National Institute of Technology Raipur</strong> (formerly Government Engineering College Raipur),
              situated in the capital of the newly incepted state of Chhattisgarh, has proven to be
              "avant-garde" in the field of science and technology over the past few decades in this region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              With the memory of the foundation ceremony by our President Hon'ble Dr. Rajendra Prasad on
              <strong> 14th September 1956</strong>, the institute started with two departments — Metallurgical and
              Mining Engineering. The inauguration of the Institute building was done by our Prime Minister
              Hon'ble Pt. Jawahar Lal Nehru on <strong>14th March 1963</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From <strong>1st December 2005</strong>, the institute became the National Institute of Technology.
              The institution has grown in tandem with the major surrounding industries — the Bhilai Steel Plant,
              SECL-BALCO, and NTPC Korba.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-xl scale-105" />
              <img
                src={nitCampusImg}
                alt="NIT Raipur Campus"
                className="relative rounded-2xl shadow-xl object-cover w-full max-w-md border-4 border-white"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Key Facts */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="tag">Quick Facts</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">NIT Raipur at a Glance</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Established', value: '1956', icon: '️' },
              { label: 'NIT Status Since', value: '2005', icon: '' },
              { label: 'UG Programs', value: '12', icon: '' },
              { label: 'PG Programs', value: '6+', icon: '' },
            ].map((fact) => (
              <div key={fact.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <span className="text-3xl">{fact.icon}</span>
                <p className="text-3xl font-bold text-gray-800 mt-3">{fact.value}</p>
                <p className="text-sm text-gray-500 mt-1">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <SectionWrapper className="section-pad">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="tag">Academic Excellence</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">Research & Academics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '', title: 'Research Focus', desc: 'Active research in engineering, applied sciences, and interdisciplinary fields with strong industry collaborations.' },
              { icon: '', title: 'Industry Ties', desc: 'Close collaboration with major industries including Bhilai Steel Plant, SECL-BALCO and NTPC Korba.' },
              { icon: '', title: 'International Links', desc: 'Academic partnerships and MoUs with leading universities and institutes across the globe.' },
              { icon: '', title: 'Innovation Hub', desc: 'State-of-the-art laboratories, incubation center and facilities supporting cutting-edge research.' },
            ].map((item) => (
              <div key={item.title} className="bg-orange-50 rounded-xl p-6 flex items-start gap-4">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Address */}
      <section className="bg-primary py-10 px-4 text-white text-center">
        <h3 className="text-xl font-bold mb-2">Campus Address</h3>
        <p className="text-white/90">National Institute of Technology Raipur</p>
        <p className="text-white/80 text-sm">G.E. Road, Raipur, Chhattisgarh – 492010, India</p>
        <a
          href="https://www.nitrr.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 btn-outline-white text-sm px-5 py-2"
        >
          Visit Official Website
        </a>
      </section>
    </div>
  );
}

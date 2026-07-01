import SectionWrapper from '../components/ui/SectionWrapper';
import nitCampusImg from '../assets/campus.png';

export default function About() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">About</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">About the Conference</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          IEEE CGCON 2027 — Bridging Intelligent Computing, Sustainable Energy & Smart Industrial Automation
        </p>
      </div>

      {/* Overview */}
      <SectionWrapper className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-5">Conference Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The <strong>First International IEEE Chhattisgarh Conference (IEEE CGCON 2027)</strong> is organized
              by the Department of Electrical Engineering and the Department of Information Technology,
              National Institute of Technology Raipur. The conference will be held in <strong>Hybrid Mode</strong> from
              <strong> 2nd to 4th February 2027</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              CGCON 2027 provides a platform for students, academicians, researchers, scientists and
              practicing engineers to exchange knowledge on recent trends, theories and practices in
              Power Systems, Power Electronics, Machine Drives, Control Systems and Computational Technologies.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Emphasis will be placed on promotion of new and renewable sources of power, Smart Grid and
              related cyber-physical systems. The conference features invited talks and keynote addresses
              from eminent professors and scientists from across the world, pre-conference workshops and
              technical paper presentations.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl scale-105" />
              <img
                src={nitCampusImg}
                alt="NIT Raipur Campus"
                className="relative rounded-2xl shadow-xl object-cover w-full max-w-md border-4 border-white"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Three Pillars */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="tag">Scope</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">Three Pillars of CGCON 2027</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '',
                title: 'Intelligent Computing',
                desc: 'Artificial Intelligence, Machine Learning, Deep Learning, Data Analytics, Cloud Computing, IoT, Blockchain, Quantum Computing, AR/VR, Digital Twins, and Human-AI Interaction.',
                color: 'border-t-4 border-primary',
              },
              {
                icon: '',
                title: 'Sustainable Energy',
                desc: 'Renewable Energy, Green Technology, Smart Grid, Power Systems, Power Electronics, High Voltage Technologies, HVDC, FACTS Devices, and Energy-Efficient Algorithms.',
                color: 'border-t-4 border-green-400',
              },
              {
                icon: '️',
                title: 'Smart Industrial Automation',
                desc: 'AI-driven Industrial Automation, Intelligent Robotics, Industry 4.0 & 5.0, Instrumentation & Control, Signal & Image Processing, AI for Smart Cities, and Digital Twins.',
                color: 'border-t-4 border-accent',
              },
            ].map((pillar) => (
              <div key={pillar.title} className={`bg-white rounded-2xl p-7 shadow-sm ${pillar.color}`}>
                <span className="text-4xl">{pillar.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-4 mb-3">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <SectionWrapper className="section-pad">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="tag">Objectives</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-3">Conference Objectives</h2>
          </div>
          <div className="space-y-4">
            {[
              'Provide a forum for researchers, academics, and industry professionals to share their work.',
              'Promote interdisciplinary research at the intersection of computing and electrical engineering.',
              'Encourage innovation in renewable energy and sustainable power solutions.',
              'Facilitate collaboration between Indian institutions and international research groups.',
              'Disseminate knowledge through keynote talks, workshops, and technical sessions.',
              'Recognize outstanding research contributions with awards across all tracks.',
              'Offer students and young researchers exposure to cutting-edge research challenges.',
            ].map((obj, i) => (
              <div key={i} className="flex items-start gap-4 bg-orange-50 rounded-xl p-4">
                <span className="w-7 h-7 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Key Info */}
      <section className="bg-primary py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {[
            { label: 'Conference Mode', value: 'Hybrid' },
            { label: 'Venue', value: 'NIT Raipur' },
            { label: 'Organizing Depts.', value: 'EED & IT' },
            { label: 'Indexed In', value: 'IEEE Xplore' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-white/80 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

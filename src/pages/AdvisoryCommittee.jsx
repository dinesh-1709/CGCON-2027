import { motion } from 'framer-motion';
import CommitteeMember from '../components/ui/CommitteeMember';
import { committee } from '../data/committee';

export default function AdvisoryCommittee() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">People</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">Advisory Committee</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Distinguished advisors guiding IEEE CGCON 2027
        </p>
      </div>

      <section className="section-pad">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
            Advisory Board Members
            <span className="ml-auto text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
              {committee.advisoryBoard.length} members
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {committee.advisoryBoard.map((m, i) => (
              <CommitteeMember key={i} name={m.name} role={m.role} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

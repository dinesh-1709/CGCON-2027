import { motion } from 'framer-motion';
import CommitteeMember from '../components/ui/CommitteeMember';
import { committee } from '../data/committee';

function CommitteeSection({ title, members }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
        {title}
        <span className="ml-auto text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
          {members.length} member{members.length !== 1 ? 's' : ''}
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {members.map((m, i) => (
          <CommitteeMember key={i} name={m.name} role={m.role} />
        ))}
      </div>
    </div>
  );
}

export default function TechnicalCommittee() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">People</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">Technical Program Committee</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Technical program experts for IEEE CGCON 2027
        </p>
      </div>

      <section className="section-pad">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
            Technical Program Committee Members
            <span className="ml-auto text-xs font-normal text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
              {committee.technicalProgramCommittee.length} members
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {committee.technicalProgramCommittee.map((m, i) => (
              <CommitteeMember key={i} name={m.name} role={m.role} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

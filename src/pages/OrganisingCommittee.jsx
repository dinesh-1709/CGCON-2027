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
          <CommitteeMember key={i} name={m.name} role={m.role} phone={m.phone} />
        ))}
      </div>
    </div>
  );
}

export default function OrganisingCommittee() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">People</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">Organising Committee</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Meet the distinguished team organizing IEEE CGCON 2027
        </p>
      </div>

      <section className="section-pad">
        <CommitteeSection title="Chief Patron" members={committee.chiefPatron} />
        <CommitteeSection title="Patrons" members={committee.patrons} />
        <CommitteeSection title="Co-Patrons" members={committee.coPatrons} />
        <CommitteeSection title="General Chair" members={committee.generalChair} />
        <CommitteeSection title="Organizing Secretaries" members={committee.organizingSecretaries} />
        <CommitteeSection title="Honorary Chairs" members={committee.honoraryChairs} />
        <CommitteeSection title="Technical Program Chairs" members={committee.technicalProgramChairs} />
        <CommitteeSection title="Publication Chairs" members={committee.publicationChairs} />
                <CommitteeSection title="Treasurer" members={committee.treasurer} />
        <CommitteeSection title="Publicity Chairs" members={committee.publicityChairs} />
        <CommitteeSection title="Finance Chairs" members={committee.financeChairs} />
        <CommitteeSection title="Track Chairs" members={committee.trackChairs} />
      </section>
    </div>
  );
}

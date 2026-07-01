import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CommitteeMember from '../components/ui/CommitteeMember';
import { committee } from '../data/committee';

function CommitteeSection({ title, members, emoji, expanded = true }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
        <span>{emoji}</span> {title}
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

export default function Committee() {
  const [showFull, setShowFull] = useState(false);

  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">People</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">Organizing Committee</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Meet the distinguished team organizing IEEE CGCON 2027
        </p>
      </div>

      <section className="section-pad">
        {/* Core committee (always visible) */}
        <CommitteeSection title="Chief Patron" members={committee.chiefPatron} emoji="" />
        <CommitteeSection title="Patrons" members={committee.patrons} emoji="️" />
        <CommitteeSection title="Co-Patrons" members={committee.coPatrons} emoji="" />
        <CommitteeSection title="General Chair" members={committee.generalChair} emoji="" />
        <CommitteeSection title="Organizing Secretaries" members={committee.organizingSecretaries} emoji="" />

        {/* Expandable full committee */}
        <AnimatePresence>
          {showFull && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden"
            >
              <CommitteeSection title="Honorary Chairs" members={committee.honoraryChairs} emoji="" />
              <CommitteeSection title="Technical Program Chairs" members={committee.technicalProgramChairs} emoji="" />
              <CommitteeSection title="Publication Chairs" members={committee.publicationChairs} emoji="" />
              <CommitteeSection title="Publicity Chairs" members={committee.publicityChairs} emoji="" />
              <CommitteeSection title="Finance Chairs" members={committee.financeChairs} emoji="" />
              <CommitteeSection title="Track Chairs" members={committee.trackChairs} emoji="" />

              {/* Advisory board */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <span></span> Advisory Board Members
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

              {/* TPC */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
                  <span>️</span> Technical Program Committee
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <div className="text-center mt-4">
          <button
            onClick={() => setShowFull(!showFull)}
            className="btn-outline"
          >
            {showFull ? '▲ Show Less' : '▼ View Full Committee'}
          </button>
        </div>
      </section>
    </div>
  );
}

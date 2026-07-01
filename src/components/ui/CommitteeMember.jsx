import { FaUserTie } from 'react-icons/fa';

export default function CommitteeMember({ name, role, phone }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl border border-gray-200 p-5 hover:border-primary/40 hover:shadow-md transition-all duration-200">
      <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center shrink-0 shadow-sm border border-primary/10">
        <FaUserTie className="text-primary text-2xl" />
      </div>
      <div>
        <p className="font-bold text-gray-800 text-lg leading-snug">{name}</p>
        <p className="text-gray-500 text-sm md:text-base mt-1 leading-snug">{role}</p>
        {phone && (
          <a
            href={`tel:+91${phone}`}
            className="text-accent text-sm font-medium mt-1.5 hover:underline block"
          >
             +91 {phone}
          </a>
        )}
      </div>
    </div>
  );
}

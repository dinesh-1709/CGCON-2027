import RegistrationCard from '../components/ui/RegistrationCard';
import { registrationCategories, bankDetails } from '../data/registration';

export default function Registration() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">Join Us</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">Registration</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Register for IEEE CGCON 2027 — Deadline: 31st December 2026
        </p>
      </div>

      {/* Fee cards */}
      <section className="section-pad">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800">Registration Fees</h2>
          <p className="text-gray-500 text-sm mt-1">All fees are exclusive of GST. GST will be applied as per Government Directives.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {registrationCategories.map((cat, i) => (
            <RegistrationCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="tag">How to Register</span>
            <h2 className="text-2xl font-bold text-gray-800 mt-3">Registration Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', icon: '', title: 'Make Payment', desc: 'Pay the registration fee directly to the bank account below via online transaction.' },
              { step: '02', icon: '', title: 'Fill the Form', desc: 'Complete the Registration Form available on the conference website.' },
              { step: '03', icon: '', title: 'Send to Email', desc: 'Email the filled form + payment proof to cgcon@nitrr.ac.in before 31 December 2026.' },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 shadow-sm text-center border border-gray-100 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Step {s.step}
                </span>
                <span className="text-4xl">{s.icon}</span>
                <h3 className="font-bold text-gray-800 mt-3 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="section-pad">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <span className="tag">Payment Details</span>
            <h2 className="text-2xl font-bold text-gray-800 mt-3">Bank Account Details</h2>
          </div>
          <div className="bg-white rounded-2xl border-2 border-primary/20 shadow-sm overflow-hidden">
            <div className="bg-primary px-6 py-4">
              <p className="text-white font-semibold">Mode of Payment: Online Transaction Only</p>
            </div>
            <div className="px-6 py-6 space-y-4">
              {[
                { label: 'Account Name', value: bankDetails.accountName },
                { label: 'Account Number', value: bankDetails.accountNo },
                { label: 'IFSC Code', value: bankDetails.ifsc },
                { label: 'Bank', value: bankDetails.bank },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-sm font-semibold text-gray-500">{item.label}</span>
                  <span className="text-sm font-bold text-gray-800">{item.value}</span>
                </div>
              ))}
              <p className="text-xs text-gray-400 pt-2">* {bankDetails.note}</p>
            </div>
          </div>

          <div className="mt-6 bg-orange-50 rounded-xl p-5 border border-primary/20 text-sm text-gray-600">
            <strong> Important:</strong> After payment, send the filled registration form along with payment
            proof to <a href="mailto:cgcon@nitrr.ac.in" className="text-accent underline font-medium">cgcon@nitrr.ac.in</a>.
            At least one author per paper must register for paper inclusion in IEEE Xplore.
          </div>
        </div>
      </section>
    </div>
  );
}

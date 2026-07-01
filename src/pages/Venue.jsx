export default function Venue() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-gradient-to-r from-orange-50 to-rose-50 py-14 px-4 text-center border-b border-gray-100">
        <span className="tag">Location</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">Conference Venue</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          National Institute of Technology Raipur, Chhattisgarh, India
        </p>
      </div>

      <section className="section-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-80 lg:h-auto min-h-80">
            <iframe
              title="NIT Raipur Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.2!2d81.6015!3d21.2507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd6a1f0e1f0f%3A0x6c4e2e6be0b2e3d2!2sNational%20Institute%20of%20Technology%20Raipur!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-xl font-bold text-gray-800 mb-5">Venue Details</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">️</span>
                  <div>
                    <p className="font-semibold text-gray-800">National Institute of Technology Raipur</p>
                    <p className="text-sm text-gray-500">Department of Electrical Engineering</p>
                    <p className="text-sm text-gray-500">Department of Information Technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0"></span>
                  <div>
                    <p className="font-medium text-gray-700">G.E. Road, Raipur</p>
                    <p className="text-sm text-gray-500">Chhattisgarh – 492010, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0"></span>
                  <div>
                    <a
                      href="https://www.nitrr.ac.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      www.nitrr.ac.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
              <h2 className="text-xl font-bold text-gray-800 mb-5">How to Reach</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <span className="text-2xl shrink-0">️</span>
                  <div>
                    <p className="font-semibold text-gray-800">By Air</p>
                    <p className="text-sm text-gray-600">
                      <strong>Swami Vivekananda Airport, Raipur</strong> — approx. 15 km from NIT Raipur.
                      Well-connected to major Indian cities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <span className="text-2xl shrink-0"></span>
                  <div>
                    <p className="font-semibold text-gray-800">By Train</p>
                    <p className="text-sm text-gray-600">
                      <strong>Raipur Junction Railway Station</strong> — approx. 5 km from NIT Raipur.
                      Connected to all major cities via South-East Central Railway.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                  <span className="text-2xl shrink-0"></span>
                  <div>
                    <p className="font-semibold text-gray-800">By Road</p>
                    <p className="text-sm text-gray-600">
                      NIT Raipur is located on the G.E. Road, one of the major national highways
                      running through Raipur city center.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hybrid note */}
      <section className="bg-primary py-10 px-4 text-white text-center">
        <h3 className="text-xl font-bold mb-2"> Hybrid Conference</h3>
        <p className="text-white/80 max-w-xl mx-auto text-sm">
          CGCON 2027 will be conducted in hybrid mode. Participants may attend physically at NIT Raipur
          or join online from anywhere in the world. Presentation mode details will be shared on the website.
        </p>
      </section>
    </div>
  );
}

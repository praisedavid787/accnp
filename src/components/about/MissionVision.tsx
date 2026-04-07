export default function MissionVision() {
  return (
    <section className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:gap-6">
        {/* Mission + Vision cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-blue-50 rounded-xl p-5 sm:p-6 md:p-8">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-[#00213D] text-base sm:text-lg font-bold mb-2 sm:mb-3">Our Mission</h3>
            <p className="text-[#565656] text-sm leading-relaxed">
              To empower businesses and individuals with accurate financial information, strategic insight, and dependable
              partnership that drives sustainable growth.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 sm:p-6 md:p-8">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
              <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-[#00213D] text-base sm:text-lg font-bold mb-2 sm:mb-3">Our Vision</h3>
            <p className="text-[#565656] text-sm leading-relaxed">
              To become a trusted leader in accounting and financial consulting across Nigeria and beyond—known for precision,
              integrity, and measurable impact.
            </p>
          </div>
        </div>

        {/* Values card */}
        <div className="bg-blue-50 rounded-xl p-5 sm:p-6 md:p-8">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
            <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-[#00213D] text-base sm:text-lg font-bold mb-4 sm:mb-6">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { name: "Accuracy", desc: "Precision is non-negotiable. Every number matters." },
              { name: "Integrity", desc: "We operate with transparency and strict confidentiality." },
              { name: "Partnership", desc: "Not just a service provider, but a strategic ally." },
              { name: "Growth", desc: "Focus on long-term value creation, not short-term fixes." },
            ].map(({ name, desc }) => (
              <div key={name}>
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-brand-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#00213D] text-sm font-semibold">{name}</span>
                </div>
                <p className="text-[#565656] text-sm pl-5 sm:pl-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

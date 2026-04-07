import Image from "next/image";

const services = [
  {
    title: "Accounting & Financial Reporting",
    description: "Clear, compliant, and decision-ready financial statements.",
    bullets: [
      "Preparation of financial statements",
      "Profit & tax statements",
      "Balance sheets",
      "Cash flow analysis",
      "Financial performance reporting",
      "Compliance with relevant regulations",
    ],
    imageLeft: false,
    image: "/assets/service-1.jpg",
  },
  {
    title: "Bookkeeping Services",
    description: "Organised up-to-date records that keep your business running smoothly.",
    bullets: [
      "Recording daily financial transactions",
      "Bank and account reconciliation",
      "Accounts payable and receivable management",
      "Financial data organization and maintenance",
    ],
    imageLeft: true,
    image: "/assets/service-2.jpg",
  },
  {
    title: "Tax Planning & Preparation",
    description: "Minimise risk. Maximise efficiency. Stay compliant.",
    bullets: [
      "Business and personal tax preparation",
      "Tax filing and compliance",
      "Strategic tax planning",
      "Regulatory updates and guidance",
    ],
    imageLeft: false,
    image: "/assets/service-3.jpg",
  },
  {
    title: "Audit & Assurance Services",
    description: "Independent, thorough, and reliable audit services you can trust.",
    bullets: [
      "Statutory audits",
      "Internal audits",
      "Forensic Investigations",
      "Internal Control over Financial Reporting (ICFR)",
    ],
    imageLeft: true,
    image: "/assets/service-4.jpg",
  },
  {
    title: "Consulting & Advisory",
    description: "Strategic insights that help you grow with confidence.",
    bullets: [
      "Recording daily financial transactions",
      "Bank and account reconciliation",
      "Accounts payable and receivable management",
      "Financial data organization and maintenance",
    ],
    imageLeft: false,
    image: "/assets/service-5.png",
  },
];

export default function Services() {
  return (
    <section className="pt-10 sm:pt-12 md:pt-16 pb-20 sm:pb-24 md:pb-45" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-[20px] mb-8 sm:mb-10 md:mb-[73px]">
          <h2 className="text-[36px] font-semibold leading-[132%] text-brand-primary flex-1">Our Core Services</h2>
          <p className="text-[#565656] text-[18px] font-light flex-1 leading-relaxed">
            Whether you&apos;re a startup or an established company, we
            provide the structure and insight your finances need for
            sustainable growth.
          </p>
        </div>

        {/* Service cards */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-[70px]">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-brand-services rounded-[10px] px-4 py-6 md:px-[33px] md:py-[48px] flex flex-col md:flex-row gap-3 md:gap-4"
            >
              {service.imageLeft && (
                <div className="w-full md:w-[55%] h-40 sm:h-48 md:h-auto relative flex-shrink-0 rounded-[10px] overflow-hidden">
                  {service.image ? (
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Image</span>
                    </div>
                  )}
                </div>
              )}
              <div className="flex-1 py-4 md:py-[48px] md:px-4">
                <h3 className="font-semibold text-[20px] leading-[132%] text-[#00213D] mb-1">{service.title}</h3>
                <p className="text-[#565656] text-[16px] font-light leading-[132%] mb-4">{service.description}</p>
                <ul className="space-y-1.5 pl-3">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[16px] font-light leading-[132%] text-[#565656]">
                      <span className="text-[#565656] mt-0.5 flex-shrink-0">•</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              {!service.imageLeft && (
                <div className="w-full md:w-[55%] h-40 sm:h-48 md:h-auto relative flex-shrink-0 rounded-[10px] overflow-hidden order-first md:order-last">
                  {service.image ? (
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Image coming soon</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

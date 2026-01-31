"use client";

import React from "react";

const certifications = [
  {
    id: 1,
    title: "AINCAT-2025",
    issuer: "Naukri Campus",
    description: "Comprehensive assessment test for campus placements and skill evaluation",
    icon: "🎯",
    category: "Assessment"
  },
  {
    id: 2,
    title: "Ethical Hacking & Pen Testing",
    issuer: "C-DAC",
    description: "Certified in ethical hacking methodologies and penetration testing techniques",
    icon: "🔒",
    category: "Cybersecurity"
  },
  {
    id: 3,
    title: "UAV Simulators & Sensors",
    issuer: "C-DAC",
    description: "Proficiency in UAV technology, simulators, and sensor integration",
    icon: "🚁",
    category: "Technology"
  },
  {
    id: 4,
    title: "SQL (Basic)",
    issuer: "HackerRank",
    description: "Database fundamentals and SQL query proficiency certification",
    icon: "🗄️",
    category: "Database"
  },
];

const Certifications = () => {
  return (
    <section className="py-20 w-full">
      <h1 className="heading">
        <span className="text-purple">Certifications</span>
      </h1>
      <p className="text-white-200 text-center mt-5 mb-10 max-w-2xl mx-auto">
        Validated skills and expertise through recognized certifications
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="relative group p-6 rounded-2xl border border-white/[0.1] bg-black-100 hover:bg-black-200 transition-all duration-300 hover:shadow-xl hover:shadow-purple/20"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="absolute top-4 right-4 opacity-20">
              <div className="text-2xl">{cert.icon}</div>
            </div>

            <div className="relative z-10">
              <div className="text-purple/50 font-mono text-sm mb-3">
                0{cert.id}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple transition-colors">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-purple font-semibold text-sm">
                  {cert.issuer}
                </span>
                <span className="text-white-200 text-xs bg-black-200 px-2 py-1 rounded-full">
                  {cert.category}
                </span>
              </div>

              <p className="text-white-200 text-sm leading-relaxed">
                {cert.description}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-green-500 text-sm">✓ Verified</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-purple/0 via-purple/5 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Certifications;

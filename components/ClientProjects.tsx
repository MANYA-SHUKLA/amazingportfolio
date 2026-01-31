"use client";

import React from "react";

const clientProjects = [
  { id: 1, name: "Foodies Cafe", category: "Restaurant & Food Service" },
  { id: 2, name: "Codyssey Services", category: "Tech Services" },
  { id: 3, name: "Telewave Services", category: "Telecommunications" },
  { id: 4, name: "Freelancerwala", category: "Freelance Platform" },
  { id: 5, name: "Kosi Naturals", category: "Natural Products" },
];

const ClientProjects = () => {
  return (
    <section className="py-20 w-full">
      <h1 className="heading">
        Live <span className="text-purple">Client Projects</span>
      </h1>
      <p className="text-white-200 text-center mt-5 mb-10 max-w-2xl mx-auto">
        Trusted by businesses to deliver production-ready web solutions
      </p>

      <div className="flex flex-col items-center gap-8 mt-12">
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {["Next.js", "TypeScript", "Tailwind CSS", "Nodemailer"].map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-black-200 border border-white/[0.1] text-white-100 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {clientProjects.map((project) => (
            <div
              key={project.id}
              className="relative group p-6 rounded-2xl border border-white/[0.1] bg-black-100 hover:bg-black-200 transition-all duration-300 hover:shadow-xl hover:shadow-purple/20"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-purple rounded-tr-lg"></div>
              </div>

              <div className="relative z-10">
                <div className="text-purple/50 font-mono text-sm mb-3">
                  0{project.id}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple transition-colors">
                  {project.name}
                </h3>

                <p className="text-white-200 text-sm">
                  {project.category}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs text-green-500 font-medium">Live & Active</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-purple/0 via-purple/5 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 px-6 py-3 rounded-full border border-purple/30 bg-purple/5">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-purple to-blue-500 border-2 border-black-100 flex items-center justify-center text-xs font-bold"
              >
                {clientProjects[i - 1]?.name.charAt(0)}
              </div>
            ))}
          </div>
          <span className="text-white-100 text-sm font-medium">
            5+ Happy Clients & Growing
          </span>
        </div>
      </div>
    </section>
  );
};

export default ClientProjects;

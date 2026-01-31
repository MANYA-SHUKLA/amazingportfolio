"use client";

import React from "react";

const services = [
  {
    id: 1,
    icon: "🌐",
    title: "Custom Websites",
    description:
      "Responsive, high-performance websites tailored to meet your goals.",
  },
  {
    id: 2,
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Beautiful, user-friendly designs that leave a lasting impression.",
  },
  {
    id: 3,
    icon: "🔍",
    title: "SEO Optimization",
    description:
      "Boost visibility and attract more traffic with expert SEO strategies.",
  },
  {
    id: 4,
    icon: "🛒",
    title: "E-commerce Solutions",
    description:
      "Scalable online stores with secure payments and seamless experiences.",
  },
  {
    id: 5,
    icon: "🛠️",
    title: "Maintenance & Hosting",
    description:
      "Keep your site secure, fast, and always up-to-date.",
  },
  {
    id: 6,
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Boost your website speed and performance for better user experience.",
  },
  {
    id: 7,
    icon: "🔗",
    title: "API Integration",
    description:
      "Integrate or build APIs to extend your website's capabilities.",
  },
  {
    id: 8,
    icon: "🎭",
    title: "Web Animations",
    description:
      "Bring your website to life with captivating animations.",
  },
];

const Services = () => {
  return (
    <section className="py-20 w-full" id="services">
      <h1 className="heading">
        Services <span className="text-purple">I Offer</span>
      </h1>
      <p className="text-white-200 text-center mt-5 mb-10 max-w-2xl mx-auto">
        I help businesses and individuals bring their ideas to life with
        professional, custom-built web solutions tailored to meet your goals.
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group p-6 rounded-2xl border border-white/[0.1] bg-black-100 hover:bg-black-200 transition-all duration-300 hover:shadow-xl hover:shadow-purple/20"
            style={{
              background: "rgb(4,7,29)",
            }}
          >
            <div className="absolute top-4 right-4 opacity-20">
              <span className="text-2xl">{service.icon}</span>
            </div>

            <div className="relative z-10">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple transition-colors">
                {service.title}
              </h3>
              <p className="text-white-200 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-purple/0 via-purple/5 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

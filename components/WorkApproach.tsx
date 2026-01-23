import React from "react";
import { Button } from "./ui/MovingBorders";

const approaches = [
  {
    id: 1,
    title: "Understanding & Planning",
    description:
      "I start by understanding project requirements, user needs, and business goals. Creating wireframes and defining the technical architecture ensures a solid foundation.",
    icon: "📋",
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description:
      "Crafting pixel-perfect UI/UX designs with attention to accessibility and user experience. Building interactive prototypes to validate ideas before development.",
    icon: "🎨",
  },
  {
    id: 3,
    title: "Development & Testing",
    description:
      "Writing clean, maintainable code following best practices. Implementing features iteratively with continuous testing and code reviews to ensure quality.",
    icon: "⚡",
  },
  {
    id: 4,
    title: "Deployment & Optimization",
    description:
      "Deploying applications with CI/CD pipelines, monitoring performance, and optimizing for speed, SEO, and scalability. Continuous improvements based on analytics.",
    icon: "🚀",
  },
];

const WorkApproach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Development Approach</span>
      </h1>
      <p className="text-white-200 text-center mt-5 mb-10 max-w-2xl mx-auto">
        A systematic, user-focused approach to building high-quality web applications
      </p>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {approaches.map((approach) => (
          <Button
            key={approach.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-6 py-8 md:p-8 lg:p-10 gap-4">
              <div className="flex items-center gap-4">
                <div className="text-5xl">{approach.icon}</div>
                <h2 className="text-start text-xl md:text-2xl font-bold">
                  {approach.title}
                </h2>
              </div>
              <p className="text-start text-white-100 font-normal text-base">
                {approach.description}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default WorkApproach;

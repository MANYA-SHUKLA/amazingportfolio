"use client";

import React from "react";

const achievements = [
  {
    id: 1,
    title: "GDG Women Tech Master",
    subtitle: "Campus Lead",
    description: "Leading technology initiatives and empowering women in tech at campus level",
    icon: "👩‍💻",
    category: "Leadership"
  },
  {
    id: 2,
    title: "250+ DSA Problems Solved",
    subtitle: "Algorithmic Excellence",
    description: "Mastered data structures and algorithms through consistent problem-solving practice",
    icon: "🧠",
    category: "Technical"
  },
  {
    id: 3,
    title: "Athletics Gold & Silver Medals",
    subtitle: "Sports Excellence",
    description: "Achieved athletic excellence demonstrating discipline and competitive spirit",
    icon: "🏅",
    category: "Sports"
  },
  {
    id: 4,
    title: "NCC IDC",
    subtitle: "Red Fort",
    description: "Participated in National Cadet Corps International Drill Competition at Red Fort",
    icon: "🇮🇳",
    category: "Service"
  },
];

const Achievements = () => {
  return (
    <section className="py-20 w-full">
      <h1 className="heading">
        <span className="text-purple">Achievements</span> & Community
      </h1>
      <p className="text-white-200 text-center mt-5 mb-10 max-w-2xl mx-auto">
        Recognition, leadership, and contributions beyond technical skills
      </p>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="relative group p-6 rounded-2xl border border-white/[0.1] bg-black-100 hover:bg-black-200 transition-all duration-300 hover:shadow-xl hover:shadow-purple/20"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="absolute top-4 right-4 opacity-20">
              <div className="text-3xl">{achievement.icon}</div>
            </div>

            <div className="relative z-10">
              <div className="text-purple/50 font-mono text-sm mb-3">
                0{achievement.id}
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple transition-colors">
                {achievement.title}
              </h3>

              <p className="text-purple font-medium text-sm mb-3">
                {achievement.subtitle}
              </p>

              <span className="inline-block px-3 py-1 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs mb-3">
                {achievement.category}
              </span>

              <p className="text-white-200 text-sm leading-relaxed">
                {achievement.description}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-yellow-500 text-sm">🏆 Achievement</span>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-purple/0 via-purple/5 to-purple/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Achievements;

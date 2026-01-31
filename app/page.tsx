"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import WorkApproach from "@/components/WorkApproach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import ClientProjects from "@/components/ClientProjects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <ClientProjects />
        <Experience />
        <Approach />
        <WorkApproach />
        <Achievements />
        <Certifications />
        <Services />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
};

export default Home;

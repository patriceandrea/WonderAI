import React from "react";
import LandingNavbar from "@/components/landing-navbar";
import LandingHero from "@/components/landing-hero";
import LandingContent from "@/components/landing-content";

const LayoutLanding = () => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full">
        <LandingNavbar />
        <LandingHero />
        <LandingContent/>
      </div>
    </main>
  );
};

export default LayoutLanding;

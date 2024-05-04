import React from "react";
import Image from "next/image";
import ProjectBanner from "@/app/ui/components/ProjectBanner";
import ProjectsData from "@/app/constants/ProjectsData";
import CardText from "@/app/ui/components/CardText";
import ProblemSection from "./ProblemSection";

const { cohab: CohabData } = ProjectsData;

export default function CohabPage() {
  return (
    <main className="text-[12px] md:text-[16px] xl:text-[18px] text-[#0F0F0F] leading-1 xl:leading-[40px] bg-[#F5F5F5]">
      <section id="project-banner">
        <ProjectBanner
          bannerImagePath={"/static/images/Cohab/Cohab-banner.png"}
          appLogoPath={"/static/images/Cohab/Cohab-App-logo.png"}
          project={CohabData}
        />
      </section>
      <section
        id="problem-statement"
        className="flex flex-col justify-center items-center my-2 lg:my-6 xl:my-10"
      >
        <ProblemSection />
      </section>
    </main>
  );
}

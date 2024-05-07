import React from "react";
import Link from "next/link";
import ProjectBanner from "@/app/ui/components/ProjectBanner";
import ProjectsData from "@/app/constants/ProjectsData";
import ProblemSection from "./ProblemSection";
import DesignSection from "./DesignSection";
import FeatureSection from "./FeatureSection";
import RecommendationSection from "./RecommendationSection";

const { cohab: CohabData } = ProjectsData;

export default function CohabPage() {
  return (
    <main className="text-[18px] lg:text-[22px] xl:text-[24px] text-[#0F0F0F] leading-1 xl:leading-[40px] bg-[#F5F5F5]">
      <section id="project-banner">
        <ProjectBanner
          bannerImagePath={"/static/images/Cohab/Cohab-banner.png"}
          appLogoPath={"/static/images/Cohab/Cohab-App-logo.png"}
          project={CohabData}
        />
      </section>
      <section
        id="problem"
        className="flex flex-col justify-center items-center my-2 lg:my-6 xl:my-10"
      >
        <ProblemSection data={CohabData} />
      </section>
      <section
        id="design"
        className="flex flex-col justify-center items-center bg-white my-2 lg:my-6 xl:my-10 py-8 lg:py-6 xl:py-10"
      >
        <DesignSection data={CohabData} />
      </section>
      <section
        id="features"
        className="flex flex-col justify-center items-center my-4 md:my-8 py-4 md:py-8"
      >
        <FeatureSection data={CohabData} />
      </section>
      <section id="Summary" className="flex justify-center bg-white py-10">
        <div className="w-[80%]">
          <h1 className="text-[24px] md:text-[32px] font-bold bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
            Summary
          </h1>
          <p className="py-4">{CohabData.summary.descriptions[0]}</p>
        </div>
      </section>
      <section
        id="recommendation"
        className="flex justify-center bg-white py-2 xl:py-8"
      >
        <RecommendationSection data={CohabData} />
      </section>
      <section
        id="link-home"
        className="flex justify-center bg-white pb-20 md:pb-30 xl:pb-40"
      >
        <div className="w-[80%]">
          <Link href={"/#projects"}>
            <p>
              Thank you for your interest in my project.{" "}
              <span className="text-[#353cff]">
                Click here to view other projects.
              </span>
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

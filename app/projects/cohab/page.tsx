import React from "react";
import ProjectBanner from "@/app/ui/components/ProjectBanner";
import ProjectsData from "@/app/constants/ProjectsData";

const { cohab: CohabData } = ProjectsData;

export default function CohabPage() {
  return (
    <div className="text-[16px] text-white leading-[40px]">
      <ProjectBanner
        bannerImagePath={"/static/images/Cohab/Cohab-banner.png"}
        appLogoPath={"/static/images/Cohab/Cohab-App-logo.png"}
        project={CohabData}
      />
    </div>
  );
}

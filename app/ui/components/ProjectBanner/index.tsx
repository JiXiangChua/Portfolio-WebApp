import React, { memo } from "react";
import Image from "next/image";
import { ProjectProp } from "@/app/constants/ProjectsData";

type ProjectBannerProps = {
  bannerImagePath: string;
  appLogoPath: string;
  project: ProjectProp;
};

const ProjectBanner = memo((props: ProjectBannerProps) => {
  const { bannerImagePath, appLogoPath, project } = props;
  return (
    <div className="relative w-full text-white">
      <div className="relative w-full">
        <Image
          src={bannerImagePath}
          alt={"project-banner"}
          width={0}
          height={0}
          sizes="1"
          className="w-full h-full aspect-auto"
        />
        <div className="bg-[#0F0F0F] absolute inset-0 opacity-75"></div>
      </div>
      <div className="absolute inset-0 flex flex-col gap-10 pt-40 px-10">
        <div className="flex flex-col justify-start">
          <Image
            src={appLogoPath}
            alt={"app-logo"}
            width={0}
            height={0}
            sizes="1"
            className="w-[80px] h-[80px] aspect-auto"
          />
          <p>{project.header.type}</p>
        </div>
        <div className="w-[80%]">
          <h1 className="text-[40px] font-bold">{project.header.title}</h1>
        </div>
        <div className="flex flex-row gap-10 w-[80%]">
          {/* Project Summary */}
          <div className="basis-2/4">
            <h3 className="text-[20px] font-semibold">Project Summary</h3>
            <p>{project.header.projectSummary}</p>
          </div>
          {/* Responsibilities */}
          <div className="basis-1/4">
            <h3 className="text-[20px] font-semibold">Responsibilities</h3>
            {project.header.responsibilities.map((responsibility, index) => (
              <p key={index}>{responsibility}</p>
            ))}
          </div>
          {/* Technology Stack */}
          <div className="basis-1/4">
            <h3 className="text-[20px] font-semibold">Technology Stack</h3>
            {project.header.technologyStack.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectBanner;

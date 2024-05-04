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
          className="w-full h-[300px] md:h-full aspect-auto object-fill"
        />
        <div className="bg-[#0F0F0F] absolute inset-0 opacity-75"></div>
      </div>
      <div className="absolute inset-0 flex flex-col gap-2 md:gap-4 xl:gap-10 pt-24 lg:pt-40 px-6 lg:px-10 xl:px-10">
        <div className="flex flex-col justify-start">
          <Image
            src={appLogoPath}
            alt={"app-logo"}
            width={0}
            height={0}
            sizes="1"
            className="w-[30px] h-[30px] md:w-[80px] md:h-[80px] aspect-auto"
          />
          <p className="text-[10px] md:text-[16px] xl:text-[20px]">
            {project.header.type}
          </p>
        </div>
        <div className="w-[80%]">
          <h1 className="text=[14px] md:text-[28px] xl:text-[40px] font-bold">
            {project.header.title}
          </h1>
        </div>
        <div className="flex flex-row gap-4 lg:gap-6 xl:gap-10 w-[90%] xl:w-[80%]">
          {/* Project Summary */}
          <div className="basis-2/4">
            <h3 className="text-[10px] md:text-[20px] font-semibold">
              Project Summary
            </h3>
            <p className="text-[7px] md:text-[14px] xl:text-[18px]">
              {project.header.projectSummary}
            </p>
          </div>
          {/* Responsibilities */}
          <div className="basis-1/4">
            <h3 className="text-[10px] md:text-[20px] font-semibold">
              Responsibilities
            </h3>
            {project.header.responsibilities.map((responsibility, index) => (
              <p
                key={index}
                className="text-[8px] md:text-[14px] xl:text-[18px]"
              >
                {responsibility}
              </p>
            ))}
          </div>
          {/* Technology Stack */}
          <div className="basis-1/4">
            <h3 className="text-[10px] md:text-[20px] font-semibold">
              Technology Stack
            </h3>
            {project.header.technologyStack.map((skill, index) => (
              <p
                key={index}
                className="text-[8px] md:text-[14px] xl:text-[18px]"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjectBanner;

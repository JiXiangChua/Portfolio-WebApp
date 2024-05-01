import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/app/constants/HomeData";

type ProjectCardProps = {
  project: Project;
  imageOnLeft: Boolean;
};

const ProjectCard = ({ project, imageOnLeft }: ProjectCardProps) => {
  const renderImageOnLeftCard = () => {
    return (
      <div
        className="w-[100%] h-[500px] rounded-[10px] grid grid-cols-1 lg:grid-cols-5 overflow-clip"
        style={{ backgroundColor: project.backgroundColor }}
      >
        <div className="lg:col-span-3 flex justify-center items-center">
          {/* For Desktop mode */}
          <Image
            src={project.imagePath}
            alt="project-image"
            width={0}
            height={0}
            sizes="1"
            style={{
              width: "95%",
              aspectRatio: "auto",
            }}
            className="hidden md:block"
          />
          {/* For Mobile mode */}
          <Image
            src={project.imagePath}
            alt="project-image"
            width={0}
            height={0}
            sizes="1"
            style={{
              width: "90%",
              aspectRatio: "auto",
            }}
            className="block md:hidden self-center"
          />
        </div>
        <div className="lg:col-span-2 gap-2 flex flex-col justify-center items-end text-wrap px-10 w-[100%] xl:w-[80%]">
          <p className="font-medium text-[12px] lg:text-[18px] text-[#3C3C3C] text-end">
            {project.nature}
          </p>
          <h1 className="font-bold text-[20px] lg:text-[40px] text-[#0F0F0F] text-end">
            {project.title}
          </h1>
          <p className="font-normal text-[16px] lg:text-[20px] text-[#0F0F0F] text-end">
            {project.description}
          </p>
          <Link href={project.url}>
            <div className="flex justify-center items-center px-4 lg:px-6 py-2 lg:py-3 mt-2 lg:mt-8 border border-[#0F0F0F] rounded-[8px] lg:rounded-[10px] text-[#0F0F0F]">
              View Project
            </div>
          </Link>
        </div>
      </div>
    );
  };
  const renderImageOnRightCard = () => {
    return (
      <div
        className="w-[100%] h-[500px] rounded-[10px] grid grid-cols-1 lg:grid-cols-5 overflow-clip"
        style={{ backgroundColor: project.backgroundColor }}
      >
        <div className="lg:col-span-3 gap-2 flex flex-col justify-center items-start text-wrap px-10 w-[80%]">
          <p className="font-medium text-[12px] lg:text-[18px] text-[#DDDDDD]">
            {project.nature}
          </p>
          <h1 className="font-bold text-[20px] lg:text-[40px] text-[#FFFFFF]">
            {project.title}
          </h1>
          <p className="font-normal text-[16px] lg:text-[20px] text-[#FFFFFF]">
            {project.description}
          </p>
          <Link href={project.url}>
            <div className="flex justify-center items-center px-4 lg:px-6 py-2 lg:py-3 mt-2 lg:mt-8 border border-[#FFFFFF] rounded-[8px] lg:rounded-[10px] text-[#FFFFFF]">
              View Project
            </div>
          </Link>
        </div>
        <div className="lg:col-span-2 flex justify-center items-center">
          {/* For Desktop mode */}
          <Image
            src={project.imagePath}
            alt="project-image"
            width={0}
            height={0}
            sizes="1"
            style={{
              width: "100%",
              aspectRatio: "auto",
            }}
            className="hidden md:block mr-10"
          />
          {/* For Mobile mode */}
          <Image
            src={project.imagePath}
            alt="project-image"
            width={0}
            height={0}
            sizes="1"
            style={{
              width: "75%",
              aspectRatio: "auto",
            }}
            className="block md:hidden self-center"
          />
        </div>
      </div>
    );
  };
  return (
    <div className="mb-6">
      {imageOnLeft ? renderImageOnLeftCard() : renderImageOnRightCard()}
    </div>
  );
};

export default ProjectCard;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/app/constants/HomeData";

type ProjectCardProps = {
  project: Project;
  imageOnLeft: Boolean;
};

const CohabTitle = "A Social Media App For Foodies and F&B Businesses";

const ProjectCard = ({ project, imageOnLeft }: ProjectCardProps) => {
  const renderImageOnLeftCard = () => {
    return (
      <div
        className="w-[100%] h-[500px] rounded-[10px] grid grid-cols-5"
        style={{ backgroundColor: project.backgroundColor }}
      >
        <div className="col-span-3 flex justify-center items-center">
          <Image
            src={project.imagePath}
            alt="Tastee-Project"
            width={0}
            height={0}
            sizes="1"
            style={{
              width: "95%",
              aspectRatio: "auto",
            }}
          />
        </div>
        <div className="col-span-2 gap-2 flex flex-col justify-center items-end text-wrap px-10 w-[80%]">
          <p className="font-medium text-[18px] text-[#3C3C3C] text-end">
            {project.nature}
          </p>
          <h1 className="font-bold text-[40px] text-[#0F0F0F] text-end">
            {project.title}
          </h1>
          <p className="font-normal text-[20px] text-[#0F0F0F] text-end">
            {project.description}
          </p>
          <Link href={project.url}>
            <div className="flex justify-center items-center px-6 py-3 mt-8 border border-[#0F0F0F] rounded-[10px] text-[#0F0F0F]">
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
        className="w-[100%] h-[500px] rounded-[10px] grid grid-cols-5"
        style={{ backgroundColor: project.backgroundColor }}
      >
        <div className="col-span-3 gap-2 flex flex-col justify-center items-start text-wrap px-10 w-[80%]">
          <p className="font-medium text-[18px] text-[#DDDDDD]">
            {project.nature}
          </p>
          <h1 className="font-bold text-[40px] text-[#FFFFFF]">
            {project.title}
          </h1>
          <p className="font-normal text-[20px] text-[#FFFFFF]">
            {project.description}
          </p>
          <Link href={project.url}>
            <div className="flex justify-center items-center px-6 py-3 mt-8 border border-[#FFFFFF] rounded-[10px] text-[#FFFFFF]">
              View Project
            </div>
          </Link>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <Image
            src={project.imagePath}
            alt="Tastee-Project"
            width={0}
            height={0}
            sizes="1"
            style={{
              width: project.title === CohabTitle ? "85%" : "100%",
              aspectRatio: "auto",
            }}
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

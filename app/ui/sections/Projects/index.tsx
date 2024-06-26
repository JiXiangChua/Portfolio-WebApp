"use client";

import React, { useState } from "react";
import clsx from "clsx";
import HomeData from "@/app/constants/HomeData";
import ProjectCard from "../../components/ProjectCard";

const projects = HomeData.projects;

const ProjectsSection = () => {
  const [selectCoding, setSelectCoding] = useState(true);

  const handleToggleTab = (value: string) => {
    switch (value) {
      case "coding":
        setSelectCoding(true);
        break;
      case "design":
        setSelectCoding(false);
        break;
    }
  };

  const renderFilterTabs = () => {
    return (
      <div className="w-[300px] h-[50px] lg:w-[400px] lg:h-[80px] bg-[#D9D9D9] rounded-[12px] lg:rounded-[20px] flex flex-row">
        <button
          className={clsx(
            "w-[50%] h-[100%] rounded-[12px] lg:rounded-[20px] flex justify-center items-center",
            {
              "bg-[#0F0F0F]": selectCoding,
            }
          )}
          onClick={handleToggleTab.bind(null, "coding")}
        >
          <p
            className={clsx(
              "font-bold text-[24px] lg:text-[32px] text-[#A9A9A9]",
              {
                "text-[#FFFFFF]": selectCoding,
              }
            )}
          >
            Coding
          </p>
        </button>
        <button
          className={clsx(
            "w-[50%] h-[100%] rounded-[12px] lg:rounded-[20px] flex justify-center items-center",
            {
              "bg-[#0F0F0F]": !selectCoding,
            }
          )}
          onClick={handleToggleTab.bind(null, "design")}
        >
          <p
            className={clsx(
              "font-bold text-[24px] lg:text-[32px] text-[#A9A9A9]",
              {
                "text-[#FFFFFF]": !selectCoding,
              }
            )}
          >
            Design
          </p>
        </button>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pt-18">
      <h1 className="font-bold text-[40px] lg:text-[64px] py-4 bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
        {projects.title}
      </h1>
      <div className="w-[85%] lg:w-[60%] my-8">
        <p className="font-normal text-[20px] md:text-[24px] text-[#5B5B5B] text-wrap">
          From responsive web designs that breathe life into brands to mobile
          apps that redefine user interactions, this is my{" "}
          <span className="font-medium text-[#0F0F0F]">personal journey</span>{" "}
          of transforming ideas into visually stunning and user-friendly
          realities.
        </p>
      </div>
      <div className="w-[90%] flex flex-col justify-center items-center">
        {/* Filter Button */}
        {renderFilterTabs()}
        <div className="my-4">
          <p className="font-normal text-[20px] lg:text-[24px] text-[#5B5B5B] text-center">
            Select a project to find out more!
          </p>
        </div>
        {/* Array of project cards */}
        <div className="block w-full">
          <ul>
            {projects.list.map((project, index) => {
              if (
                (selectCoding && project.type === "coding") ||
                (!selectCoding && project.type === "design")
              ) {
                return (
                  <li key={index}>
                    <ProjectCard
                      project={project}
                      imageOnLeft={index % 2 !== 0}
                    />
                  </li>
                );
              } else {
                return null;
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;

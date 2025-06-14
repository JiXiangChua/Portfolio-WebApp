import React from "react";
import Link from "next/link";
import { RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import HomeData from "@/app/constants/HomeData";

const { footer } = HomeData;
const descriptions = footer.description.split(".");

const EngagedSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-8 lg:pt-20">
      <div className="w-[80%] flex flex-col justify-center items-center">
        <h1 className="font-bold text-[40px] lg:text-[64px] py-4 bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
          {footer.title}
        </h1>
        <p className="font-normal text-[20px] md:text-[24px] text-[#5B5B5B] text-center my-4">
          {descriptions[0] + ". " + descriptions[1] + "."}
          <br></br>
          {descriptions[2] + "."}
        </p>
        <h2 className="font-normal text-[20px] lg:text-[30px] text-[#0F0F0F] my-4">
          {footer.closureHeader}
        </h2>
        <Link
          href={"mailto:jixiangchua2697@gmail.com"}
          className="my-4 lg:my-8 py-2 lg:py-4 px-6 lg:px-12 border border-[#0F0F0F] rounded-[8px] lg:rounded-[10px]"
        >
          <p className="font-normal text-[24px] text-[#0F0F0F]">Connect</p>
        </Link>
        <div className="flex flex-row gap-4">
          <Link href={"https://www.instagram.com/xjustjixiang"}>
            <RiInstagramFill size={50} />
          </Link>
          <Link href={"https://www.linkedin.com/in/ji-xiang-chua-02/"}>
            <RiLinkedinBoxFill size={50} />
          </Link>
          <Link href={"https://github.com/JiXiangChua"}>
            <FaGithubSquare size={50} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EngagedSection;

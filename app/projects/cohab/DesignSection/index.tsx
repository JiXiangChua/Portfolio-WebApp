import React, { memo } from "react";
import Image from "next/image";
import { ProjectProp } from "@/app/constants/ProjectsData";

type DesignSectionProps = {
  data: ProjectProp;
};

const DesignSection = memo((props: DesignSectionProps) => {
  const { data } = props;
  return (
    <>
      <div className="w-[80%] md:w-[70%]">
        <div>
          <h1 className="text-[20px] md:text-[32px] font-bold bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
            Design
          </h1>
          <p className="my-4">{data.design?.subtitle}</p>
        </div>
        <div id="colour-palette" className="flex flex-col gap-4 my-10">
          <h2 className="text-[20px] xl:text-[28px] font-semibold">
            {data.design?.descriptions[0].name}
          </h2>
          <Image
            src={"/static/images/Cohab/Cohab-Color-palete.png"}
            alt="cohab-color-palette"
            width={0}
            height={0}
            sizes="1"
            className="w-[40%] self-center"
          />
          <p>{data.design?.descriptions[0].comment}</p>
        </div>
        <div id="nav-icons" className="flex flex-col gap-4 my-10">
          <h2 className="text-[20px] xl:text-[28px] font-semibold">
            {data.design?.descriptions[1].name}
          </h2>
          <Image
            src={"/static/images/Cohab/Cohab-Nav-icons.png"}
            alt="cohab-nav-icons"
            width={0}
            height={0}
            sizes="1"
            className="w-[40%] self-center"
          />
          <p>{data.design?.descriptions[1].comment}</p>
        </div>
        <div id="avatar" className="flex flex-col gap-4 my-10">
          <h2 className="text-[20px] xl:text-[28px] font-semibold">
            {data.design?.descriptions[2].name}
          </h2>
          <Image
            src={"/static/images/Cohab/Cohab-Avatar.png"}
            alt="cohab-avatar"
            width={0}
            height={0}
            sizes="1"
            className="w-[40%] self-center"
          />
          <p>{data.design?.descriptions[2].comment}</p>
        </div>
      </div>
    </>
  );
});

DesignSection.displayName = "DesignSection";

export default DesignSection;

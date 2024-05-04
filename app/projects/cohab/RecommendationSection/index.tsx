import { ProjectProp } from "@/app/constants/ProjectsData";
import React, { memo } from "react";

type RecommendationSectionProps = {
  data: ProjectProp;
};

const RecommendationSection = memo((props: RecommendationSectionProps) => {
  const { data } = props;
  const recommendation = data.recommendation!;
  const keys = Object.keys(recommendation);

  return (
    <>
      <div className="w-[80%]">
        <h1 className="text-[24px] md:text-[32px] font-bold bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
          Recommendation for Future Works
        </h1>
        {keys.map((key) => (
          <div key={key} className="my-10">
            <h1 className="text-[18px] md:text-[24px] font-bold">{key}</h1>
            <p>{recommendation[key]}</p>
          </div>
        ))}
      </div>
    </>
  );
});

export default RecommendationSection;

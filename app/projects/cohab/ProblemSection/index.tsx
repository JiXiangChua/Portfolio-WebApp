import React, { memo } from "react";
import Image from "next/image";
import CardText from "@/app/ui/components/CardText";
import { ProjectProp } from "@/app/constants/ProjectsData";

type ProblemSectionProps = {
  data: ProjectProp;
};

const ProblemSection = memo((props: ProblemSectionProps) => {
  const { data } = props;
  return (
    <>
      <div className="w-[80%] md:w-[70%]">
        <CardText title="Problem" text={data.problem.statement} gradientText />
      </div>
      <div className="w-[100%] flex justify-center items-center">
        <Image
          src={"/static/images/Cohab/Cohab-Problem.png"}
          alt="tastee-problem"
          width={0}
          height={0}
          sizes="1"
          className="w-[90%] md:w-[60%]"
        />
      </div>
      <div className="w-[80%] md:w-[70%]">
        <CardText
          title="Objective"
          text={data.problem.objective}
          gradientText
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8 my-10">
        <div className="text-center">
          <h2 className="text-[24px] md:text-[32px] font-bold">Key Features</h2>
          <p>{data.problem?.keyFeatures?.subtitle}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start w-[80%]">
          {/* Finance */}
          <div className="text-center p-4">
            <h2 className="text-[18px] md:text-[24px] font-bold">Finance</h2>
            {data.problem?.keyFeatures?.features.Finance.map((text, index) => (
              <p key={index} className="py-4">
                {text}
              </p>
            ))}
          </div>
          <div
            id="divider"
            className="w-[300px] md:w-0 md:h-[300px] border-b-2 md:border-l-2 border-solid border-gray-300 self-center"
          ></div>
          {/* Chores and Tasks */}
          <div className="text-center p-4">
            <h2 className="text-[18px] md:text-[24px] font-bold">
              Chore and Tasks
            </h2>
            {data.problem?.keyFeatures?.features["Chores and Tasks"].map(
              (text, index) => (
                <p key={index} className="py-4">
                  {text}
                </p>
              )
            )}
          </div>
          <div
            id="divider"
            className="w-[300px] md:w-0 md:h-[300px] border-b-2 md:border-l-2 border-solid border-gray-300 self-center"
          ></div>
          {/* Calendar */}
          <div className="text-center p-4">
            <h2 className="text-[18px] md:text-[24px] font-bold">Calendar</h2>
            {data.problem?.keyFeatures?.features.Calendar.map((text, index) => (
              <p key={index} className="py-4">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

ProblemSection.displayName = "ProblemSection";

export default ProblemSection;

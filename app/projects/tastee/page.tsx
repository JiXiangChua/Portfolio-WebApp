import Image from "next/image";
import ProjectsData from "@/app/constants/ProjectsData";
import ProjectBanner from "@/app/ui/components/ProjectBanner";
import CardText from "@/app/ui/components/CardText";

const { tastee: TasteeData } = ProjectsData;

export default function TasteePage() {
  return (
    <main className="text-[16px] md:text-[18px] text-[#0F0F0F] leading-[40px] bg-[#F5F5F5]">
      <section id="project-banner">
        <ProjectBanner
          bannerImagePath={"/static/images/Tastee/Tastee-banner.png"}
          appLogoPath={"/static/images/Tastee/Tastee-App-logo.png"}
          project={TasteeData}
        />
      </section>
      <section
        id="problem-statement"
        className="flex flex-col justify-center items-center my-10"
      >
        <div className="w-[70%]">
          <CardText title="Problem" text={TasteeData.problem.statement} />
        </div>
        <div className="w-[100%] flex justify-center items-center">
          <Image
            src={"/static/images/Tastee/Tastee-problem.png"}
            alt="tastee-problem"
            width={0}
            height={0}
            sizes="1"
            className="w-[60%]"
          />
        </div>
        <div className="w-[50%] flex flex-col gap-10 my-10">
          <p>{TasteeData.problem.descriptions[0]}</p>
          <p>{TasteeData.problem.descriptions[1]}</p>
        </div>
        <div className="w-[80%] flex flex-row justify-center items-center gap-10">
          <p>{TasteeData.problem.descriptions[2]}</p>
          <Image
            src={"/static/images/Tastee/Tastee-problem-2.png"}
            alt="tastee-problem-2"
            width={0}
            height={0}
            sizes="1"
            className="w-[40%]"
          />
        </div>
        <div className="w-[70%] my-10">
          <CardText title="Objective" text={TasteeData.problem.objective} />
        </div>
      </section>
    </main>
  );
}

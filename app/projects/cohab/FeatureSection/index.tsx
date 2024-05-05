import React, { memo } from "react";
import Image from "next/image";
import FeatureCard from "../../../ui/components/FeatureCard";
import { ProjectProp } from "@/app/constants/ProjectsData";
import CardText from "@/app/ui/components/CardText";

type FeatureSectionProp = {
  data: ProjectProp;
};

const FeatureSection = memo((props: FeatureSectionProp) => {
  const { data } = props;
  return (
    <>
      <div className="w-[80%] pb-10">
        <h2 className="text-[24px] md:text-[32px] font-bold bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
          Features
        </h2>
        <div
          id="splash-login-register"
          className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-20 my-10"
        >
          <div className="flex flex-col">
            <h2 className="text-[20px] md:text-[28px] font-semibold">Splash</h2>
            <p className="mb-10">{data.features.Splash}</p>
            <Image
              src={"/static/images/Cohab/Cohab-Splash.png"}
              alt={"splash-screen"}
              width={0}
              height={0}
              sizes="1"
              className="w-[40%] md:w-[50%] rounded-[10px] md:rounded-[20px]"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[20px] md:text-[28px] font-semibold">
              Login / Register
            </h2>
            <p className="mb-10">{data.features["Login/Register"]}</p>
            <Image
              src={"/static/images/Cohab/Cohab-Login-Register.png"}
              alt={"login-register-screen"}
              width={0}
              height={0}
              sizes="1"
              className="w-[80%] rounded-[10px] md:rounded-[20px]"
            />
          </div>
        </div>
        <div
          id="neighbourhood"
          className="flex flex-col justify-center items-start my-10 w-[80%]"
        >
          <h2 className="text-[20px] md:text-[28px] font-semibold">
            Neighbourhood
          </h2>
          <p className="mt-4">{data.features.Neighbourhood}</p>
        </div>
        <div
          id="avatar"
          className="flex flex-col md:flex-row justify-center md:items-end gap:8 md:gap-20 md:my-10"
        >
          <Image
            src={"/static/images/Cohab/Cohab-Neighbourhood.png"}
            alt={"neighbourhood-screen"}
            width={0}
            height={0}
            sizes="1"
            className="w-[100%] md:w-[60%] rounded-[10px] md:rounded-[20px]"
          />
          <div>
            <h2 className="text-[20px] mt-4 md:text-[28px] font-semibold">
              Avatar
            </h2>
            <p className="mt-4">{data.features.Avatar}</p>
          </div>
        </div>
        <FeatureCard
          direction="left-right"
          title="Home"
          text={data.features.Home}
          imagePath="/static/images/Cohab/Cohab-Home.png"
          imageAltText="cohab-home-screen"
          imageWidth="40%"
        />
        {/* <FeatureCard
          direction="left-right"
          title="Notification"
          text={data.features.Notification}
          imagePath="/static/images/Cohab/Cohab-Notification.png"
          imageAltText="cohab-notification-screen"
          imageWidth="20%"
        /> */}
        <div
          id="Notification"
          className="flex flex-col md:flex-row justify-center items-center"
        >
          <CardText
            title="Notification"
            text={data.features.Notification}
            transparent
          />
          <Image
            src="/static/images/Cohab/Cohab-Notification.png"
            alt="cohab-notification-screen"
            width={0}
            height={0}
            sizes="1"
            className="w-[40%] md:w-[20%] rounded-[10px] md:rounded-[20px]"
          />
        </div>
        <FeatureCard
          direction="left-right"
          title="Finance"
          text={data.features.Finance}
          imagePath="/static/images/Cohab/Cohab-Finance.png"
          imageAltText="cohab-finance-screen"
          imageWidth="60%"
        />
        <FeatureCard
          direction="left-right"
          title="Chores"
          text={data.features.Chores}
          imagePath="/static/images/Cohab/Cohab-Chores.png"
          imageAltText="cohab-chores-screen"
          imageWidth="60%"
        />
        <FeatureCard
          direction="up-down"
          title="Tasks"
          text={data.features.Tasks}
          imagePath="/static/images/Cohab/Cohab-Task.png"
          imageAltText="cohab-task-screen"
          imageWidth="50%"
        />
        <FeatureCard
          direction="up-down"
          title="Calendar"
          text={data.features.Calendar}
          imagePath="/static/images/Cohab/Cohab-Calendar.png"
          imageAltText="cohab-calendar-screen"
          imageWidth="60%"
        />
      </div>
    </>
  );
});

FeatureSection.displayName = "FeatureSection";

export default FeatureSection;

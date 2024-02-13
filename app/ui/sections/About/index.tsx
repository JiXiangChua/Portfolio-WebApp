import React from "react";
import HomeData from "@/app/constants/HomeData";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const { introduction } = HomeData;

const AboutSection = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col gap-2 items-center py-20">
        <h1 className="font-bold text-[64px] py-4 bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
          {introduction.title}
        </h1>
        <div className="flex flex-row py-4 items-center">
          {/* Icon */}
          <MapPinIcon className="h-[32px] w-[32px]" color="#969699" />
          <p className="font-normal text-[32px] pl-2 bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
            {introduction.location}
          </p>
        </div>
        <div className="w-[60%] py-4">
          <p className="text-[24px] font-normal text-[#5B5B5B] text-justify text-wrap">
            I graduated from the{" "}
            <span className="font-medium text-[#0F0F0F]">
              Nanyang Technological University
            </span>{" "}
            in Singapore, holding a Bachelor&apos;s degree in Information
            Engineering and Media. My expertise lies in{" "}
            <span className="font-medium text-[#0F0F0F]">
              mobile app development
            </span>
            , with a strong focus on crafting intuitive user interfaces and
            enhancing the user experience. I&apos;m also passionate about
            integrating AI seamlessly into mobile apps, a journey that fuels my
            drive for innovation. Beyond coding, I find joy in street
            photography and serenading to C-POP music.
          </p>
        </div>
        <div className="my-10 w-full flex flex-col justify-center items-center">
          <div className="h-[200px] w-[1px] bg-[#5B5B5B] mb-10"></div>
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-[20px] font-normal text-[#5B5B5B]">
              A few brands I&apos;ve worked with
            </p>
            <div className="flex flex-row justify-between w-[80%] mt-10">
              <Image
                src={"/static/images/Home/Brand-Singtel.png"}
                alt="Singtel-logo"
                width={136}
                height={0}
                className="object-contain"
              />
              <Image
                src={"/static/images/Home/Brand-Creative.png"}
                alt="Creative-logo"
                width={245}
                height={0}
                className="object-contain"
              />
              <Image
                src={"/static/images/Home/Brand-Dell.png"}
                alt="Dell-logo"
                width={80}
                height={0}
                className="object-contain"
              />
              <Image
                src={"/static/images/Home/Brand-TheStar.png"}
                alt="TheStar-logo"
                width={150}
                height={0}
                className="object-contain"
              />
            </div>
          </div>
          <div className="h-[200px] w-[1px] bg-[#5B5B5B] mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroBanner = () => {
  return (
    <div className="bg-[#E1DFE0] grid grid-cols-1 md:grid-cols-3 pt-20">
      <div className="col-span-1"></div>
      <div className="col-span-1 place-self-center">
        <Image
          src={"/static/images/Home/Jace-Picture.png"}
          alt="Jace-Picture"
          width={700}
          height={700}
        />
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
        <h1 className="font-light text-[24px] lg:text-[52px]">Quick Peek!</h1>
        <h1 className="font-medium text-[32px] lg:text-[60px]">I&apos;m a</h1>
        <div className="font-normal text-[40px] lg:text-[54px] leading-none">
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "UI/UX Designer",
              1000,
              "Photographer",
              1000,
              "NTU Graduate",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

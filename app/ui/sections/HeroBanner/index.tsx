"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroBanner = () => {
  return (
    <div className="bg-[#E1DFE0] grid grid-cols-1 md:grid-cols-3 pt-20">
      <div className="col-span-1"></div>
      <div className="col-span-1 place-self-center">
        <Image
          src={"/images/Home/Jace-Picture.png"}
          alt="Jace-Picture"
          width={700}
          height={700}
        />
      </div>
      <div className="col-span-1 flex flex-col justify-center items-center md:items-start">
        <h1 className="font-medium text-[32px] lg:text-[60px]">
          Hello! I&apos;m
        </h1>
        <div className="font-normal text-[40px] lg:text-[54px] leading-none">
          <TypeAnimation
            sequence={[
              "Jace Chua",
              1200,
              "Software Engineer",
              1200,
              "in Mobile Apps",
              1200,
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

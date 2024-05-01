import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-black py-4 mt-10">
      <h1 className="font-bold text-[40px] lg:text-[64px] my-4 lg:my-10 bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
        Looking For More?
      </h1>
      <Link href={"https://www.instagram.com/jlostpixel"}>
        <div className="flex justify-center">
          {/* For desktop mode */}
          <Image
            src={"/static/images/Home/Photography-Lens.png"}
            alt="photography-lens"
            width={400}
            height={0}
            className="object-contain hidden md:block"
          />
          {/* For Mobile mode */}
          <Image
            src={"/static/images/Home/Photography-Lens.png"}
            alt="photography-lens"
            width={200}
            height={0}
            className="object-contain block md:hidden"
          />
        </div>
        <p className="font-thin text-[16px] lg:text-[24px] text-[#747474] mt-4">
          Check out what I do during my free time
        </p>
      </Link>
    </div>
  );
};

export default Footer;

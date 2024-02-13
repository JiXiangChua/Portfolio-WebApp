import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-black py-10">
      <h1 className="font-bold text-[64px] my-10 bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
        Looking For More?
      </h1>
      <Link href={"https://www.instagram.com/jlostpixel"}>
        <Image
          src={"/images/Home/Photography-Lens.png"}
          alt="photography-lens"
          width={400}
          height={0}
          className="object-contain"
        />
        <p className="font-thin text-[24px] text-[#747474] mt-4">
          Check out what I do during my free time
        </p>
      </Link>
    </div>
  );
};

export default Footer;

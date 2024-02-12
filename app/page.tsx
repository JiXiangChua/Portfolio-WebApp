import Image from "next/image";
import NavBar from "./ui/components/NavBar";

export default function HomePage() {
  return (
    <main>
      <section id="hero">
        <div className="bg-[#E1DFE0] grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1"></div>
          <div className="col-span-1 place-self-center">
            <Image
              src={"/images/Home/Jace-Picture.png"}
              alt="Jace-Picture"
              width={400}
              height={400}
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <h1 className="font-normal text-[32px] lg:text-[64px] leading-none">
              Software
            </h1>
            <h1 className="font-normal text-[32px] lg:text-[64px] leading-none">
              Engineer
            </h1>
            <h2 className="font-thin text-[16px] lg:text-[32px] my-3 lg:my-6">
              Mobile Apps
            </h2>
          </div>
        </div>
      </section>
      <section id="introduction">
        <p>Introduction</p>
      </section>
      <section id="projects">
        <p>Projects</p>
      </section>
      <section id="engaged">
        <p>Engaged</p>
      </section>
      <footer id="photography">
        <p>Footer - photography</p>
      </footer>
    </main>
  );
}

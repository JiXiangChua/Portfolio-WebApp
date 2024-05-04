import Image from "next/image";
import ProjectsData from "@/app/constants/ProjectsData";
import ProjectBanner from "@/app/ui/components/ProjectBanner";
import CardText from "@/app/ui/components/CardText";
import FeatureCard from "@/app/ui/components/FeatureCard";

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
          <CardText
            title="Problem"
            text={TasteeData.problem.statement}
            gradientText
          />
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
          <CardText
            title="Objective"
            text={TasteeData.problem.objective}
            gradientText
          />
        </div>
      </section>
      <section
        id="research"
        className="flex flex-col justify-center items-center py-20 bg-white"
      >
        <div className="w-[80%]">
          <h3 className="text-[32px] font-bold bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
            Research
          </h3>
          <p className="my-8">{TasteeData.research.descriptions[0]}</p>
          <p>{TasteeData.research.descriptions[1]}</p>
        </div>
        <div className="flex flex-row justify-between items-center my-10">
          <Image
            src={"/static/images/Tastee/Tastee-research-1.png"}
            alt={"research-1"}
            width={0}
            height={0}
            sizes="1"
            className="w-[33%]"
          />
          <Image
            src={"/static/images/Tastee/Tastee-research-2.png"}
            alt={"research-2"}
            width={0}
            height={0}
            sizes="1"
            className="w-[33%]"
          />
          <Image
            src={"/static/images/Tastee/Tastee-research-3.png"}
            alt={"research-3"}
            width={0}
            height={0}
            sizes="1"
            className="w-[33%]"
          />
        </div>
        <div className="w-[80%]">
          <p className="my-8">{TasteeData.research.descriptions[2]}</p>
          <p>{TasteeData.research.descriptions[3]}</p>
        </div>
      </section>
      <section
        id="features"
        className="flex flex-col justify-center items-center my-10 py-10"
      >
        <div className="w-[80%]">
          <h2 className="text-[32px] font-bold bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
            Features
          </h2>
          <div
            id="login-register"
            className="flex flex-col justify-center items-center"
          >
            <div className="flex flex-row gap-10">
              <CardText
                title="Login"
                text={TasteeData.features.Login}
                transparent
              />
              <CardText
                title="Register"
                text={TasteeData.features.Register}
                transparent
              />
            </div>
            <div className="flex flex-row gap-2 w-full">
              <Image
                src={"/static/images/Tastee/Tastee-Login.png"}
                alt={"login-screen"}
                width={0}
                height={0}
                sizes="1"
                className="w-[25%] rounded-[20px]"
              />
              <Image
                src={"/static/images/Tastee/Tastee-Register.png"}
                alt={"register-screen"}
                width={0}
                height={0}
                sizes="1"
                className="w-[80%] rounded-[20px]"
              />
            </div>
          </div>
          <FeatureCard
            direction="up-down"
            title="Home"
            text={TasteeData.features.Home}
            transparent
            imagePath="/static/images/Tastee/Tastee-Home.png"
            imageAltText="home-screen"
            imageWidth="80%"
          />
          <FeatureCard
            direction="left-right"
            title="Explore"
            text={TasteeData.features.Explore}
            transparent
            imagePath="/static/images/Tastee/Tastee-Explore.png"
            imageAltText="explore-screen"
            imageWidth="40%"
          />
          <FeatureCard
            direction="left-right"
            title="Random Food Selector"
            text={TasteeData.features.Random_Food_Selector}
            transparent
            imagePath="/static/images/Tastee/Tastee-Random-food-selector.png"
            imageAltText="random-food-selector-screen"
            imageWidth="40%"
          />
          <FeatureCard
            direction="left-right"
            title="Deals"
            text={TasteeData.features.Deals}
            transparent
            imagePath="/static/images/Tastee/Tastee-Deals.png"
            imageAltText="deals-screen"
            imageWidth="20%"
          />
          <FeatureCard
            direction="left-right"
            title="Create New Post"
            text={TasteeData.features.Create_New_Post}
            transparent
            imagePath="/static/images/Tastee/Tastee-Create-new-post.png"
            imageAltText="create-new-post-screen"
            imageWidth="70%"
          />
          <FeatureCard
            direction="up-down"
            title="Recipe"
            text={TasteeData.features.Recipe}
            transparent
            imagePath="/static/images/Tastee/Tastee-Recipe.png"
            imageAltText="recipe-screen"
            imageWidth="100%"
          />
          <FeatureCard
            direction="up-down"
            title="Personal & Business Profiles"
            text={TasteeData.features["Personal & Business Profiles"]}
            transparent
            imagePath="/static/images/Tastee/Tastee-Profile.png"
            imageAltText="profile-screen"
            imageWidth="100%"
          />
        </div>
      </section>
    </main>
  );
}

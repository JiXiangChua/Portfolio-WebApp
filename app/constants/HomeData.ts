export type Project = {
  title: string;
  type: "coding" | "design";
  nature: string;
  description: string;
  url: string;
  imagePath: string;
  backgroundColor: string;
};

type HomeDataProps = {
  introduction: {
    title: string;
    location: string;
    description: string;
  };
  projects: {
    title: string;
    description: string;
    list: Project[];
  };
  footer: {
    title: string;
    description: string;
    closureHeader: string;
  };
};

export default {
  introduction: {
    title: "Hi, I'm Jace.",
    location: "Singapore",
    description:
      "I graduated from the Nanyang Technological University in Singapore, holding a Bachelor's degree in Information Engineering and Media. My expertise lies in mobile app development, with a strong focus on crafting intuitive user interfaces and enhancing the user experience. I'm also passionate about integrating AI seamlessly into mobile apps, a journey that fuels my drive for innovation. Beyond coding, I find joy in street photography and serenading to C-POP music.",
  },
  projects: {
    title: "Projects.",
    description:
      "From responsive web designs that breathe life into brands to mobile apps that redefine user interactions, this is my personal journey of transforming ideas into visually stunning and user-friendly realities.",
    list: [
      {
        title: "A Social Media App For Foodies and F&B Businesses",
        nature: "iOS Mobile App",
        type: "coding",
        description:
          "My final year project endeavours to foster enhanced post-pandemic opportunities, particularly for local hawkers, by leveraging innovative strategies and technologies.",
        url: "/tastee",
        imagePath: "/static/images/Home/Tastee_Project.png",
        backgroundColor: "#35465D",
      },
      {
        title: "Virtual World To Share your Chores",
        nature: "React Native App",
        type: "coding",
        description:
          "A one-stop integrated app that makes your cohabitation easier.",
        url: "/cohab",
        imagePath: "/static/images/Home/Cohab_Project.png",
        backgroundColor: "#B2A0DE",
      },
      {
        title: "A New Experience to Order ",
        nature: "Interface Design",
        type: "design",
        description:
          "Performed comprehensive user research to analyse pain points and subsequently crafted an entirely new, interactive, and seamless user experience.",
        url: "https://chuajixiang-dv2008-portfolio.webflow.io",
        imagePath: "/static/images/Home/KFC_Project.png",
        backgroundColor: "#000000",
      },
      {
        title: "Brand Storytelling",
        nature: "Website Copywriting",
        type: "design",
        description:
          " Through a strategic progression from Attention to Action, we aim to fulfill our customers' desires for a healthier, happier dog and provide a seamless booking experience.",
        url: "https://bmwassignment2021.wixsite.com/furfitness",
        imagePath: "/static/images/Home/FurFitness_Project.png",
        backgroundColor: "#FBC864",
      },
    ],
  },
  footer: {
    title: "Engaged?",
    description:
      "Thank you for staying with me until the end. I hope these projects have left a lasting impression. Now, it's your turn to share your thoughts and let's start a meaningful conversation.",
    closureHeader: "I'm eager to get to know you better.",
  },
} satisfies HomeDataProps;

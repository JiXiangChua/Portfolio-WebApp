type Project = {
  title: string;
  type: string;
  description: string;
  url: string | null;
  imagePath: NodeRequire;
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
    tastee: Project;
    cohab: Project;
    kfc: Project;
    furFitness: Project;
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
    tastee: {
      title: "A Social Media App For Foodies and F&B Businesses",
      type: "iOS Mobile App",
      description:
        "My final year project endeavours to foster enhanced post-pandemic opportunities, particularly for local hawkers, by leveraging innovative strategies and technologies.",
      url: null,
      imagePath: require("../../public/static/images/Home/Tastee_Project.png"),
    },
    cohab: {
      title: "Virtual World To Share your Chores",
      type: "React Native App",
      description:
        "A one-stop integrated app that makes your cohabitation easier.",
      url: null,
      imagePath: require("../../public/static/images/Home/Cohab_Project.png"),
    },
    kfc: {
      title: "A New Experience to Order ",
      type: "Interface Design",
      description:
        "Performed comprehensive user research to analyse pain points and subsequently crafted an entirely new, interactive, and seamless user experience.",
      url: "https://chuajixiang-dv2008-portfolio.webflow.io",
      imagePath: require("../../public/static/images/Home/KFC_Project.png"),
    },
    furFitness: {
      title: "Brand Storytelling",
      type: "Website Copywriting",
      description:
        " Through a strategic progression from Attention to Action, we aim to fulfill our customers' desires for a healthier, happier dog and provide a seamless booking experience.",
      url: "https://bmwassignment2021.wixsite.com/furfitness",
      imagePath: require("../../public/static/images/Home/FurFitness_Project.png"),
    },
  },
  footer: {
    title: "Engaged?",
    description:
      "Thank you for staying with me until the end. I hope these projects have left a lasting impression. Now, it's your turn to share your thoughts and let's start a meaningful conversation.",
    closureHeader: "I'm eager to get to know you better.",
  },
} satisfies HomeDataProps;

type ProjectProp = {
  header: {
    type: string;
    title: string;
    projectSummary: string;
    responsibilities: string[];
    technologyStack: string[];
  };
  problem: {
    statement: string;
    descriptions: string[];
    objective: string;
    keyFeatures:
      | undefined
      | {
          subtitle: string;
          features: {
            [name: string]: string[];
          };
        };
  };
  research:
    | undefined
    | {
        descriptions: string[];
      };
  design:
    | undefined
    | {
        subtitle: string;
        descriptions: {
          name: string;
          comment: string;
        }[];
      };
  features: {
    [key: string]: string;
  };
  summary: {
    descriptions: string[];
  };
  recommendation:
    | undefined
    | {
        [key: string]: string;
      };
};

type ProjectDataProp = {
  [key: string]: ProjectProp;
};

export default {
  /* TASTEE */
  tastee: {
    header: {
      type: "iOS Mobile App",
      title: "A Social Media App For Foodies and F&B businesses",
      projectSummary:
        "An App that leverages social media technologies to create new opportunities for F&B businesses affected by the COVID-19 pandemic. It enables users to create and share food-related content. One of the unique features is its ability to identify food names from food images through the use of neural network.",
      responsibilities: [
        "iOS Developer",
        "UI/UX Designer",
        "Product Owner",
        "Machine Learning",
      ],
      technologyStack: [
        "Swift & SwiftUI",
        "Google Firebase",
        "Python & Tensor Flow",
        "Core ML & Create ML",
      ],
    },
    problem: {
      statement:
        "Social media, notably platforms like YouTube and Instagram, has fundamentally transformed global communication, becoming indispensable for daily activities. During the COVID-19 pandemic, governments leveraged these platforms to efficiently disseminate health information. However, the crisis severely impacted Food and Beverage (F&B) businesses, imposing restrictions that led to a decline in revenue and customers. For instance, French restaurants experienced significant reductions, emphasizing the critical challenges faced by these establishments.",
      descriptions: [
        "While social media has proven effective for information dissemination during the pandemic,  (F&B) businesses, particularly hawker vendors, are not reaping equal benefits. Casual dining restaurants and cafes garner more attention due to visually appealing content, leaving local hawkers with fewer opportunities for assistance.",
        "Aspiring entrepreneurs in the F&B industry face challenges anticipating business disruptions amid the unpredictable COVID-19 situation. Apart from operational costs, they must allocate funds for advertising to attract local patrons.",
        "Despite social media's global connectivity, there is a notable absence of a dedicated food-sharing platform. Current platforms like YouTube, Instagram, or TikTok lack effectiveness for food content due to user recommendation algorithms, which may not prioritize such content for users with infrequent food-related views.",
      ],
      objective:
        "To develop a social media iOS app that would allow users and F&B businesses to post, share, and enjoy viewing food contents. The product was built with SwiftUI with the consideration of recommending and publishing food related multimedia contents to the users of the app. Insights from this development may help to increase F&B businesses’ customer base by creating more opportunities using social media technologies. Subsequently, it will increase their revenue in the future.",
      keyFeatures: undefined,
    },
    research: {
      descriptions: [
        "A survey was conducted to collect opinions and suggestions of what features a social media user would like to see in this mobile app. There were a total of 31 responses with the majority aged between 23 to 27. Among them, 29% of the users spent more than 5 hours daily and another 29% spent 2 hours daily.  Instagram, Telegram and YouTube were ranked the top 3 frequently used apps by these users.",
        "From the results, the ideation to develop a social media platform to help F&B businesses may be effective.",
        "The common denominator that makes users favour these three apps is the availability of the endless scrolling feature in each of them. This feature enables the release of dopamine in the brain, inducing a sort of neural thrill, and it encourages one to persist in scrolling through the content.",
        "In addition, suggestions on some possible features or functions that a user would like to see in a food sharing social media app were collected. The most popular suggestion was the ability to view location of the food, reviews, menus, prices and special promotions. Although these information can be found with a simple google search, it is still a hassle for users to look for them. Currently, there is no one-stop platform capable of providing all these information concisely and conveniently.",
      ],
    },
    design: undefined,
    features: {
      Login:
        "Users can create and manage their own accounts. They can simply sign in with their registered email address and password in the Login screen. Alternatively, they can also use their existing Google, Apple or Facebook accounts.",
      Register:
        "New users can register by inputting their preferred username, email address and password. Once the app has validated their information, users can choose their profile picture and country of residence. Then, the app will ask the user to select up to five of their favourite cuisines. This information is used to generate personalised content for each user.",
      Home: "After signing in, users are directed to the Home screen, displaying posts from followed users. Actions like liking, commenting, sharing, and bookmarking are available. Clicking on a post's image or the comment button opens the Post Detail screen for more information and user interaction. Bookmarked posts are accessible via the heart icon on the home screen's navigation bar, where users can also search for specific posts using criteria like username, restaurant name, address, or caption.",
      Explore:
        "They can view food contents posted by other users outside of their connection or search for their friends by specifying their account username.",
      Random_Food_Selector:
        "One of the unique selling features in this app is its ability to suggest food to users who may be having difficulty deciding what to eat. Users are presented with a fortune wheel consisting of six random foods, which they can spin by swiping left or right. Once the wheel stops spinning, the result is displayed to the user.",
      Deals:
        "This screen displays the different deals offered by the F&B establishments registered in the app. Through creating a business account, these establishments can post and promote new deals to attract potential customers.",
      Create_New_Post:
        "Users can create and upload a new food post, which can be viewed by their followers and other users within the app. They have the option to choose a photo from their photo library or use the camera on their iPhone to capture a new one.",
      Recipe:
        "Apart from browsing food media content shared by other users, the Recipe feature allows users to learn how to cook their favorite dishes. Users can access this screen by clicking on the second icon from the right of the bottom tab bar navigator. Once there, they can browse a list of recipes that have been created by other users of the app. Users can then utilize the search bar to find a specific recipe by the food name or use their device’s camera to scan a dish and have the app perform a search based on the image scanned. This feature is especially helpful when a user is unsure of the correct name of the dish and wants to recreate it at home.",
      "Personal & Business Profiles":
        "The Profile screen shows the necessary account information for a user such as their profile picture, number of followings, number of followers, username and a list of posts created by them. F&B businesses can create a business profile where they can provide additional information such as their restaurant’s menu, contact details, location and deals on top of the existing features found in normal profile accounts. Messaging is an essential component of any social media platform, allowing users to communicate with each other in real-time and form connections beyond the public domain. Hence, it is critical to have this feature implemented in this project since the fundamental scope was to build a social media app.",
    },
    summary: {
      descriptions: [
        "This project attempted to permit users and F&B businesses to share and view food-related media contents on one platform with the aim of increasing awareness and opportunities for these businesses, particularly during post COVID-19 recovery period. By leveraging the power of social media technologies to expand their potential customer base, F&B businesses may experience a boost in their revenue growth in the future.",
        "This project followed the software waterfall model, which involved various stages such as requirement analysis, planning, modelling, coding, and testing.",
        "To design a product that catered to the users' needs and expectations, I conducted user research to obtain valuable insights.",
        "Using Swift and XCode, I developed the product while continuously testing all the implemented features to ensure the product's stability.",
        "Towards the end of the development, I added image recognition functionality to enhance the services and user experience of this product using neural network.",
      ],
    },
    recommendation: undefined,
  },
  /* COHAB */
  cohab: {
    header: {
      type: "iOS/Android Mobile App",
      title: "CoHab – The One Stop Platform for Communal Living",
      projectSummary:
        "In response to the challenges faced by university students living together and the limitations of existing applications like Roommate, our team embarked on a mission to develop a superior solution—CoHab. Recognizing the relevance of streamlined communication in shared living spaces, we sought to address the shortcomings of Roommate by creating a comprehensive, user-friendly platform tailored to the needs of cohabitants.",
      responsibilities: ["Frontend Developer"],
      technologyStack: [
        "React Native",
        "Expo",
        "Tomcat Server",
        "MySQL",
        "GitHub",
      ],
    },
    problem: {
      statement:
        "Roommate emerged as a focal point due to its relevance to university students living on campus. However, Roommate's shortcomings in user interface, navigation, and functionality became apparent upon closer inspection.",
      descriptions: [],
      objective:
        "To serve as a centralized platform, offering a seamless experience for roommates in managing various aspects of communal living. By building upon the foundation laid by Roommate, our goal is to create an application that not only addresses the shortcomings identified through user feedback but also introduces new and enhanced functionalities.",
      keyFeatures: {
        subtitle: "CoHab revolves around three core pillars of functionality",
        features: {
          Finance: [
            "CoHab facilitates transparent tracking of expenses and bills among roommates.",
            "Integration with roommates' credit cards streamlines transactions for shared resources.",
          ],
          "Chores and Tasks": [
            "The application allows for efficient planning of shared household chores and tasks.",
            "Roommates can collaboratively create, assign, and view chores and tasks, fostering a more organized living environment.",
          ],
          Calendar: [
            "CoHab's calendar feature synchronizes roommates' personal schedules.",
            "Users can update and share plans within the application, ensuring everyone stays informed about upcoming events",
          ],
        },
      },
    },
    research: undefined,
    design: {
      subtitle:
        "Motivated by the desire to enhance the cohabitation experience, the team conducted surveys to understand user demands within the co-living community. The findings reinforced the need for an improved application, leading to the conceptualization of CoHab.",
      descriptions: [
        {
          name: "Colour Palette",
          comment:
            "One of the design goals behind CoHab was to create a welcoming, cozy and homely atmosphere for users to enjoy. Therefore, the colour palette as shown above is generally followed throughout CoHab as it consists of warm colours and a balanced mix of colour values.",
        },
        {
          name: "Navigation Icons",
          comment:
            "Customised navigation icons were created to bring CoHab a sense of originality and to better suit the overall colour scheme of the application. The icons are designed in a vector art style and are in an isometric perspective to match the rest of the graphics in CoHab.",
        },
        {
          name: "Avatar",
          comment:
            "The avatar was created with the intention of providing users with an initial contact point to introduce them to the rest of the application. Similar approaches can be seen in games such as Dave in Plants VS Zombies, or Nook in Animal Crossing. \n We chose to use a dog because it is a common household pet that conveys the notion of warmth and comfort. The avatar will appear to be befriending its new owner upon their arrival, helping users to treat the room as their home.",
        },
      ],
    },
    features: {
      Splash:
        "Designed to create a positive first impression to set the tone for the rest of the application. The gentle bobbing animation of CoHab’s avatar, Carl, greets the user accompanied by animated dots moving in waves as the application loads.",
      "Login/Register":
        "The same background as the splash is used for a sense of continuity. The login screen follows the common standard of allowing users to access their account by a unique username or email and password. When creating a new account, users are to key in their credentials and to confirm their password.",
      Neighbourhood:
        "Designed to simulate a virtual semi-realistic world that the users can personalise and immerse themselves in.\n Upon initial login to the application, users will encounter an empty plot of land. As they either form or join neighborhoods, a new building will materialize, akin to the real-life addition of a new address. To enhance the realism of the neighborhood interface, three distinct versions have been designed to simulate various environments during different times of the day—morning, afternoon, and night. Consequently, the neighborhood screen will dynamically adjust to reflect the changing times of day.",
      Avatar:
        "We believed that users could gain a more comprehensive understanding of our app through an interactive walkthrough. Therefore, we integrated an in-app tutorial within the neighborhood screen to offer interactivity, convenience, and efficiency. Recognizing the avatar as the key link between the user and our CoHab app, we opted to designate the avatar as the starting point for the tutorial.",
      Home: "Designed to simulate the environment of shared spaces in a house, specifically the living room and the kitchen. The furniture is also designed to encapsulate the main functions of the app, so that users will be able to attach a default function to the added furniture if they do not wish to personalise.",
      Notification:
        "Primarily to aid communication between people living together. All main features within the group tab are condensed here for easy access. The check in and check out function is also here, which serves as a key method of communication between roommates.",
      Finance:
        "Designed to show the user’s wallet balance and the important buttons to manage finances at first glance. The finance screen is split into 3 sections, the monthly budget section, roommate section and the group section with the use of scrollview.",
      Chores:
        "The goal is to set up a task, usually a chore, that automatically repeats for the users. The users should be able to clearly tell how often the chore repeats, when it is due, what kind of chore or task it is, and most importantly, who is currently responsible for doing it. Adding and editing chores is also meant to be hassle-free for the users.",
      Tasks:
        "The main difference that separates the task screen from the chores screen is that chores screen is used for repetitive weekly or monthly routines whereas tasks screen is used as a reminder for single, unrepeated events. The screen is divided into 2 different sections; a section for users to claim tasks and another section to keep track of tasks. There is also a section to view missed/overdue tasks. The missed task card has a prominent red background as compared to others so as to serve as a reminder and notify the user.",
      Calendar:
        "Although most modern mobile phones already have a calendar function, they generally do not support sharing a calendar and events among multiple people. For people who are sharing a living space, it is common to plan events using that same space. As such, the main goal of the calendar screen is not to reinvent the calendar, but merely to allow multiple people to edit and use the same calendar and events function easily and intuitively.",
    },
    summary: {
      descriptions: [
        "CoHab serves as a one-stop platform for all things related to communal living. It provides convenience for cohabitants by allowing them to organise household and financial matters or life events in a centralised application through the various functions such as chores, task, finance and calendar.",
      ],
    },
    recommendation: {
      "Non-player Character (NPC)":
        "As each user has a unique username, a personalised NPC could be created for each user. Based on the GPS location of the user or whether they have checked into their house on CoHab, an NPC would appear or disappear on the home screen.",
      "Greater customization features for the furniture":
        "We will like to allow users to be able to set different colors for their furniture and also be able to rearrange the furniture in the room, hence this will intensify their user experience on using CoHab.",
      "Artificial Intelligence (AI) Avatar":
        "At present, our avatar dialogue is based on hardcoded text. To make our avatar, Carl, more interactive, we would be interested in introducing AI to Carl such that each user can have a unique experience on CoHab. Each user would be able to talk with Carl and Carl would be able to understand and generate suitable responses for a two-way conversation.",
      Gamification:
        "We could use Unity 2D to create mini games for users to play within CoHab. Users may be able to customise their own avatar for a sense of personalisation. A reward system based on completed tasks or chores may be implemented within CoHab to encourage frequent usage and motivate each user to carry out their assigned chores or tasks. The awarded points from completing tasks or chores could then be converted to CoHab’s game currency which allows users to “buy” in-game items or unlock more customisable outfits for their avatar.",
      "Link finance features with PayLah!/PayNow and enable Scan-to-Pay":
        "In the future, we are still very much interested in bringing these features into the app so that users would not need to switch apps to pay for their expenses or food, especially for students living in the universities’ halls.",
    },
  },
} satisfies ProjectDataProp;

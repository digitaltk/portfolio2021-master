import emoji from "react-easy-emoji";

export const greetings = {
  name: "Developer Tats",
  title: "Hi all, I'm Tatenda Makandigona",
  description:
    "Data-driven Machine Learning Engineer, fully proficient Python with a problem-solving mindset, analytical approach to tasks and strong knowledge of financial sector necessities.",
  resumeLink: "./public/resume.pdf",
};

export const openSource = {
  githubUserName: "digitaltk",
};

export const contact = {
  Email: "tindxmathew@hotmail.com",
};

export const socialLinks = {
  twitter: "https://twitter.com/devtatenda",
  github: "https://github.com/digitaltk",
  linkedin: "https://www.linkedin.com/in/tmakandigona/",
};

export const skillsSection = {
  title: "What I Do",
  subTitle:
    "CRAZY DEVELOPER (AND ENGINEER 😀) WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Knowledge & Experience in data mining, learning to rank, deep learning, natural language processing, machine learning, and/or related fields"
    ),
    emoji(
      "⚡ Experience using statistical modeling or machine learning techniques to build models that have driven company decision making."
    ),
    emoji(
      "⚡ Analytical skills with the ability to collect, organize and analyze large amounts of information with attention to detail and accuracy. (Web Scraping)"
    ),
    emoji(
      "⚡ Clean & structure the data and build training & validate data sets by applying advance feature-engineering techniques."
    ),

    emoji(
      "⚡ Evaluate data and make strategic recommendations through Google Analytics, YouTube analytics, Facebook Insight, Google Adwords and Twitter Analytics."
    ),
  ],

  softwareSkills: [
    {
      skillName: "Azure",
      fontAwesomeClassname: "logos:azure",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "logos:git",
    },
    {
      skillName: "Postgresql",
      fontAwesomeClassname: "logos:postgresql",
    },
    {
      skillName: "Mongodb",
      fontAwesomeClassname: "logos:mongodb",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Data visualization", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Data Modeling",
    progressPercentage: "80",
  },
  {
    Stack: "Clustering & classification & Regression",
    progressPercentage: "80",
  },
  {
    Stack: "Web Scraping",
    progressPercentage: "90",
  },
];

export const educationInfo = [
  {
    schoolName: "Chinhoyi University Of Technology",
    subHeader: "Bachelors of Science Honors in Information Technology",
    Location: "South Africa",
    duration: "March 2019 - October 2023",
    desc: "Activities",
    descBullets: [
      "Participated in Enactus & Was appointed as a Project Director",
      "Appointed as the class representative with student over 100",
    ],
  },
  {
    schoolName: "Krugersdorp High",
    subHeader: "Grade 12 Matric",
    Location: "South Africa",
    duration: "Jan 2010 - December 2015",
    desc: "Activities",
    descBullets: [
      "Partipated in volunteer services",
      "Participated in Orienteering",
    ],
  },
];

export const experience = [
  {
    role: "Junior Software Engineer",
    company: "Drimkoe",
    companylogo: "/img/icons/common/drimkoeblue.png",
    date: "October 2020 – December 2020",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Develop, test and implement new software programs",
      "Participating in daily scrum meetings, sprint planning, unit testing and bug fixes.",
      "Test, maintain and recommend software improvements to ensure strong functionality and optimization",
    ],
  },
  {
    role: "Wordpress Developer",
    company: "Biz Afrique",
    companylogo: "/img/icons/common/bizafrique.jpeg",
    date: "September 2020 – March 2021",
    desc: "Develops new website features and seeks out existing solutions to meet client needs",
    descBullets: [
      "Maintaining a thorough understanding of how websites are constructed and how content is delivered online",
      "Staying abreast of new approaches in WordPress development",
      "Implements designed layout with attention to details such as style and size of type, photographs, graphics, animation, etc. for the web and various other media",
    ],
  },
  {
    role: "Quality Control Clerk",
    company: "Edcon Accenture",
    companylogo: "/img/icons/common/edcon.png",
    date: "August 2016 – October 2018",
    desc: "Followed up with staff and customers by phone and email regarding missing or needed information and compiled retrieved information into files.",
    descBullets: [
      "Recommend improved methods, records, to enhance quality and efficiency.",
      "Prepared new files and assigned tracking identification numbers, which resulted in better retrieval efficiency.",
      "Solve queries regarding dispatched equipment",
    ],
  },
];

export const projects = [
  {
    name: "Apache PySpark ",
    github: "https://github.com/digitaltk/Pyspark",
  },
  {
    name: "Data Analysis with Tableau",
    github: "https://github.com/digitaltk/Tableau",
  },
  {
    name: "Web Scraping",
    github: "https://github.com/digitaltk/scraping-with-takealot",
  },
  {
    name: "Clustering and Classification",
    github: "https://github.com/digitaltk/ML-Classification",
  },
  {
    name: "Regression",
    github: "https://github.com/digitaltk/ML-Regression",
  },
];

export const feedbacks = [
  {
    name: "Shaniel @ YP Africa",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Lee @ Biz Afrique",
    feedback:
      "The website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];

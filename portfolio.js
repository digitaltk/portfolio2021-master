import emoji from "react-easy-emoji";

export const greetings = {
  name: "Developer Tats",
  title: "Hi all, I'm Tatenda Makandigona",
  description:
    "Passionate Information Technology student with interest in Big Data & Data Analysis & Web Development & Digital Marketing",
  resumeLink: "https://www.linkedin.com/in/tmakandigona/",
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
      "⚡ Develop highly interactive full stack Interfaces for your web applications"
    ),
    emoji(
      "⚡ Build scalable databases capable of ETL processes using SQL and Spark."
    ),
    emoji(
      "⚡ Analytical skills with the ability to collect, organize and analyze large amounts of information with attention to detail and accuracy. (Web Scraping)"
    ),
    emoji(
      "⚡ Specialize in online web design, search engine marketing, and optimization, email marketing, and mobile website creations."
    ),

    emoji(
      "⚡ Evaluate data and make strategic recommendations through Google Analytics, YouTube analytics, Facebook Insight, Google Adwords and Twitter Analytics."
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "logos:woocommerce",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "yarn",
      fontAwesomeClassname: "vscode-icons:file-type-yarn",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Full Stack Development", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Big Data",
    progressPercentage: "70",
  },
  {
    Stack: "SEO & PPC",
    progressPercentage: "80",
  },
  {
    Stack: "Data Analysis",
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
    name: "React Website ",
    desc: "Reactjs + Styled Components + ContextApi",
    link: "https://github.com/digitaltk/monsters-rolodex/tree/master",
  },
  {
    name: "Web Scraping",
    desc: "Web scraping with Jupyter notebook and beautifulsoup",
    github: "https://github.com/digitaltk/Pyspark",
  },
  {
    name: "AspNet Project",
    github: "https://github.com/digitaltk/reactivities",
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

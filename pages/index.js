import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Tatenda makandigona",
          description:
            "A passionate Full Stack Web Developer and Data Engineer.",
          image:
            "https://media-exp1.licdn.com/dms/image/C4D03AQGGLp0jsBVINA/profile-displayphoto-shrink_200_200/0/1610547703608?e=1643241600&v=beta&t=MQF_0YAXP9z6ReN_gewdkpV-yAwcHBMzQcA2JrzGBeY",
          url: "https://portfolio-mjhrx3tvc-digitaltk.vercel.app",
          keywords: [
            "Tatenda",
            "Tatenda Makandigona",
            "Freelancers In Zimbabwe",
            "Freelancer in South Africa",
            "Portfolio",
            "tatenda Makandigona Portfolio ",
            "Tatenad Portfolio",
            "web developer",
            "full stack",
            "full stack web developer",
            "Data Engineering",
            "mobile app developer",
            "wordpress developer around me",
            " SEO, Google Ads, PPC, WordPress Development including shopify, JavaScript, eCommerce, Woocommerce, Magento, PHP, MySQL, HTML, CSS, and Content Writing.",
            "Improve my website",
            "create an online store",
            "spark apache ",
            "expressjs",
            "improve seo ",
            "contextapi",
            "redux",
            "apache",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Feedbacks />
      <Projects />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(
    `https://api.github.com/users/${openSource.githubUserName}`
  ).then((res) => res.json());

  return {
    props: { githubProfileData },
  };
}

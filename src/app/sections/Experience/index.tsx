import styles from "./experience.module.css";
import React, { ReactElement } from "react";
import Icon from "../../../components/Icon";
import Image from "next/image";

const EXPERIENCE = [
  {
    companyImg: "/assets/hashedin.png",
    weblink: "https://hashedin.com",
    time: "Apr 2021 - Oct 2023",
    CompanyName: "HashedIn by Deloitte",
    designation:
      "Software Engineer II, I and Intern",
    description:
      "Throughout my tenure at HashedIn, I advanced from Software Engineer 1 to Software Engineer 2, contributing to diverse web projects utilizing React JS. I collaboratively developed an internal tool enhancing project allocation and earned three Excellence Awards for team management and code development. Additionally, I participated in Proof of Concepts to identify optimal solutions. As Software Engineer 2, I led front-end development, mentored interns via the HashedIn University program, and helped create a component library for internal tools. Collaborating with cross-functional teams, I worked to improve unit testing code coverage.​",
  },
  {
    companyImg: "/assets/Ihn.png",
    weblink: "https://integrative.sa",
    time: "Nov 2023 - Jun 2024",
    designation: "Software Engineer II",
    CompanyName: "Integrative Health",
    description:
      "​I have implemented key product features using React, React Native, and Firebase, collaborating with clients to integrate their products into IHN's offerings. By applying techniques such as lazy loading, I enhanced web application performance. Additionally, I led the development of internal dashboards with Retool, streamlining operations and improving monitoring. I also developed a help desk tool by integrating Zoho Desk's APIs, connecting it with both mobile and web platforms to provide a unified support experience.",
  },
  {
    companyImg: "/assets/sm.png",
    weblink: "https://surveymonkey.com",
    time: "Jun 2024 - Present",
    designation: "Software Engineer II ",
    CompanyName: "SurveyMonkey",
    description:
      "​In my role, I have been instrumental in enhancing our checkout and payment systems. I collaborated on rebuilding the checkout flow by integrating a new design system with Stripe Elements, utilizing Stripe's prebuilt UI components to create a seamless and secure payment experience. Additionally, I contributed to developing new features for the Billing and Payments pages, ensuring they are user-friendly and align with current payment standards. To improve checkout conversion rates, I assisted in running experiments on the checkout and pricing pages, focusing on simplifying the process and implementing other strategies to enhance user engagement and reduce cart abandonment.",
  },
].reverse();
const Experience: React.FC<{}> = (): ReactElement => {
  return (
    <>
      <h1 className={styles.workHeading}>Work.</h1>
      <div id="experience" className={styles.backgroud}>
        {EXPERIENCE.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.headingWrapper}>
                <Image
                  src={item.companyImg}
                  alt="company"
                  width="60"
                  height="60"
                />
              </div>
              <a href={item.weblink} target="_blank" className={styles.companyName}>{item.CompanyName}<div className={styles.arrowIcon}>
                <Icon iconName="ri-arrow-right-up-line" />
              </div></a>
              <div className={styles.heading}>
                {item.designation.split("\n").map((i, key) => {
                  return <div key={key}>{i}</div>;
                })}
              </div>
              <p className={styles.heading1}>{item.time}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;

"use client";
import styles from "./info.module.css";
import { Avatar } from "@radix-ui/themes";
import Icon from "../../../components/Icon";
import lottie from "lottie-web";
import React, { ReactElement, useEffect } from "react";
import { Button } from "@radix-ui/themes";


const InfoSection: React.FC<{}> = (): ReactElement => {
  useEffect(() => {
    const elements = [
      { selector: ".github", path: "/assets/github.json" },
      { selector: ".linkedin", path: "/assets/linkedin.json" },
      { selector: ".twitter", path: "/assets/twitter.json" },
    ];

    const animations = elements
      .map(({ selector, path }) => {
        const element = document.querySelector(selector);
        if (!element) return null;

        const animation = lottie.loadAnimation({
          container: element,
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: path,
        });

        const playAnimation = () => animation.play();
        const stopAnimation = () => animation.goToAndStop(0, true);

        element.addEventListener("mouseenter", playAnimation);
        element.addEventListener("mouseleave", stopAnimation);

        return { element, playAnimation, stopAnimation, animation };
      })
      .filter(Boolean);

    return () => {
      animations.forEach(
        ({ element, playAnimation, stopAnimation, animation }) => {
          element.removeEventListener("mouseenter", playAnimation);
          element.removeEventListener("mouseleave", stopAnimation);
          animation.destroy();
        }
      );
    };
  }, []);

  return (
    <>
    <div className={styles.btnWrapper}>
        <a
          target="_blank"
          className={styles.btn}
          href={
            "https://drive.google.com/file/d/1ebEBpv5dLI2_15EiYYaGIRxsl-i5fvlG/view?usp=sharing"
          }
        >
          <Button className={styles.btn}>Resume</Button>
        </a>
      </div>
            <div className={styles.maxWidth}>

      <div id="about" className={styles.background}>
          <div className={styles.headingWrapper}>
            <div>
              <h1 className={styles.heading}>Hey there, </h1>
              <h1 className={styles.heading}>
                I&apos;m{" "}
                <span className={styles.highlight}>Rakesh Mariyaplar</span>{" "}
              </h1>
            </div>
            <div className={styles.imgWrapper}>
              <Avatar
                className={styles.img}
                radius={"full"}
                size="9"
                src="/assets/profile2.jpeg"
                fallback={"RM"}
              />
            </div>
          </div>
          <p className={styles.description}>
            I am a software engineer based in Bangalore with 4 years of
            experience in Frontend and Backend technologies. Currently, I am
            working as a Software Engineer II at SurveyMonkey.
          </p>
          <div className={styles.socialWrapper}>
            <a
              href="https://github.com/rakesh-m-r"
              className={styles.socialWrap}
            >
              <div className="github"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/rakesh-m-r"
              className={styles.socialWrap}
            >
              <div className="linkedin"></div>
            </a>
            <a
              href="https://twitter.com/rakesh_m_r_"
              className={styles.socialWrap}
            >
              <div className="twitter"></div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <a className={styles.btn} href={"#experience"}>
          <Icon iconName="ri-mouse-line" />
        </a>
      </div>
    </>
  );
};

export default InfoSection;

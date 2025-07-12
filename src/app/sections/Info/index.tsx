"use client";
import styles from "./info.module.css";
import { Avatar } from "@radix-ui/themes";
import Icon from "../../../components/Icon";
import lottie, { AnimationItem } from "lottie-web";
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
          loop: true,
          autoplay: false,
          path,
        });

        const handleMouseEnter = () => animation.play();
        const handleMouseLeave = () => animation.goToAndStop(0, true);

        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);

        return { element, animation, handleMouseEnter, handleMouseLeave };
      })
      .filter(
        (
          item
        ): item is {
          element: Element;
          animation: AnimationItem;
          handleMouseEnter: () => void;
          handleMouseLeave: () => void;
        } => item !== null
      );

    return () => {
      animations.forEach(
        ({ element, animation, handleMouseEnter, handleMouseLeave }) => {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
          animation.destroy();
        }
      );
    };
  }, []);

  return (
    <>
      <div className={styles.maxWidth}>
        <div className={styles.resumebtnWrapper}>
          <a
            target="_blank"
            className={styles.resumeBtn}
            href={
              "https://drive.google.com/file/d/1tOoFFHG7MJRn_nYF50UXL4FLqdwl-ilm/view"
            }
          >
            <Button className={styles.resumeBtn}>Resume <Icon iconName="ri-arrow-right-line"/></Button>
          </a>
        </div>
        <div id="about" className={styles.background}>
          <div className={styles.headingWrapper}>
            <div>
              <h1 className={styles.heading}>Hey There, </h1>
              <h1 className={styles.heading}>
                I&apos;m{" "}
                <span className={styles.highlight}>Rakesh M R</span>{" "}
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
            experience in Frontend technologies React, JavaScript, TypeScript. Currently, I am
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
        <div className={styles.btnWrapper}>
          <a className={styles.btn} href={"#experience"}>
            <Icon iconName="ri-mouse-line" />
          </a>
        </div>
      </div>
    </>
  );
};

export default InfoSection;

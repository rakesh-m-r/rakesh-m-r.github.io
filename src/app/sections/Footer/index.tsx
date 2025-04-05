"use client";
import styles from "./footer.module.css";
import React, { ReactElement } from "react";

const Footer: React.FC<{}> = (): ReactElement => {
  return <>
  <div className={styles.background}>
    <p className={styles.footer}>
  Built with Next.js and Radix UI, deployed with Vercel.</p></div></>;
};

export default Footer;

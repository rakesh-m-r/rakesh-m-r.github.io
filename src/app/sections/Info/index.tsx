import styles from './info.module.css';
import {Avatar} from "@radix-ui/themes";
import Icon from "../../../components/Icon";
import React,{ReactElement} from "react";

const InfoSection:React.FC<{}> = ():ReactElement =>{
    return <div className={styles.backgroud}>
        <div className={styles.column}>
            <svg aria-hidden="true" className={`${styles.hFull} ${styles.wFull}`}><defs><pattern id=":S2:" width="128" height="128" patternUnits="userSpaceOnUse" x="100%" y="100%" patternTransform="translate(112 64)"><path d="M0 128V.5H128" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#:S2:)"></rect></svg>
        </div>
        <div className={styles.column}>
            <div className={styles.card}>
                <div className={styles.imgWrapper}>
                <Avatar className={styles.img} radius={"full"} size="9" src="/assets/profile.jpg" fallback={"RM"}/>
                </div>
                <h1 className={styles.heading}>Hey there, </h1>
                <h1 className={styles.heading}>I&apos;m <span className={styles.highlight}>Rakesh Mariyaplar</span> </h1>
                <p className={styles.description}>I am a software engineer based in Bangalore with 2+ years of experience in front-end technologies. Currently, I am working as a Software Development Engineer 2 (SDE-2) at Hashedin by Deloitte.</p>
                <div className={styles.socialWrapper}>
                    <a target='_blank' href='https://github.com/rakesh-m-r'><Icon iconName={"ri-github-fill"}/></a>
                    <a target='_blank' href='https://www.linkedin.com/in/rakesh-m-r'><Icon iconName={"ri-linkedin-fill"}/></a>
                    <a target='_blank' href='https://twitter.com/rakesh_m_r_'><Icon iconName={"ri-twitter-x-fill"}/></a>
                </div>
            </div>
        </div>
    </div>
}

export default  InfoSection;
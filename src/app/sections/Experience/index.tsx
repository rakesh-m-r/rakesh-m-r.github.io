import styles from './experience.module.css';
import React,{ReactElement} from "react";
import Icon from "../../../components/Icon";
import {Button} from "@radix-ui/themes";

const EXPERIENCE=[{
    time:"APR - JUL 2021",
    designation:"Software Engineer Intern - HashedIn by Deloitte",
    description:"Received comprehensive training in web development, encompassing both frontend and backend skills, and gained expertise in deploying web applications on Google Cloud Platform (GCP). Collaborated within a four-member team to design and develop a product, acquiring practical experience from project inception in a training program."},{
    time:"2021 - 2023",
    designation:"Software Engineer 1 - HashedIn by Deloitte",
    description:"Contributed to various web-based projects for multiple clients, engaging in the entire development lifecycle and employing technologies like React JS. Successfully designed and implemented an internal tool to enhance project allocation processes collaboratively. Received the Excellence Award three times, acknowledging exceptional contributions in team management and code development. Actively participated in Proof of Concepts (POCs) to identify optimal solutions for specific challenges."},{
    time:"MAY 2023 - PRESENT",
    designation:"Software Engineer 2 - HashedIn by Deloitte",
    description:"Currently overseeing all facets of front-end development for the ongoing project. In addition, provided training and mentorship to new interns in product development through the HashedIn University program. Contributed significantly to the creation of a comprehensive component library for internal tools, fostering efficiency and consistency in development. Collaborated with cross-functional teams to elevate code coverage in unit testing, actively supporting teams in enhancing their practices to ensure thorough code coverage."}]
const Experience:React.FC<{}> = ():ReactElement =>{
    return <><div id='experience' className={styles.backgroud}>
        {EXPERIENCE.map((item,index)=>{
            return (
                <div key={index} className={styles.card}>
                    <div className={styles.icon}><Icon iconName={"ri-circle-fill"}/></div>
                    <p className={styles.heading1}>{item.time}</p>
                    <p className={styles.heading}>{item.designation}</p>
                    {item.description.split('^').map((item,i)=>{
                        return ( <p key={i} className={styles.description}>{item}</p>)
                    })}
                </div>
            )
        })}
    </div>
    <div className={styles.btnWrapper}><a target="_blank" className={styles.btn} href={"https://drive.google.com/file/d/1ebEBpv5dLI2_15EiYYaGIRxsl-i5fvlG/view?usp=sharing"}><Button className={styles.btn}>Resume</Button></a></div>
    </>
}

export default  Experience;
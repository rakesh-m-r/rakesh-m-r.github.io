import styles from './icon.module.scss'
import React from 'react';
import {ReactElement} from "react";

const Icon: React.FC<{}> = ({iconName}:{iconName:string}):ReactElement=>{
    return <i className={`${iconName} ${styles.icon}` }></i>
}
export default Icon;

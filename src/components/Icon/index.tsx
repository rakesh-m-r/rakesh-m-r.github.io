import styles from './icon.module.scss'
import React from 'react';
import {ReactElement} from "react";
interface IconProps {
    iconName: string;
}
const Icon: React.FC<IconProps> = ({iconName}:IconProps):ReactElement=>{
    return <i className={`${iconName} ${styles.icon}` }></i>
}
export default Icon;

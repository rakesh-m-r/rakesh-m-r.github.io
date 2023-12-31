import { ReactElement} from "react";
import styles from './icon.module.scss'
const Icon:ReactElement =({iconName}:{iconName:string})=>{
    return <i className={`${iconName} ${styles.icon}` }></i>
}
export default Icon;

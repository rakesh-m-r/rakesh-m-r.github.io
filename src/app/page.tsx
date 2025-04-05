import styles from './page.module.scss'
import '@radix-ui/themes/styles.css';
import {Theme} from '@radix-ui/themes';
import InfoSection from '@/app/sections/Info';
import Experience from "@/app/sections/Experience";

export default function Home() {
  return (
    <Theme accentColor='blue' radius='full' appearance='dark'>
    <main className={styles.main}>
      <InfoSection/>
      <Experience/>
    </main>
</Theme>
  )
}

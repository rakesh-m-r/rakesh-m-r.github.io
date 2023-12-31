import styles from './page.module.scss'
import '@radix-ui/themes/styles.css';
import {Button, Theme, ThemePanel} from "@radix-ui/themes";
import 'remixicon/fonts/remixicon.css'
import InfoSection from "@/app/sections/Info";

export default function Home() {
  return (
    <Theme accentColor='blue' radius='full' appearance='inherit'>
    <main className={styles.main}>
      <InfoSection/>
    </main>
</Theme>
  )
}

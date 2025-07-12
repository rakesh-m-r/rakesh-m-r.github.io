import styles from "./page.module.scss";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import InfoSection from "@/app/sections/Info";
import Experience from "@/app/sections/Experience";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <Theme accentColor="blue" radius="full" appearance="dark">
      <main className={styles.main}>
        <InfoSection />
        <Experience />
        <Footer />
      </main>
    </Theme>
  );
}

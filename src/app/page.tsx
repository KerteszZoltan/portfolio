import Image from "next/image";
import styles from "./page.module.scss";
import Landing from "@/modules/landing/components/panel/panel";

import BackgroundVideo from "@/modules/landing/components/backgroundVideo/backgroundVideo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing></Landing>
    </main>
  );
}

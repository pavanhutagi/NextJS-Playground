"use client";

import styles from "./styles.module.css";

import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const navigateToContact = () => {
    router.push("/contact");
  };

  return (
    <>
      <div className={styles["hero-section-container"]}>
        <div className={styles["title"]}>Hey there, I’m Pavan Hutagi 👋🏻</div>
        <div className={styles["sub-title"]}>
          I build intuitive and intricate web apps.
        </div>
        <div className={styles["connect-button"]} onClick={navigateToContact}>
          Connect
        </div>
      </div>
    </>
  );
}

import React from "react";
import styles from "./MemeCollageVideoSection.module.css";

export default function MemeCollageVideoSection() {
  return (
    <section className={styles.videoSection}>
      <div className={styles.videoContainer}>
        <video
          src="/Video/Indian-Meme-Collage.webm"
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        />
      </div>
    </section>
  );
}
import styles from "./landing.module.css";
import Image from "next/image";

export default function Landing() {
  return (
    <div className={styles.gridContainer}>
      <nav className={styles.nav}>
        <Image
          src="/images/HS_logo_glitch.png" // Route of the image file
          unoptimized={true}
          height={144} // Desired size with correct aspect ratio
          width={122} // Desired size with correct aspect ratio
          alt="Hayden Sykes Logo"
          className={styles.logoImage}
        />
        <h1 className={styles.name}>
          <span className={styles.h}> H</span>ayden{" "}
          <span className={styles.s}>S</span>ykes
        </h1>
      </nav>
      <div className={styles.itemB}></div>
      <div className={styles.itemC}></div>
      <div className={styles.itemD}></div>
    </div>
  );
}

/*
 <nav className={styles.nav}>
      <Image
        src="/images/HS_logo_glitch.png" // Route of the image file
        unoptimized={true}
        height={144} // Desired size with correct aspect ratio
        width={122} // Desired size with correct aspect ratio
        alt="Hayden Sykes Logo"
        className={styles.logoImage}
      />
      <h1 className={styles.name}>
        <span className={styles.h}> H</span>ayden{" "}
        <span className={styles.s}>S</span>ykes
      </h1>
    </nav>
*/

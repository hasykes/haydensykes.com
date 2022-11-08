import styles from "./logo.module.css";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

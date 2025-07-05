import React from "react";
import styles from "./socialMedia.module.css";
import {
  Facebook,
  LinkedIn,
  Twitter,
  Instagram,
} from "@/utils/SocialMediaIcons";
import Link from "next/link";

function SocialMedia() {
  const iconSize = 40;
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <Link href="/">
          <Facebook size={iconSize} />
        </Link>
      </div>

      <div className={styles.icon}>
        <Link href="/">
          <LinkedIn size={iconSize} />
        </Link>
      </div>

      <div className={styles.icon}>
        <Link href="/">
          <Twitter size={iconSize} />
        </Link>
      </div>

      <div className={styles.icon}>
        <Link href="/">
          <Instagram size={iconSize} />
        </Link>
      </div>
    </div>
  );
}

export default SocialMedia;

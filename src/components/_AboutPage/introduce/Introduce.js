import React from "react";
import styles from "./introduce.module.css";
import Container from "@/layout/Container";
import Image from "next/image";
import SocialMedia from "@/layout/social/SocialMedia";

function Introduce() {
  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image
              alt="portrait"
              fill
              src="/images/hero.jpg"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.description}>
            <div>
              <h1>Shahriar’s Story</h1>
              <p>
                Eight years ago, I came to St. John’s as a newcomer, just like
                many of my clients. I completed my Bachelor&apos;s degree in
                Computer Science and built strong relationships and a solid
                reputation in the local community. Over the years, I developed a
                deep love for this city and its people – which eventually led me
                to pursue a career in real estate. Since starting this journey,
                I’ve had the privilege of helping a good number of families –
                especially newcomers and Bangladeshi clients – find homes where
                their stories could begin. This isn’t just a job; it’s my
                passion.
              </p>
            </div>

            <div className={styles.social}>
              <p>Follow me:</p>
              <SocialMedia />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Introduce;

"use client";

import React, { useRef } from "react";
import styles from "./description.module.css";
import Container from "@/layout/Container";
import Image from "next/image";
import useGsapReveal from "@/hooks/useGsapReveal";

const services = [
  {
    icon: "/icons/Home.png",
    title: "Residential Buying & Selling",
  },
  { icon: "/icons/Map.png", title: "First-Time Homebuyer Guidance" },
  {
    icon: "/icons/group.png",
    title: "Personalized Support for Newcomers",
  },
  {
    icon: "/icons/chart.png",
    title: "Free Market Evaluations",
  },
];

function Description() {
  const animate = useRef(null);
  const card = useRef(null);

  useGsapReveal({
    ref: animate,
    stagger: true,
    once: false,
  });

  useGsapReveal({
    ref: card,
    stagger: true,
    once: false,
  });

  return (
    <div>
      <Container>
        <div className={styles.wrapper}>
          <div ref={animate} className={styles.description}>
            <h1>
              Your Local Real Estate Professional Dedicated to making your
              property journey seamless and successful.
            </h1>
            <div className={styles.logo}>
              <Image
                src="/images/portait.jpeg"
                width={150}
                height={150}
                alt="portait"
              />
            </div>
            <p>
              Welcome to the home of real estate done differently. I’m Shahriar
              Jobayer – your neighbor, your guide, and your Realtor. Whether
              you&apos;re buying your first home, upgrading, or selling with
              confidence, I’m here to walk you through every step with honesty,
              clarity, and care.
            </p>
          </div>

          <div ref={card} className={styles.services}>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Description;

const ServiceCard = ({ icon, title }) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.icon}>
        <Image
          src={icon}
          alt={title}
          width={50}
          height={50}
          className={styles.iconImage}
        />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

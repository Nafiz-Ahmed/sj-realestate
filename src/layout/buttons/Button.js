"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import styles from "./button.module.css";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Button({
  link = "",
  text = "Contact Us",
  target = "_self",
  style = {},
  onClick,
  whiteButton = false,
}) {
  const buttonRef = useRef(null);
  const flairRef = useRef(null);

  useGSAP(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;
    if (!button || !flair) return;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      )(e.clientX - left);
      const y = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      )(e.clientY - top);
      return { x, y };
    };

    const enter = (e) => {
      const { x, y } = getXY(e);
      xSet(x);
      ySet(y);
      gsap.to(flair, { scale: 1, duration: 0.4, ease: "power2.out" });
    };

    const leave = (e) => {
      const { x, y } = getXY(e);
      gsap.killTweensOf(flair);
      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const move = (e) => {
      const { x, y } = getXY(e);
      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", enter);
    button.addEventListener("mouseleave", leave);
    button.addEventListener("mousemove", move);

    return () => {
      button.removeEventListener("mouseenter", enter);
      button.removeEventListener("mouseleave", leave);
      button.removeEventListener("mousemove", move);
    };
  }, []);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (link) window.open(link, target);
  };

  return (
    <div
      ref={buttonRef}
      className={`${whiteButton ? styles.buttonWhite : styles.button}`}
      style={style}
      onClick={handleClick}
    >
      <span ref={flairRef} className={styles.flair}>
        <span
          className={whiteButton ? styles.flairInnerWhite : styles.flairInner}
        ></span>
      </span>

      <div className={styles.label}>{text}</div>
    </div>
  );
}

export default Button;

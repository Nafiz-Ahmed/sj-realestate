"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const directionMap = {
  top: { y: -50, x: 0 },
  bottom: { y: 50, x: 0 },
  left: { x: -50, y: 0 },
  right: { x: 50, y: 0 },
  center: { x: 0, y: 0 },
  nav: { y: -500, x: 0 },
};

export default function useGsapReveal({
  ref,
  from = "bottom",
  stagger = false,
  delay = 0,
  duration = 0.7,
  staggerDelay = 0.1,
  once = true, // play only once by default
  skew = 3,
  start = "top 90%", // sensible default start trigger
}) {
  useLayoutEffect(() => {
    if (!ref?.current) return;

    const el = ref.current;
    const fromVars = directionMap[from] || directionMap.bottom;
    const targets = stagger ? el.children : el;

    const ctx = gsap.context(() => {
      // Immediately set initial styles to prevent FOUC
      gsap.set(targets, {
        opacity: 0,
        x: fromVars.x,
        y: fromVars.y,
        skewY: skew,
      });

      // Animate to visible
      gsap.to(targets, {
        opacity: 1,
        x: 0,
        y: 0,
        skewY: 0,
        duration,
        delay,
        ease: "power3.out",
        stagger: stagger ? staggerDelay : 0,
        immediateRender: false, // prevent flicker
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
          markers: false, // set to true for debugging scrollTrigger positions
          // You can add 'once: true' here but toggleActions "play none none none" covers it
        },
      });
    }, el);

    return () => ctx.revert();
  }, [ref, from, stagger, delay, duration, staggerDelay, once, skew, start]);
}

"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
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
  once = true,
  skew = 3,
  start = "top 90%",
}) {
  const pathname = usePathname(); // detects client-side route change

  useLayoutEffect(() => {
    if (!ref?.current) return;

    const el = ref.current;
    const fromVars = directionMap[from] || directionMap.bottom;
    const targets = stagger ? el.children : el;

    const ctx = gsap.context(() => {
      // Set initial hidden state
      gsap.set(targets, {
        opacity: 0,
        x: fromVars.x,
        y: fromVars.y,
        skewY: skew,
      });

      // Animate to visible with ScrollTrigger
      gsap.to(targets, {
        opacity: 1,
        x: 0,
        y: 0,
        skewY: 0,
        duration,
        delay,
        ease: "power3.out",
        stagger: stagger ? staggerDelay : 0,
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none play none",
          markers: false,
        },
      });
    }, el);

    return () => ctx.revert(); // cleanup on route change or unmount
  }, [
    delay,
    duration,
    from,
    pathname,
    ref,
    skew,
    stagger,
    staggerDelay,
    start,
  ]); // re-run hook on route change
}

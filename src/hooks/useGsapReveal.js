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
};

export default function useGsapReveal({
  ref,
  from = "bottom",
  stagger = false,
  delay = 0,
  duration = 0.7,
  staggerDelay = 0.1,
  once = false,
  skew = 3,
  start = "top 95%",
}) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!ref?.current) return;

    const el = ref.current;
    const targets = stagger ? el.children : el;
    const fromVars = directionMap[from] || directionMap.bottom;

    const ctx = gsap.context(() => {
      gsap.set(targets, {
        opacity: 0,
        x: fromVars.x,
        y: fromVars.y,
        skewY: skew,
      });

      const animationProps = {
        opacity: 1,
        x: 0,
        y: 0,
        skewY: 0,
        duration,
        delay,
        ease: "power3.out",
        stagger: stagger ? staggerDelay : 0,
        immediateRender: false,
      };

      // Main GSAP animation with ScrollTrigger
      gsap.to(targets, {
        ...animationProps,
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: once
            ? "play none none none"
            : "play complete none reverse",
          markers: false,
          onEnter: () => {
            // If the trigger is already in view, play animation manually
            const isVisible = isInViewport(el);
            if (isVisible) {
              gsap.to(targets, animationProps);
            }
          },
        },
      });
    }, el);

    return () => ctx.revert();
  }, [
    delay,
    duration,
    from,
    once,
    pathname,
    ref,
    skew,
    stagger,
    staggerDelay,
    start,
  ]);

  // Helper: Check if element is in viewport
  function isInViewport(el) {
    if (!el || typeof window === "undefined") return false;
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }
}

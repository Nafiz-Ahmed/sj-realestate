"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const directionMap = {
  top: { y: -50, x: 0 },
  bottom: { y: 50, x: 0 },
  left: { x: -50, y: 0 },
  right: { x: 50, y: 0 },
  center: { x: 0, y: 0 },
  nav: { y: -500, x: 0 },
};

/**
 * GSAP Reveal Hook
 * @param {Object} options
 * @param {React.RefObject} options.ref - Ref to the parent or single element
 * @param {'top'|'bottom'|'left'|'right'|'center'} [options.from='bottom']
 * @param {boolean} [options.stagger=false] - Animate child elements with stagger
 * @param {number} [options.delay=0] - Delay before animation starts (after scroll trigger)
 * @param {number} [options.duration=1] - Duration of animation
 * @param {number} [options.staggerDelay=0.1] - Time between child animations
 * @param {boolean} [options.once=true] - If true, animation plays only once
 * @param {number} [options.skew=5] - Skew value for skewY animation
 */
export default function useGsapReveal({
  ref,
  from = "bottom",
  stagger = false,
  delay = 0,
  duration = 0.5,
  staggerDelay = 0.1,
  once = false,
  skew = 3,
}) {
  useLayoutEffect(() => {
    if (!ref?.current) return;

    const el = ref.current;
    const fromVars = directionMap[from] || directionMap.bottom;
    const targets = stagger ? el.children : el;

    const ctx = gsap.context(() => {
      if (stagger) {
        // Remove id from parent and all children
        el.removeAttribute("id");
        Array.from(el.children).forEach((child) => child.removeAttribute("id"));
      } else {
        // Just remove from the single element
        targets.removeAttribute("id");
      }
      gsap.fromTo(
        targets,
        {
          opacity: 0,
          ...fromVars,
          skewY: skew,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          skewY: 0,
          duration,
          delay,
          ease: "power3.out",
          stagger: stagger ? staggerDelay : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: once
              ? "play none none none"
              : "play reverse play reverse",
          },
        }
      );
    }, el);

    return () => ctx.revert(); // Clean up animations on unmount
  }, [ref, from, stagger, delay, duration, staggerDelay, once, skew]);
}

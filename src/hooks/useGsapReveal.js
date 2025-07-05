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
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (!ref?.current) return;

    const el = ref.current;
    const targets = stagger ? el.children : el;
    const fromVars = directionMap[from] || directionMap.bottom;

    let ctx;

    const setupAnimation = () => {
      ctx = gsap.context(() => {
        // Step 1: Set initial state (invisible and offset)
        gsap.set(targets, {
          opacity: 0,
          x: fromVars.x,
          y: fromVars.y,
          skewY: skew,
        });

        // Step 2: Define animation
        const anim = {
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

        const isVisible = isInViewport(el);

        if (isVisible) {
          // Element already visible (e.g., Footer)
          gsap.to(targets, anim);
        } else {
          // ScrollTrigger based animation
          gsap.to(targets, {
            ...anim,
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: once
                ? "play none none none"
                : "play reverse play reverse",
              markers: false,
            },
          });
        }
      }, el);
    };

    // ⏱ Delay execution to ensure layout is ready
    const rafId = requestAnimationFrame(setupAnimation);

    return () => {
      cancelAnimationFrame(rafId);
      ctx?.revert();
    };
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

  function isInViewport(el) {
    if (!el || typeof window === "undefined") return false;
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }
}

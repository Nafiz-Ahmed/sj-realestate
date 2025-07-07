"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function useSplitText(ref, options = {}) {
  const {
    splitOptions = { type: "chars" },
    animation = {
      from: { y: 50, opacity: 0 },
      to: {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.5,
        ease: "power2.out",
      },
      delay: 0,
    },
    once = false,
  } = options;

  const splitRef = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // Clean previous splits if any
    if (splitRef.current) {
      splitRef.current.revert();
    }

    // Apply split
    splitRef.current = new SplitText(ref.current, splitOptions);
    const targets = splitRef.current[splitOptions.type] || [];

    // Apply initial state
    gsap.set(targets, animation.from);

    const tween = gsap.to(targets, {
      ...animation.to,
      delay: animation.delay,
    });

    return () => {
      if (!once) {
        tween.kill();
      }
      if (splitRef.current) {
        splitRef.current.revert();
        splitRef.current = null;
      }
    };
  }, [ref, splitOptions, animation, once]);
}

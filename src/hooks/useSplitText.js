"use client";

import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function useSplitText(ref, options = {}) {
  const {
    splitOptions = { types: "chars" },
    animation = {
      from: { y: 50, opacity: 0 },
      to: {
        y: 0,
        opacity: 1,
        stagger: 0.01,
        duration: 0.3,
        ease: "power2.out",
      },
      delay: 0,
    },
  } = options;

  useGSAP(() => {
    if (!ref.current) return;
    ref.current.removeAttribute("id");

    new SplitType(ref.current, splitOptions);

    const tag = ref.current.tagName.toLowerCase();
    const chars = gsap.utils.toArray(`${tag} .char`);

    gsap.set(chars, animation.from);

    gsap.to(chars, {
      ...animation.to,
      delay: animation.delay,
    });
  }, [ref, splitOptions, animation]);
}

"use client";

import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrambleTextPlugin, useGSAP);

export function useScrambleText(ref, words = [], options = {}) {
  const {
    delay = 3,
    scrambleSettings = {
      duration: 3,
      repeat: 1,
      yoyo: true,
      repeatDelay: 3,
      ease: "power2.inOut",
      scrambleText: {
        chars: "*&%$#@!';,.<>",
        newClass: "accent--text",
        revealDelay: 0.3,
        tweenLength: false,
      },
    },
  } = options;

  useGSAP(() => {
    ref.current.removeAttribute("id");

    if (!ref.current || !words.length) return;

    const startLoop = () => {
      const masterTl = gsap.timeline({ repeat: -1 });

      words.forEach((word) => {
        const tl = gsap.timeline({
          repeat: scrambleSettings.repeat,
          yoyo: scrambleSettings.yoyo,
          repeatDelay: scrambleSettings.repeatDelay,
          ease: scrambleSettings.ease,
        });

        tl.to(ref.current, {
          duration: scrambleSettings.duration,
          scrambleText: {
            ...scrambleSettings.scrambleText,
            text: word,
          },
        });

        masterTl.add(tl);
      });
    };

    gsap.delayedCall(delay, startLoop);
  }, [ref, words, scrambleSettings, delay]);
}

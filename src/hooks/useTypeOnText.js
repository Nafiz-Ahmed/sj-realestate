import { useEffect } from "react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

// Register the TextPlugin for type-on animations
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

/**
 * useTypeOnText hook
 * @param {React.RefObject<HTMLElement>} ref - The element to apply the type-on text animation
 * @param {string[]} texts - Array of words/phrases to cycle through
 * @param {object} options - Configuration options
 * @param {number} options.startDelay - Delay before the first animation begins (in seconds)
 * @param {number} options.typeDuration - Duration of typing each phrase (in seconds)
 * @param {number} options.deleteDuration - Duration of deleting each phrase (in seconds)
 * @param {number} options.stayDuration - How long the full text stays before deleting (in seconds)
 */
export default function useTypeOnText(
  ref,
  texts = [],
  {
    startDelay = 3,
    typeDuration = 1,
    deleteDuration = 0.5,
    stayDuration = 1,
  } = {}
) {
  useEffect(() => {
    const el = ref.current;
    if (!el || texts.length === 0) return;

    // Create an infinite timeline that repeats through all texts
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    // Initial start delay
    tl.delay(startDelay);

    texts.forEach((word) => {
      // Type the word in
      tl.to(el, {
        duration: typeDuration,
        text: word,
        ease: "none",
      });
      // Hold the full word
      tl.to({}, { duration: stayDuration });
      // Delete the text
      tl.to(el, {
        duration: deleteDuration,
        text: "",
        ease: "none",
      });
    });

    return () => {
      // Clean up the animation on unmount
      tl.kill();
    };
  }, [ref, startDelay, typeDuration, deleteDuration, stayDuration, texts]);
}

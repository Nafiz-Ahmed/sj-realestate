// components/ScrollTriggerRefresh.jsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTriggerRefresh() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      ScrollTrigger.refresh();
      window.scrollTo(0, 0); // optional: ensure scroll is at top
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
}

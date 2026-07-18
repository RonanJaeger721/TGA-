"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    const selectors = [
      ".home-hero",
      ".sub-hero",
      "section",
      ".scene-grid article",
      ".service-scenes article",
      ".part-card",
      ".model-card",
      ".service-accordion details",
      ".site-footer > div",
    ].join(",");

    const targets = Array.from(document.querySelectorAll<HTMLElement>(selectors));
    targets.forEach((target, index) => {
      target.classList.add("reveal-target");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });
    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "-8% 0px -10% 0px", threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}

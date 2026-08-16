"use client";

import { useEffect } from "react";

const REVEAL = [
  ".feature_section .heading_block",
  ".online_banking_features .imagebox_block",
  ".about_section .heading_block",
  ".gx-world",
  ".funfact_section .heading_block",
  ".funfact_block.style_2",
  ".ob_process_section .heading_block",
  ".online_banking_process > li",
  ".review_section .heading_block",
  ".review_carousel_2",
  ".integrated_section .heading_block",
  ".integrated_wrapper",
  ".appstore_section .heading_block",
  ".appstore_section .app_image",
  ".appstore_section .appp_btn",
];

export function ScrollEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const nodes = REVEAL.flatMap((selector) => [...document.querySelectorAll<HTMLElement>(selector)]);
    const groups = new Map<Element | null, HTMLElement[]>();

    nodes.forEach((node) => {
      const parent = node.parentElement;
      const list = groups.get(parent) ?? [];
      list.push(node);
      groups.set(parent, list);
    });

    groups.forEach((list) => {
      list.forEach((node, index) => {
        node.classList.add("gx-reveal");
        node.style.setProperty("--gx-delay", `${Math.min(index * 90, 360)}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-inview");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));

    const hand = document.querySelector<HTMLElement>(".hero_online_banking .hero_hand_image");
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        if (hand && window.innerWidth >= 992) {
          hand.style.translate = `0 ${Math.min(y * 0.18, 140)}px`;
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

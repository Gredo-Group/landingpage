"use client";

import { useEffect } from "react";

const SCRIPTS = [
  "/assets/js/jquery.min.js",
  "/assets/js/popper.min.js",
  "/assets/js/bootstrap.min.js",
  "/assets/js/bootstrap-dropdown-ml-hack.min.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/js/parallaxie.js",
  "/assets/js/parallax-scroll.js",
  "/assets/js/wow.min.js",
  "/assets/js/magnific-popup.min.js",
  "/assets/js/appear.min.js",
  "/assets/js/odometer.min.js",
  "/assets/js/ticker.min.js",
  "/assets/js/main.js",
];

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const existing = document.querySelector(`script[data-gx-src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.dataset.gxSrc = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

declare global {
  interface Window {
    __GX_SCRIPTS?: boolean;
  }
}

export function TemplateScripts() {
  useEffect(() => {
    if (window.__GX_SCRIPTS) return;
    window.__GX_SCRIPTS = true;

    let cancelled = false;

    (async () => {
      for (const src of SCRIPTS) {
        if (cancelled) return;
        await loadScript(src);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

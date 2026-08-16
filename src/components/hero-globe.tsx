"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

const MARKERS = [
  { location: [9.0765, 7.3986] as [number, number], size: 0.07 },
  { location: [6.5244, 3.3792] as [number, number], size: 0.045 },
  { location: [51.5074, -0.1278] as [number, number], size: 0.035 },
  { location: [40.7128, -74.006] as [number, number], size: 0.04 },
  { location: [5.6037, -0.187] as [number, number], size: 0.04 },
];

const ARCS = [
  { from: [9.0765, 7.3986] as [number, number], to: [51.5074, -0.1278] as [number, number] },
  { from: [9.0765, 7.3986] as [number, number], to: [40.7128, -74.006] as [number, number] },
  { from: [6.5244, 3.3792] as [number, number], to: [5.6037, -0.187] as [number, number] },
];

export function HeroGlobe({ className = "gx-hero-globe" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let phi = 0.4;
    let width = canvas.offsetWidth || 480;
    let frame = 0;
    let running = false;

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi,
      theta: 0.22,
      dark: 1,
      diffuse: 1.1,
      mapSamples: 9000,
      mapBrightness: 6.5,
      baseColor: [0.0, 0.055, 0.169],
      markerColor: [0.075, 0.863, 0.4],
      glowColor: [0.004, 0.188, 0.376],
      arcColor: [0.075, 0.863, 0.4],
      arcWidth: 0.4,
      arcHeight: 0.26,
      markers: MARKERS,
      arcs: ARCS,
    });

    const onResize = () => {
      width = canvas.offsetWidth;
      if (width > 0) globe.update({ width: width * dpr, height: width * dpr });
    };
    window.addEventListener("resize", onResize);

    const tick = () => {
      if (!running) return;
      if (!reduceMotion) phi += 0.0018;
      globe.update({ phi });
      canvas.style.opacity = "1";
      frame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      frame = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
    };

    if (reduceMotion) {
      globe.update({ phi });
      canvas.style.opacity = "1";
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.12, rootMargin: "80px" }
    );
    observer.observe(canvas);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      globe.destroy();
    };
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}

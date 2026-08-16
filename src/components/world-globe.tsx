"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { HeroGlobe } from "@/src/components/hero-globe";

const CURRENCIES = [
  { code: "USD", amount: "$1,250", note: "Card spend" },
  { code: "NGN", amount: "₦840,000", note: "Local deposit" },
  { code: "EUR", amount: "€620", note: "Transfer" },
  { code: "GBP", amount: "£480", note: "Swap" },
  { code: "GHS", amount: "₵3,150", note: "Bill pay" },
] as const;

const SLOTS = [
  { top: "8%", left: "54%" },
  { top: "22%", left: "10%" },
  { top: "42%", left: "84%" },
  { top: "62%", left: "8%" },
  { top: "78%", left: "76%" },
  { top: "30%", left: "72%" },
];

type Chip = {
  id: number;
  slot: number;
  currency: (typeof CURRENCIES)[number];
};

export function WorldGlobe() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);
  const [chips, setChips] = useState<Chip[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setChips(
        CURRENCIES.slice(0, 3).map((currency, slot) => ({
          id: slot,
          slot,
          currency,
        }))
      );
      return;
    }

    const timeouts: number[] = [];
    let timer = 0;
    let active = false;

    const spawn = () => {
      setChips((current) => {
        const taken = new Set(current.map((chip) => chip.slot));
        const freeSlots = SLOTS.map((_, index) => index).filter((index) => !taken.has(index));
        if (freeSlots.length === 0) return current;
        const slot = freeSlots[Math.floor(Math.random() * freeSlots.length)];
        const currency = CURRENCIES[Math.floor(Math.random() * CURRENCIES.length)];
        idRef.current += 1;
        const id = idRef.current;
        timeouts.push(
          window.setTimeout(() => {
            setChips((list) => list.filter((chip) => chip.id !== id));
          }, 2800)
        );
        return [...current, { id, slot, currency }].slice(-3);
      });
    };

    const start = () => {
      if (active) return;
      active = true;
      spawn();
      timer = window.setInterval(spawn, 1800);
    };

    const stop = () => {
      active = false;
      if (timer) window.clearInterval(timer);
      timer = 0;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.15 }
    );
    observer.observe(wrap);

    return () => {
      stop();
      observer.disconnect();
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <div className="gx-world" ref={wrapRef} aria-hidden="true">
      <div className="gx-world-globe">
        <HeroGlobe className="gx-section-globe" />
      </div>
      {chips.map((chip) => (
        <span
          key={chip.id}
          className="gx-pay-chip"
          style={SLOTS[chip.slot] as CSSProperties}
        >
          <strong>{chip.currency.code}</strong>
          <span>{chip.currency.amount}</span>
          <em>{chip.currency.note}</em>
        </span>
      ))}
    </div>
  );
}

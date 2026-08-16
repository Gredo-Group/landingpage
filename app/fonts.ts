import localFont from "next/font/local";

/** Brand / display — Anton. Hero lines only. */
export const anton = localFont({
  src: "./fonts/Anton-Regular.ttf",
  variable: "--font-anton",
  display: "swap",
  weight: "400",
});

/** UI — Montserrat (Gotham stand-in from crypto-fintech-mobile). */
export const montserrat = localFont({
  src: [
    { path: "./fonts/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Montserrat-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

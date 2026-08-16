import type { Metadata } from "next";
import { TemplateScripts } from "@/src/components/template-scripts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gredoex.com"),
  title: "GredoEx | Powering Your Financial Freedom",
  description:
    "The ultimate financial engine for instant fiat deposits, automated bill payments, and bank-grade crypto trading. Build your wealth without borders.",
  icons: {
    icon: "/assets/images/site_logo/gredoex_favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/gredoex-theme.css" />
        <link rel="stylesheet" href="/assets/css/gredoex-motion.css" />
      </head>
      <body className="online_banking">
        {children}
        <TemplateScripts />
      </body>
    </html>
  );
}

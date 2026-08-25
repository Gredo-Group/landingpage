import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/src/components/privacy-policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy | GredoEx",
  description:
    "Learn how GredoEx collects, uses, stores, and shares personal information when you use our crypto, fiat, and payments services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyRoute() {
  return <PrivacyPolicyPage />;
}

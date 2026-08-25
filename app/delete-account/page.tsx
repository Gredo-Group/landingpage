import type { Metadata } from "next";
import { DeleteAccountPage } from "@/src/components/delete-account-page";

export const metadata: Metadata = {
  title: "Delete Account | GredoEx",
  description:
    "Request deletion of your GredoEx account and associated personal data. Provided for Google Play Data safety account deletion requirements.",
  alternates: {
    canonical: "/delete-account",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DeleteAccountRoute() {
  return <DeleteAccountPage />;
}

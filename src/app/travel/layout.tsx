import type { Metadata } from "next";
import TravelHeader from "@/components/travel/TravelHeader";
import TravelFooter from "@/components/travel/TravelFooter";

export const metadata: Metadata = {
  title: "BABSJIDDS Travelling",
  description: "Visa and travel assistance from BABSJIDDS Services Nigeria Limited.",
};

export default function TravelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <TravelHeader />
      <main className="flex-1">{children}</main>
      <TravelFooter />
    </div>
  );
}

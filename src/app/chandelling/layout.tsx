import type { Metadata } from "next";
import ChandellingHeader from "@/components/chandelling/ChandellingHeader";
import ChandellingFooter from "@/components/chandelling/ChandellingFooter";

export const metadata: Metadata = {
  title: "BABSJIDDS Chandelling",
  description:
    "Ship chandelling supplies for vessels calling at Nigerian ports — BABSJIDDS Services Nigeria Limited.",
};

export default function ChandellingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ChandellingHeader />
      <main className="flex-1">{children}</main>
      <ChandellingFooter />
    </div>
  );
}

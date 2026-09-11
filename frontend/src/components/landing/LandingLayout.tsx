import type { ReactNode } from "react";
import LandingFooter from "./LandingFooter";
import LandingNavbar from "./LandingNavbar";

type LandingLayoutProps = {
  children: ReactNode;
};

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="landing-layout flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">{children}</main>
      <LandingFooter />
    </div>
  );
}

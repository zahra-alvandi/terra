import type { ReactNode } from "react";
import Navbar from "./Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      <main>{children}</main>

      {/* Footer */}
    </>
  );
}
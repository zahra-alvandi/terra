import type { ReactNode } from "react";
import Navbar from "@/components/layout/navbar/Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
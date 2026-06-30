// import type { ReactNode } from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}

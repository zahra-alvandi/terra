import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

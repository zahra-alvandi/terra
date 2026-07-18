import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Outlet />
      </main>
        <Footer />
        
    </>
  );
}

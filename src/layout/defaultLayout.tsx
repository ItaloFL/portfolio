import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ScrollToTop } from "@/lib/scrollToTop";

export function DefaultLayout() {
  return (
    <div className="">
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

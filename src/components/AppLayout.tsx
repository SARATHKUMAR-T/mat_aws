import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="relative h-full w-full">
      <NavBar />
      <main className="mt-0 md:mt-20   max-w-full w-full">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default AppLayout;

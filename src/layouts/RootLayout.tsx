import { Footer } from "@/components/shared/Footer";
import { NavBar } from "@/components/shared/NavBar";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main className="w-screen h-screen">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

import React, { ReactNode } from "react";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import Meta from "./meta";

const Layout = ({
  meta,
  children,
  scrollPosition,
}: {
  meta?: { title?: string; description?: string };
  children: ReactNode;
  scrollPosition?: number;
}) => {
  return (
    <>
      <Meta {...meta} />
      <Navbar scrollPosition={scrollPosition} />
      <main className="flex flex-col text-center items-center justify-center h-full md:w-screen w-full main-background-color">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

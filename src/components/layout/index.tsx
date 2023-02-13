import React, { ReactNode } from "react";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import Meta from "./meta";

const Layout = ({
  meta,
  children,
}: {
  meta?: { title?: string; description?: string };
  children: ReactNode;
}) => {
  return (
    <>
      <Meta {...meta} />
      <Navbar />
      <main className="flex flex-col text-center items-center justify-center h-full w-screen">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

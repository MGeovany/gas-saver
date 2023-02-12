import React, { ReactNode } from "react";
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
      <main className="flex text-center items-center justify-center h-screen w-screen">
        {children}
      </main>
    </>
  );
};

export default Layout;

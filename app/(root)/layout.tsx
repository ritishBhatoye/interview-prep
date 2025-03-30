import React, { ReactNode } from "react";
// import { redirect } from "next/navigation";
import Header from "@/components/global/Header";

import Footer from "@/components/global/Footer";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  // const isUserAuthenticated: boolean = await isAuthenticated();

  // if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <>
      <div className="root-layout">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;

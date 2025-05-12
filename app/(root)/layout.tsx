import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import { isAuthenticated } from "@/lib/actions/auth.action";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <>
      <div className="">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;

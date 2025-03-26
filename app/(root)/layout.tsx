import { isAuthenticated } from "@/lib/actions/auth.action";
// import Image from "next/image";
// import Link from "next/link";
import React, { ReactNode } from "react";
import { redirect } from "next/navigation";
import Header from "@/components/global/Header";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated: boolean = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <Header />
      {children}
    </div>
  );
};

export default RootLayout;

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerData } from "@/helpers";
import FooterSection from "./footerElements/FooterSection";

import Feedback from "./footerElements/Feedback";

const Footer = () => {
  return (
    <footer className="w-10/12 2xl:w-6/12 mx-auto justify-between gap-20 flex flex-row">
      <Feedback />
      <div className="grid grid-cols-1 w-full justify-end md:grid-cols-3 gap-12">
        {footerData.slice(0, 2).map((footer) => (
          <FooterSection key={footer.id} footer={footer} />
        ))}

        <Link href="/" className="flex-1 items-center gap-2">
          <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

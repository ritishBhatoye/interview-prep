import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerData } from "@/helpers";
import FooterSection from "./footerElements/FooterSection";

import Feedback from "./footerElements/Feedback";
import Subscription from "./footerElements/Subscription";
import SocialIcons from "./footerElements/SocialIcons";
import { FooterDataType } from "@/types";

const Footer = () => {
  return (
    <div className="h-full py-20 w-full" style={{ background: "#22242A" }}>
      <footer className="w-10/12 2xl:w-9/12 mx-auto   items-start justify-between gap-20 flex flex-row">
        <Feedback />
        <div className="flex flex-col gap-5 justify-between">
          <div className="grid grid-cols-1 w-full justify-end md:grid-cols-3 gap-12">
            {footerData.slice(0, 2).map((footer: FooterDataType) => (
              <FooterSection key={footer.id} footer={footer} />
            ))}

            <Link href="/" className="flex items-baseline justify-end gap-2">
              <Image src={"/logo.svg"} width={40} height={40} alt="logo" />
            </Link>

            {footerData.slice(2, 3).map((footer: FooterDataType) => (
              <FooterSection key={footer.id} footer={footer} />
            ))}
          </div>
          <Subscription />

          <SocialIcons />
        </div>
      </footer>
    </div>
  );
};

export default Footer;

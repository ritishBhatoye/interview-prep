import React from "react";
import { footerData } from "@/helpers";
import FooterSection from "./footerElements/FooterSection";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {footerData.map((footer) => (
          <FooterSection key={footer.id} footer={footer} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

interface FooterProps {
  footer: FooterDataType;
}

const FooterSection = ({ footer }: FooterProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">{footer.label}</h1>
      <ul className="list-none flex flex-col gap-2">
        {footer.subLabel.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;

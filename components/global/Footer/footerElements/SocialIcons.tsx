import { socialIcons } from "@/constants";
import Image from "next/image";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex-row flex gap-3">
      {socialIcons.map((icon) => (
        <div key={icon.id}>
          <Image
            src={`/covers${icon.icon}`}
            alt={icon.icon}
            width={60}
            height={60}
            className="rounded-full cursor-pointer hover:bg-white/50 p-4 bg-black/20"
          />
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;

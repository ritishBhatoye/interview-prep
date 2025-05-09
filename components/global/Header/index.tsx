"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { headerData } from "@/helpers";

export default function Header() {
  const [isSelectTab, setIsSelectTab] = useState(1);
  return (
    <div className="mx-auto py-10 w-10/12 2xl:w-9/12 max-w-screen-2xl">
      <nav className="flex flex-row items-center list-none gap-12 bg-white/8 hover:bg-white/10 rounded-4xl p-4">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image src={"/logo.svg"} width={38} height={32} alt="logo" />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>
        <ul className="flex flex-row list-none gap-5 justify-between">
          {headerData.map((header) => (
            <Link onClick={() => setIsSelectTab(header.id)} href={header.link} key={header.id}>
              <li
                className={`text-sm md:text-base ${
                  isSelectTab == header.id ? "rounded-4xl bg-black/30 p-4 text-white" : ""
                } cursor-pointer lg:text-lg text-gray-500 hover:text-white transition-all duration-200 hover:rounded-4xl hover:p-4 hover:bg-black/30 p-4`}
              >
                {header.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}

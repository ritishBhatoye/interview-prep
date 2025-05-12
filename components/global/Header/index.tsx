"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { headerData } from "@/helpers";
import { HeaderDataTypeProps, User } from "@/types";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  user: User | null;
}

export default function Header({ user }: HeaderProps) {
  const [isSelectTab, setIsSelectTab] = useState(1);
  const [isLogButton, setIsLogButton]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] =
    useState(false);
  return (
    <div className="mx-auto py-10 w-10/12 2xl:w-9/12 max-w-screen-2xl">
      <nav className="flex flex-row items-center list-none gap-12 bg-white/8 hover:bg-white/10 rounded-4xl p-4">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image src={"/logo.svg"} width={38} height={32} alt="logo" />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>
        <ul className="flex flex-row list-none gap-5 justify-between">
          {headerData.map((header: HeaderDataTypeProps) => (
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
        {user && (
          <div
            onMouseEnter={() => setIsLogButton(true)}
            onMouseLeave={() => setIsLogButton(false)}
            className="ml-auto flex flex-col items-center gap-2 overflow-y-hidden"
          >
            <div className=" flex items-center gap-3 hover:gap-4 cursor-pointer shadow-md hover:bg-opacity-40 rounded-4xl bg-black p-4 transition transform hover:scale-110 duration-500 ">
              <UserIcon className="w-6 h-5" scale={0.2} />

              <p className="text-primary-100 font-medium underline">{user.name}</p>
            </div>
            {isLogButton && (
              <Button className="relative cursor-pointer p-4 px-6 rounded-4xl bg-cosmic-purple-200">
                Logout
              </Button>
            )}
          </div>
        )}
      </nav>
    </div>
  );
}

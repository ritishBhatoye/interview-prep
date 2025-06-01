"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import { headerData } from "@/helpers";
import { HeaderDataTypeProps, User } from "@/types";
import { signOut } from "@/lib/actions/auth.action";

interface HeaderProps {
  user: User | null;
}

export default function Header({ user }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLogButton, setIsLogButton] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully");
      router.push("/sign-in");
    } catch (error) {
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <div className="mx-auto py-10 w-10/12 2xl:w-9/12 max-w-screen-2xl">
      <nav className="flex flex-row items-center list-none gap-12 bg-white/8 hover:bg-white/10 rounded-4xl p-4">
        <Link href="/" className="flex flex-row items-center justify-center  gap-2">
          <Image src="/logo.png" width={48} height={50} alt="logo" />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>
        <ul className="flex flex-row list-none gap-5 justify-between">
          {headerData.map((header: HeaderDataTypeProps) => (
            <Link href={header.link} key={header.id}>
              <li
                className={`text-sm md:text-base ${
                  isActive(header.link) ? "rounded-4xl bg-black/30 p-4 text-white" : ""
                } cursor-pointer lg:text-lg text-gray-500 hover:text-white transition-all duration-200 hover:rounded-4xl hover:p-4 hover:bg-black/30 p-4`}
              >
                {header.label}
              </li>
            </Link>
          ))}
        </ul>

        {/* Auth Section */}
        <div className="ml-auto">
          {user ? (
            // Logged in user section
            <div
              onMouseEnter={() => setIsLogButton(true)}
              onMouseLeave={() => setIsLogButton(false)}
              className="relative"
            >
              <div className="flex items-center gap-3 hover:gap-4 cursor-pointer shadow-md hover:bg-opacity-40 rounded-4xl bg-black p-4 transition-all duration-300 hover:scale-105">
                <UserIcon className="w-6 h-5" />
                <p className="text-primary-100 font-medium underline">{user.name}</p>
              </div>

              {/* Logout Button */}
              <div
                className={`absolute right-0 mt-2 transition-all duration-300 transform ${
                  isLogButton
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <Button
                  onClick={handleLogout}
                  className="w-full cursor-pointer p-6 py-5 px-7 mt-2 rounded-4xl bg-cosmic-purple-200 hover:bg-cosmic-purple-300 transition-colors duration-200"
                >
                  Logout
                </Button>
              </div>
            </div>
          ) : (
            // Not logged in - Show Sign In button
            <Link href="/sign-in">
              <Button className="cursor-pointer p-6 py-5 px-7 rounded-4xl bg-cosmic-purple-200 hover:bg-cosmic-purple-300 transition-colors duration-200">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

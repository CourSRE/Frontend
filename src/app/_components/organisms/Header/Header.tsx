"use client";

import { headerNav, sreAboutPage } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type TProps = {
  
};

export const Header: React.FC<TProps> = () => {
  const pathname = usePathname()

  return (
    <header className="flex flex-col top-0">
      <nav>
        <ul className="flex bg-primary-base text-white px-8 text-sm font-medium">
          {headerNav?.map((item) => (
            <li
              key={item.name}
              className={`p-4 border-t-[1px] ${
                pathname === item.link
                  ? "border-active-orange"
                  : "border-primary-base"
              }`}
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className="flex justify-between items-center bg-white text-gray-900 px-8 py-6 shadow-md shadow-gray-100">
        <div className="flex gap-8 items-center">
          <Link href="/">
            <Image
              src="/images/SRE-NavLogo.png"
              alt=""
              width={153}
              height={25}
            />
          </Link>
          <div className="flex gap-4">
            <select className="px-[18px] py-[12px] bg-white border-[1px] border-gray-100">
              <option>Browse</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advance</option>
            </select>
            <div className="flex gap-3 px-[18px] py-[12px] bg-white border-[1px] border-gray-100">
              <Image
                src="/icons/magnifying-glass.svg"
                alt=""
                width={24}
                height={24}
              />
              <input
                placeholder="What do you want to learn..."
                className="focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <Image
            src="/icons/bell.svg"
            alt=""
            width={24}
            height={24}
            className="cursor-pointer"
          />
          {/* <div className="flex gap-4">
              <button className="flex items-center px-6 py-3 bg-primary-100 text-primary-base">Create Account</button>
              <button className="flex items-center px-6 py-3 bg-primary-base text-white">Sign In</button>
            </div> */}
          <Link href="/dashboard">
            <Image
              src="/images/default-avatar-image.jpg"
              alt=""
              width={48}
              height={48}
              className={`cursor-pointer rounded-full border-2 ${ pathname == '/dashboard' && 'shadow-sm shadow-sky-500'}`}
            />
          </Link>
        </div>
      </section>
    </header>
  );
};

import { sreAboutPage } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TProps = {};

export const Header: React.FC<TProps> = () => {
  return (
    <header className="flex flex-col top-0">
      <nav className="flex bg-primary-base text-white px-8 text-sm font-medium">
        <ul className="p-4 border-t-[1px] border-active-orange">
          <Link href="/">Home</Link>
        </ul>
        <ul className="p-4">
          <Link href="/courses">Courses</Link>
        </ul>
        <ul className="p-4">
          <Link href={sreAboutPage} target="_blank">
            About
          </Link>
        </ul>
        <ul className="p-4">
          <Link href={sreAboutPage} target="_blank">
            Contact
          </Link>
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
          <Link href='/dashboard'>
            <Image
              src="/images/default-avatar-image.jpg"
              alt=""
              width={48}
              height={48}
              className="cursor-pointer rounded-full border-2 border-sky-500"
            />
          </Link>
        </div>
      </section>
    </header>
  );
};

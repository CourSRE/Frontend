"use client";

import React from "react";
import { Heading, TextInput } from "../../atoms";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type TProps = {};

export const AdminHeader: React.FC<TProps> = () => {
  const pathname = usePathname();

  return (
    <header className="px-[120px] py-6 flex justify-between">
      <div className="flex flex-col gap-[6px]">
        <p className="text-sm text-gray-600 font-medium">Good Morning</p>
        <Heading level={1} title="Dashboard" className="text-xl" />
      </div>
      <div className="flex gap-4 items-center">
        <TextInput searchIcon placeholder="Search" />
        <Image
          src="/icons/bell.svg"
          alt=""
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Link href="/dashboard">
          <Image
            src="/images/default-avatar-image.jpg"
            alt=""
            width={48}
            height={48}
            className={`cursor-pointer rounded-full border-2 ${
              pathname == "/dashboard" && "shadow-sm shadow-sky-500"
            }`}
          />
        </Link>
      </div>
    </header>
  );
};

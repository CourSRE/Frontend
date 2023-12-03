import { adminSidebarLink } from "@/constants/NavLink/adminSidebarLink";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TProps = {};

export const AdminSidebar: React.FC<TProps> = () => {
  return (
    <aside className="bg-primary-base text-white text-sm font-medium sticky left-0 top-0 bottom-0 flex-1">
      <Image
        src="/images/SRE-NavLogo-White.png"
        alt=""
        width={220}
        height={36}
        className="mx-6 my-[19px]"
      />
      <div className="border-[1px] border-gray-900" />
      <nav className="mx-6 my-[19px]">
        <ul className="flex flex-col gap-6">
          {adminSidebarLink?.map((nav) => (
            <li key={nav.title} className="flex gap-3 items-center ">
              <Image
                src={nav.icon}
                alt=""
                width={24}
                height={24}
              />
              <Link href={nav.link}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

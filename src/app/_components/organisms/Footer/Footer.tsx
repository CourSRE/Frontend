"use client";

import { footerAllNav, footerIcons } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MainContainer } from "../../Layouts";

type TProps = {};

export const Footer: React.FC<TProps> = () => {
  return (
    <footer>
      <MainContainer
        className="py-[26px] bg-primary-base text-white px-4"
        childrenClassName="flex justify-between items-start gap-8"
      >
        <section className="flex-1 flex flex-col gap-[26px]">
          <div className="flex flex-col gap-5">
            <Image src="/images/SRE-White.png" alt="" width={98} height={42} />
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              veniam.
            </p>
          </div>
          <section className="flex gap-3">
            {footerIcons?.map((icon) => (
              <div
                key={`footerIcon-${icon.id}`}
                className="p-[14px] bg-[#363B4766] text-white w-fit"
              >
                <Link href={icon?.link}>
                  <Image
                    src={icon?.imageSrc}
                    alt={icon?.title}
                    width={18}
                    height={18}
                  />
                </Link>
              </div>
            ))}
          </section>
        </section>
        <section className="flex-1 flex flex-col gap-5">
          <h4 className="text-sm font-medium">Top 4 Courses</h4>
          <ul className="text-sm">
            <li className="py-[6px]">Development</li>
            <li className="py-[6px]">Finance & Accounting</li>
            <li className="py-[6px]">Desgin</li>
            <li className="py-[6px]">Business</li>
          </ul>
        </section>
        {footerAllNav?.map((section) => (
          <section key={section.name} className="flex-1 flex flex-col gap-5">
            <h4 className="text-sm font-medium">{section.name}</h4>
            <ul className="text-sm">
              {section?.items?.map((nav) => (
                <li
                  key={`footerNavLink-${nav?.name}`}
                  className="py-[6px] flex gap-3"
                >
                  <Link href={nav?.link}>{nav?.name}</Link>
                  {nav?.nextIcon && (
                    <Image
                      src="/icons/arrow-right.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </MainContainer>
      <MainContainer className="bg-gray-100 text-primary-base py-6 px-4" childrenClassName="flex justify-between items-center">
          <small className="text-sm font-normal">
            &copy; 2023 - SRE. All rights reserved.
          </small>
          <select className="px-[18px] py-[12px] bg-white border-[1px] border-gray-100">
            <option>Bahasa</option>
          </select>
      </MainContainer>
    </footer>
  );
};

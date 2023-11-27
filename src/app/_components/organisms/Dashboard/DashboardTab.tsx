"use client";

import { Tab } from "@headlessui/react";
import React from "react";
import { dashboardNavLink } from "@/constants";
import { MainContainer } from "../../Layouts";
import { DashboardLeaderboard, DashboardProgress, DashboardSettings } from "./Panels";

type TProps = {};

export const DashboardTab: React.FC<TProps> = ({}) => {
  return (
    <Tab.Group>
      <section className=" px-4">
        <nav className="flex items-center justify-center gap-6 container mx-auto px-10 bg-white border-[1px] border-primary-100">
          <Tab.List as="ul" className="flex justify-around w-full">
            {dashboardNavLink?.map((item) => (
              <Tab
                as="li"
                key={`dashboardNavLink-${item.name}`}
                className="font-medium text-base text-gray-700  h-full cursor-pointer focus:outline-none"
              >
                {({ selected }) => (
                  <button
                    type="button"
                    className={`py-5 px-8 border-b-[1px] ${
                      selected ? "border-primary-base" : "border-none"
                    }`}
                  >
                    {item.name}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
        </nav>
      </section>
      <Tab.Panels as="section">
        <MainContainer className="py-[21px]" childrenClassName="flex flex-col gap-4">
          <DashboardProgress />
          <DashboardLeaderboard />
          <DashboardSettings />
        </MainContainer>
      </Tab.Panels>
    </Tab.Group>
  );
};

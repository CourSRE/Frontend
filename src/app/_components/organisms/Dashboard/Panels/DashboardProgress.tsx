"use client";

import { ProgressBar } from "@/app/_components/atoms";
import { dummyCoursesList } from "@/constants";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import React from "react";

type TProps = {};

export const DashboardProgress: React.FC<TProps> = () => {
  return (
    <Tab.Panel as="section" className="flex flex-col gap-[15px]">
      <h2 className="text-2xl font-semibold text-gray-900">In Progress (3)</h2>
      <ul className="flex flex-col gap-12">
        {dummyCoursesList?.map((course) => (
          <li key={`courseList-${course.id}`} className="flex">
            <section className="flex flex-[10] gap-5">
              <Image src={course?.imageSrc} alt="" width={160} height={120} />
              <article className="flex flex-col justify-between items-start w-full">
                <div className="flex flex-col gap-[2px] w-full">
                  <div className="flex gap-1 text-xs text-[#6E7485]">
                    <Image
                      src="/icons/bookmark.svg"
                      alt=""
                      width={5.5}
                      height={11}
                    />
                    <p>{course?.lessonsLength} lessons</p>
                  </div>
                  <h4 className="text-base font-medium">{course?.title}</h4>
                </div>
                <div className="flex flex-col gap-[0.5px] w-full">
                  <h5>Progress</h5>
                  <div className="flex flex-col gap-[2px] w-full">
                    <ProgressBar percentage={course?.percentage} />
                    <small>Course by: <span>{course?.creator}</span></small>
                  </div>
                </div>
              </article>
            </section>
            <section className="flex-[2] flex flex-col gap-2 justify-center items-center">
              <button type="button" className="px-6 py-3 bg-primary-base text-white">Resume</button>
              <p className="text-sm font-medium">{course?.percentage} Completed</p>
            </section>
          </li>
        ))}
      </ul>
    </Tab.Panel>
  );
};

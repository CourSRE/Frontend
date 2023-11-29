"use client";

import React, { useEffect } from "react";
import {
  courseDetailNavLink,
  dummyCoursesLearn,
  dummyModules,
} from "@/constants";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Heading } from "../../atoms";
import Image from "next/image";

type TProps = {};

export const CourseDetailTab: React.FC<TProps> = ({}) => {
  const query = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    router.replace("?section=courseAbout");
  }, [router]);

  return (
    <div>
      <section className="px-4">
        <nav className="flex items-center justify-center gap-6 container mx-auto px-10 bg-white border-b-[1px] border-primary-100">
          <ul className="flex justify-around w-full">
            {courseDetailNavLink?.map((item) => (
              <li
                key={`dashboardNavLink-${item.name}`}
                className="font-medium text-base text-gray-700  h-full cursor-pointer focus:outline-none"
              >
                <Link href={`#${item.link}`}>
                  <button
                    type="button"
                    className={`py-5 px-8 border-b-[1px] border-primary-base`}
                  >
                    {item.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="flex flex-col gap-5 py-6" id="courseAbout">
        <Heading level={2} title="Description" />
        <p className="text-sm text-gray-700">
          It gives you a huge self-satisfaction when you look at your work and
          say, I made this!. I love that feeling after im done working on
          something. When I lean back in my chair, look at the final result with
          a smile, and have this little spark joy moment. Its especially
          satisfying when I know I just made $5,000.
        </p>
      </section>

      <section
        className="p-10 bg-primary-100 flex flex-col gap-5"
        id="courseLearn"
      >
        <Heading level={3} title="What You will learn in this course" />
        <ul className="grid grid-cols-2 gap-5">
          {dummyCoursesLearn?.map((list, idx) => (
            <li
              key={`willLearn-${idx}`}
              className="text-sm text-gray-600 flex gap-2 items-start"
            >
              <Image
                src="/icons/CheckCircle.svg"
                alt=""
                width={24}
                height={24}
              />
              <span className={idx % 2 === 0 ? "w-3/5" : "w-full"}>{list}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-8 flex flex-col gap-[11px]" id="courseModule">
        <div className="flex justify-between">
          <Heading level={3} title="Modules" />
          <div className="flex gap-6 text-sm text-gray-600">
            <div className="flex gap-2 items-center">
              <Image
                src="/icons/FolderNotchOpen.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>6 Sections</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/icons/PlayCircle.svg"
                alt=""
                width={20}
                height={20}
              />
              <span>202 Lectures</span>
            </div>
            <div className="flex gap-2 items-center">
              <Image src="/icons/Clock.svg" alt="" width={20} height={20} />
              <span>19h 37m</span>
            </div>
          </div>
        </div>
        <section className="">
          {dummyModules?.map((list) => (
            <details
              key={`willLearn-${list.section_id}`}
              className="text-sm text-gray-600 flex gap-2 items-start p-3 border-[1px] border-gray-200"
            >
              <summary className="cursor-pointer pl-3 justify-between items-center">
                <div className="inline-flex w-[98%] items-center justify-between">
                  <Heading
                    level={4}
                    className="font-medium text-lg text-primary-base inline pl-2"
                    title={list.title}
                  />
                  <div className="flex gap-6 text-sm text-gray-600">
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/icons/PlayCircle.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <span>202 Lectures</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src="/icons/Clock.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <span>19h 37m</span>
                    </div>
                  </div>
                </div>
              </summary>
              <ul className="flex pt-3 flex-col gap-[11px]">
                {list?.courses?.map((module) => (
                  <li
                    key={`willLearn-${list.section_id}`}
                    className="text-sm text-gray-600 flex gap-2 items-start pl-8"
                  >
                    <Image
                      src={`/icons/${
                        module.type === "VIDEO"
                          ? "Play.svg"
                          : module.type === "READING"
                          ? "File.svg"
                          : "NotePencil.svg"
                      }`}
                      alt=""
                      width={24}
                      height={24}
                    />
                    <span className="text-sm">{module.title}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </section>
      </section>

      <section id="courseInstructor" className="flex flex-col gap-4">
        <Heading level={3} title="Course Instructor" />
        <div className="p-8 flex gap-6 items-center border-[1px] border-gray-200">
          <Image
            src="/images/default-avatar-image.jpg"
            alt=""
            width={136}
            height={136}
            className="cursor-pointer rounded-full border-2"
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[6px]">
              <Heading
                level={4}
                title="Nima Tahami"
                className="text-xl font-semibold"
              />
              <p className="text-sm text-gray-600">
                Enterpreneur & Designer . FOunder of ShiftRide
              </p>
            </div>
            <div className="flex gap-6">
              <div className="flex items-center gap-[6px]">
                <Image src="/icons/Star.svg" alt="" width={20} height={20} />
                <span>4.6 Course rating</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <Image src="/icons/Users.svg" alt="" width={20} height={20} />
                <span>5,342 Students</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <Image
                  src="/icons/PlayCircleFill.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <span>1 Courses</span>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              repellendus nostrum sapiente delectus fugit ut voluptate
              molestias, similique dolor vero, tempore quasi sit assumenda et ad
              totam porro culpa explicabo?
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

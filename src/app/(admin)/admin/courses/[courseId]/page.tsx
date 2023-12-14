"use client";

import { editCourseApi } from "@/api";
import { IAddCourseFieldType } from "@/types/coursesType/AddCourseFieldType";
import React from "react";
import AddCourseForm from "../../create-course/_modules/AddCourseForm";
import { Tab } from "@headlessui/react";
import { Divider, message } from "antd";
import AddSectionForm from "./_modules/AddSectionForm";
import { SectionsTable } from "@/app/_componentsAdmin/organisms";

type Props = {
  params: {
    courseId: string;
  };
};

export default function CourseAdminDetailPage({ params }: Props) {
  const data = {
    courseId: "courseId-1",
    estimateFinishTime: "2 Jam 6 Menit",
    expertise: "Beginner",
    imageLink: "/images/default-courses-image.jpg",
    instructorId: "InstructorId-1",
    instructorName: "SRE Indonesia",
    title: "Bioenergi 101",
    totalLessons: 6,
    courseDesc: "Desc Singkat",
    courseLongDesc: "Long Desc",
    whatWillLearn: "What will Learn, Is",
  };

  const onFinish = (values: IAddCourseFieldType) => {
      message.loading("Processing");
      editCourseApi(values, params?.courseId).then(() => {
      message.success("Success Edit Course");
    }).catch((err) => {
      message.error(`Error: ${err}`);
    });
  };

  return (
    <main>
      <Tab.Group>
        <Tab.List className="w-full text-xl flex gap-4 font-semibold mb-4">
          <Tab className="border-b-[1px] border-gray-900                                                                                                                                                                                                                                                                                                                                             ">
            Section and Modules
          </Tab>
          <Divider type="vertical" className="bg-gray-900" />
          <Tab className="border-b-[1px] border-gray-900                                                                                                                                                                                                                                                                                                                                             ">
            Course Detail
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <AddSectionForm />
            <SectionsTable courseId={params?.courseId} />
          </Tab.Panel>
          <Tab.Panel>
            <AddCourseForm onFinish={onFinish} initialValue={data} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </main>
  );
}

"use client";

import { useCourses } from "@/hooks";
import {
  Col,
  Row,
} from "antd";
import React from "react";
import { AdminCourseCard } from "@/app/_componentsAdmin/molecules";

type Props = {};

export function CardCoursesList({}: Props) {
  const { data } = useCourses();

  return (
    <Row gutter={16}>
      {data?.map((course) => (
        <Col key={course.courseId} span={6}>
          <AdminCourseCard course={course}/>
        </Col>
      ))}
    </Row>
  );
}

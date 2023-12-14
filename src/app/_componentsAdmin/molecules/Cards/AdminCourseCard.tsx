import { ICourseType } from "@/types";
import { Card, Divider, Flex, Popover, Space, Typography } from "antd";
import Image from "next/image";
import React from "react";
import { CourseAdminPopoverContent } from "..";

type Props = {
  course: ICourseType;
};

export function AdminCourseCard({ course }: Props) {
  return (
    <Popover placement="rightBottom" content={<CourseAdminPopoverContent idCourse={course.courseId} />} trigger="click">
      <Card
        hoverable
        cover={<Image alt="" src={course.imageLink} width={200} height={200} />}
      >
        <Typography.Title level={5}>{course.title}</Typography.Title>
        <Divider />
        <Flex align="center" justify="space-between">
          <Space size="small">
            <Image alt="" src="/icons/bookmark.svg" width={8} height={8} />
            <Typography.Text type="secondary">
              {course.totalLessons} Lessons
            </Typography.Text>
          </Space>
          <Typography.Text type="secondary">
            {course.estimateFinishTime}
          </Typography.Text>
        </Flex>
      </Card>
    </Popover>
  );
}

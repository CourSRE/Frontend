import {
  CourseOverviewCard,
  OverallCourseRatingCard,
} from "@/app/_componentsAdmin/molecules";
import { FunfactList, UsersRankTable } from "@/app/_componentsAdmin/organisms";
import { Col, Row, Space } from "antd";
import React from "react";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <main>
      <Space size="large" direction="vertical">
        <FunfactList />

        <Row gutter={16} align='stretch'>
          <Col span={10}>
            <OverallCourseRatingCard />
          </Col>
          <Col span={14}>
            <CourseOverviewCard />
          </Col>
        </Row>

        <UsersRankTable />
      </Space>
    </main>
  );
}

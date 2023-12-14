"use client";

import { Card, Divider, Flex, Space, Typography } from "antd";
import React from "react";
import ReactStars from "react-stars";
import { StarProgress } from "../../atoms";

type Props = {};

export function OverallCourseRatingCard({}: Props) {
  return (
    <Card>
      <Flex gap={16}>
        <Flex align="center" vertical className="bg-[#FFF2E5] flex-[2] py-6 rounded-sm">
          <Typography.Title level={2}>4.6</Typography.Title>
          <Space size='small' direction="vertical">
            <ReactStars
              count={5}
              value={4.6}
              onChange={() => {}}
              size={24}
              color2={"#FD8E1F"}
            />
            <Typography.Text>Overall Rating</Typography.Text>
          </Space>
        </Flex>
        <Space className="flex-[3]">Some Chart</Space>
      </Flex>
      <Divider />
      <Space className="w-full" direction="vertical">
        <StarProgress stars={5} percent={56} />
        <StarProgress stars={4} percent={37} />
        <StarProgress stars={3} percent={8} />
        <StarProgress stars={2} percent={1} />
        <StarProgress stars={1} percent={1} />
      </Space>
    </Card>
  );
}

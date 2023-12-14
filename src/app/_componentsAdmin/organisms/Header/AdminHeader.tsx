"use client";

import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Flex, Input, Space, Typography } from "antd";
import Image from "next/image";
import React from "react";

type Props = {};

export function AdminHeader({}: Props) {
  return (
    <header className="bg-white">
      <Flex justify="space-between" className="max-w-5xl mx-auto pt-4 pb-2">
        <Space direction="vertical">
          <Typography.Text type="secondary">Good Morning</Typography.Text>
          <Typography.Title level={1} className="text-2xl">
            Dashboard
          </Typography.Title>
        </Space>
        <Space size="large">
          <Input prefix={<SearchOutlined />} placeholder="Search Course" />
          <Image src="/icons/bell.svg" alt="" width={24} height={24} />
          <Avatar src="/images/default-avatar-image.jpg" />
        </Space>
      </Flex>
    </header>
  );
}

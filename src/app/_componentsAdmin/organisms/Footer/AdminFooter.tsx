"use client";

import { Divider, Flex, Space, Typography } from "antd";
import Link from "next/link";
import React from "react";

type Props = {};

const copyRightText = "© 2023 - CourSRE. All rights reserved";

const footerNavLinks = [
  {
    id: "footerNavItem-1",
    name: "FAQs",
    path: "#",
  },
  {
    id: "footerNavItem-2",
    name: "Privacy Policy",
    path: "#",
  },
  {
    id: "footerNavItem-3",
    name: "Term & Condition",
    path: "#",
  },
];

export function AdminFooter({}: Props) {
  return (
    <Space size='small' direction="vertical" className="w-full py-4 bg-inherit">
      <Divider />
      <Flex
        justify="space-between"
        align="center"
        className="max-w-5xl mx-auto"
      >
        <Typography.Text type="secondary">{copyRightText}</Typography.Text>
        <Space size="large">
          {footerNavLinks?.map((item) => (
            <Link href={item.path} key={item.id}>
              <Typography.Text type="secondary">{item.name}</Typography.Text>
            </Link>
          ))}
        </Space>
      </Flex>
    </Space>
  );
}

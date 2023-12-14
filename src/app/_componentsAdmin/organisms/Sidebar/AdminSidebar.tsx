"use client";

import { useAuth } from "@/hooks";
import { LogoutOutlined } from "@ant-design/icons";
import { Button, Divider, Flex, List, Space, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const sidebarNav = [
  {
    id: "sidebarNavItem-1",
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: "/icons/ChartBar.svg",
  },
  {
    id: "sidebarNavItem-2",
    title: "Users",
    path: "/admin/users",
    icon: "/icons/User.svg",
  },
  {
    id: "sidebarNavItem-3",
    title: "Create New Course",
    path: "/admin/create-course",
    icon: "/icons/PlusCircle.svg",
  },
  {
    id: "sidebarNavItem-4",
    title: "My Courses",
    path: "/admin/courses",
    icon: "/icons/Stack.svg",
  },
  {
    id: "sidebarNavItem-5",
    title: "Settings",
    path: "/admin/settings",
    icon: "/icons/Gear.svg",
  },
];

export function AdminSidebar({}: Props) {
  const authContext = useAuth();

  return (
    <Space
      size="small"
      direction="vertical"
      className="bg-primary-base w-full h-full py-4"
    >
      <Image
        src="/images/SRE-NavLogo-White.png"
        alt=""
        width={220}
        height={36}
        className="mx-auto translate-y-2"
      />
      <Divider className="bg-gray-700" />
      <Flex vertical justify="space-between" className="h-full">
        <List
          dataSource={sidebarNav}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              className="flex justify-start items-center gap-4 px-4"
            >
              <Image src={item.icon} alt="" width={24} height={24} />
              <Typography.Text className="text-gray-100">
                <Link href={item.path} className="text-inherit">{item.title}</Link>
              </Typography.Text>
            </List.Item>
          )}
          className="w-full"
        />
        <Divider className="bg-gray-700" />
        <Button
          onClick={authContext.authLogout}
          type="text"
          icon={<LogoutOutlined />}
          className="text-gray-100 w-fit"
        >
          Sign-out
        </Button>
      </Flex>
    </Space>
  );
}

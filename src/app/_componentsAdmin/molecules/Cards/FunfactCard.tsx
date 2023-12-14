import { Card, Flex, Image, Space, Typography } from "antd";
import React from "react";

type Props = {
  title: string;
  value: string;
  icon: string;
  bgIcon?: string;
};

export function FunfactCard({ icon, title, value, bgIcon }: Props) {
  return (
    <Card>
      <Flex align="center" gap={16}>
        <Flex justify="center" align="center" className={`p-3 w-fit h-fit rounded-md ${bgIcon}`}>
          <Image src={icon} alt="" width={24} height={24} />
        </Flex>
        <Space direction="vertical" size="small">
          <Typography.Title level={4}>{value}</Typography.Title>
          <Typography.Text>{title}</Typography.Text>
        </Space>
      </Flex>
    </Card>
  );
}

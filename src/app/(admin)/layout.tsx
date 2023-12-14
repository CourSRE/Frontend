import { AdminHeader, AdminSidebar } from "@/app/_componentsAdmin/organisms";
import { Col, Row } from "antd";
import React from "react";
import { AdminMainLayouts } from "@/app/_componentsAdmin/layouts";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Row>
      <Col
        span={5}
        className="h-screen overflow-auto sticky top-0 left-0 bottom-0"
      >
        <AdminSidebar />
      </Col>
      <Col span={19} className="min-h-screen overflow-auto bg-gray-100">
        <AdminHeader />
        <AdminMainLayouts>{children}</AdminMainLayouts>
      </Col>
    </Row>
  );
}

import { addSectionApi } from "@/api";
import { ISectionFieldType } from "@/types";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import React from "react";

type Props = {};

const onFinish = (values: ISectionFieldType) => {
  if (!values.sectionName) {
    message.error(`Section Name is Empty`);
    return;
  }
  message.loading(`Adding ${values.sectionName}`);
  addSectionApi(values.sectionName, "courseId").then(() => {
    message.success("Success Add Section");
  }).catch((err) => {
    message.error(`Error: ${err}`);
  });
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export default function AddSectionForm({}: Props) {
  return (
    <main>
      <Form
        name="basic"
        wrapperCol={{ span: 24 }}
        className="flex gap-4 items-end justify-end"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<ISectionFieldType> name="sectionName">
          <Input placeholder="Add Section Name" />
        </Form.Item>

        <Form.Item>
          <Button
            className="bg-none text-primary-base"
            type="text"
            htmlType="submit"
            icon={<PlusCircleOutlined />}
          />
        </Form.Item>
      </Form>
    </main>
  );
}

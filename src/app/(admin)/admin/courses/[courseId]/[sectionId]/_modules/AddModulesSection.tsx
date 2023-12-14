"use client";

import { UploadFileHandler } from "@/app/_componentsAdmin/molecules";
import { IModuleType } from "@/types";
import {
  Button,
  Flex,
  Form,
  Input,
  Modal,
  Radio,
  Space,
  Typography,
  message,
} from "antd";
import React, { useState } from "react";

type Props = {
  sectionId: string;
};

export default function AddModulesSection({ sectionId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [type, setType] = useState<"READING" | "VIDEO" | "QUIZ" | undefined>();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Flex vertical>
      <Typography.Title level={2}>Add Modules</Typography.Title>
      <Space size="large">
        <Button
          type="primary"
          className="bg-primary-base hover:opacity-70 text-gray-100"
          onClick={showModal}
        >
          Add Reading or Video or Quiz
        </Button>
      </Space>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinishFailed={(err: any) => message.error(err)}
        autoComplete="off"
      >
        <Modal
          title="Add Modules"
          open={isModalOpen}
          onOk={handleOk}
          okButtonProps={{
            className: "bg-primary-base hover:opacity-70 text-gray-100",
            htmlType: "submit",
          }}
          onCancel={handleCancel}
          confirmLoading={confirmLoading}
        >
          <Form.Item<IModuleType>
            label="Module Title"
            name="moduleTitle"
            rules={[
              { required: true, message: "Please input your Title Module!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<IModuleType>
            label="Module description"
            name="moduleDesc"
            rules={[
              {
                required: true,
                message: "Please input your Description Module!",
              },
            ]}
          >
            <Input.TextArea rows={8} />
          </Form.Item>

          <Form.Item<IModuleType>
            label="Completition Type"
            name="isOptional"
            rules={[
              {
                required: true,
                message: "Please input your Completition Type Module!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="0"> Mandatory </Radio>
              <Radio value="1"> Optional </Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Type"
            name="type"
            rules={[
              { required: true, message: "Please input your Module Type!" },
            ]}
          >
            <Radio.Group onChange={(e) => setType(e.target.value)}>
              <Radio value="READING"> Reading </Radio>
              <Radio value="VIDEO"> Video </Radio>
              <Radio value="QUIZ"> Quiz </Radio>
            </Radio.Group>
          </Form.Item>

          {type !== "QUIZ" && (
            <Form.Item
              label="File Resource"
              name="type"
              rules={[
                { required: true, message: "Please input your Title Module!" },
              ]}
            >
              <UploadFileHandler key="moduleFile" listType="picture-card" />
            </Form.Item>
          )}
        </Modal>
      </Form>
    </Flex>
  );
}

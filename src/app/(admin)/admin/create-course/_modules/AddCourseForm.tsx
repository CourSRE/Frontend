"use client";

import { expertiseOptions } from "@/constants";
import { generateFileName } from "@/helpers";
import { ICourseType } from "@/types";
import { IAddCourseFieldType } from "@/types/coursesType/AddCourseFieldType";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { RcFile } from "antd/es/upload";
import React, { useState } from "react";

type Props = {
  onFinish: (values: any) => void;
  initialValue?: ICourseType;
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export default function AddCourseForm({ onFinish, initialValue }: Props) {
  const [fileList, setFileList] = useState<UploadFile[]>(
    initialValue?.imageLink
      ? [
          {
            uid: "-1",
            name: "image.png",
            status: "done",
            url: initialValue?.imageLink,
          },
        ]
      : []
  );

  const handleImageChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);
  };

  const handleBeforeUpload = (file: RcFile) => {
    // custom rename file name
    const newName = generateFileName(file.name);
    // replace origin File
    const newFile = new File([file], newName, { type: file.type });
    return newFile;
  };

  return (
    <Form
      name="addCourseForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      className="mx-auto"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<IAddCourseFieldType>
        label="Course Image (Max 1)"
        name="picture"
        rules={[{ required: true, message: "Please input your Course image!" }]}
        initialValue={initialValue?.imageLink}
      >
        <Upload
          listType="picture-card"
          fileList={fileList || []}
          action="/api/upload"
          maxCount={1}
          beforeUpload={handleBeforeUpload}
          onChange={handleImageChange}
        >
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        </Upload>
      </Form.Item>
      <Form.Item<IAddCourseFieldType>
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input your Title Course!" }]}
        initialValue={initialValue?.title}
      >
        <Input placeholder="Course Title" defaultValue={initialValue?.title} />
      </Form.Item>
      <Form.Item<IAddCourseFieldType>
        label="Description"
        name="desc"
        rules={[
          { required: true, message: "Please input your Course Description!" },
        ]}
        initialValue={initialValue?.courseDesc}
      >
        <Input
          placeholder="Sub title / Short Description"
          defaultValue={initialValue?.courseDesc}
        />
      </Form.Item>
      <Form.Item<IAddCourseFieldType>
        label="Complete Description"
        name="longDesc"
        rules={[
          {
            required: true,
            message: "Please input your Complete Description!",
          },
        ]}
        initialValue={initialValue?.courseLongDesc}
      >
        <Input.TextArea
          rows={4}
          placeholder="Completed Courses Description"
          defaultValue={initialValue?.courseLongDesc}
        />
      </Form.Item>
      <Form.Item<IAddCourseFieldType>
        label="What Will be learned"
        name="whatWillLearn"
        rules={[
          { required: true, message: "Please input your Course Material!" },
        ]}
        initialValue={initialValue?.whatWillLearn}
      >
        <Input
          placeholder="In this course you will learn..."
          defaultValue={initialValue?.whatWillLearn}
        />
      </Form.Item>
      <Form.Item<IAddCourseFieldType>
        label="Expertise"
        name="expertise"
        rules={[{ required: true, message: "Please input Course Expertise!" }]}
        initialValue={initialValue?.expertise}
      >
        <Select
          style={{ width: 120 }}
          allowClear
          placeholder="Expertised"
          options={expertiseOptions}
          defaultValue={initialValue?.expertise}
        />
      </Form.Item>
      <Form.Item<IAddCourseFieldType>
        label="Estimate Finish"
        name="estimateFinish"
        rules={[{ required: true, message: "Please input your Title Course!" }]}
        initialValue={initialValue?.estimateFinishTime}
      >
        <InputNumber
          placeholder="Minutes"
          defaultValue={initialValue?.estimateFinishTime}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          className="bg-primary-base hover:opacity-70"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

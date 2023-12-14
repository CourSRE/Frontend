"use client";

import { generateFileName } from "@/helpers";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, UploadFile, UploadProps } from "antd";
import { RcFile } from "antd/es/upload";
import { UploadListType } from "antd/es/upload/interface";
import React, { useState } from "react";

type Props = {
  url?: string;
  key: string;
  onChange?: (newFileList: UploadFile[]) => void;
  listType?: UploadListType
};

const handleBeforeUpload = (file: RcFile) => {
  // custom rename file name
  const newName = generateFileName(file.name);
  // replace origin File
  const newFile = new File([file], newName, { type: file.type });
  return newFile;
};

export function UploadFileHandler({ url, key, onChange, listType = "picture" }: Props) {
  const [fileList, setFileList] = useState<UploadFile[]>(
    url
      ? [
          {
            uid: key,
            name: "image.png",
            status: "done",
            url: url,
          },
        ]
      : []
  );
  const handleImageChange: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    onChange ? onChange(newFileList) : null
    setFileList(newFileList);
  };

  return (
    <Upload
      listType={listType}
      action="/api/upload"
      maxCount={1}
      fileList={fileList || []}
      beforeUpload={handleBeforeUpload}
      onChange={handleImageChange}
    >
      <div className={`flex flex-col items-center justify-center gap-2 hover:text-primary-base hover:border-primary-base text-gray-900 border-dashed border-gray-900 ${ listType !== "picture-card" && "border-[1px]"} px-3 py-2 rounded-lg w-full`} >
        <PlusOutlined />
        <div>Upload</div>
      </div>
    </Upload>
  );
}

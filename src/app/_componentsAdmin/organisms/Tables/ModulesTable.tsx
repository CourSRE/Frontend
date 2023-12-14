"use client";

import {
  deleteModuleApi,
  editModuleApi,
} from "@/api";
import { useModules } from "@/hooks/useModules";
import { IModuleType } from "@/types";
import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Flex,
  Input,
  Space,
  Table,
  message,
} from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { UploadFileHandler } from "../../molecules";

type Props = {
  sectionId: string;
};

interface ITableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue | null>;
}

const saveEditedSection = async (moduleId: string, obj: IModuleType) => {
  message.loading("Processing");
  await editModuleApi(obj, moduleId)
    .then(() => {
      message.success("Save Succesfully");
    })
    .catch((err) => {
      message.error(`Error: ${err}`);
    });
};

const deleteEditedSection = async (moduleId: string) => {
  message.loading("Processing");
  await deleteModuleApi(moduleId)
    .then(() => {
      message.success("Delete Succesfully");
    })
    .catch((err) => {
      message.error(`Error: ${err}`);
    });
};

const columns: ColumnsType<IModuleType> = [
  {
    title: "Module ID's",
    dataIndex: "moduleId",
    key: "moduleId",
    sorter: (a, b) => a.moduleId.localeCompare(b.moduleId),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Module Title",
    dataIndex: "moduleTitle",
    key: "moduleTitle",
    sorter: (a, b) => a.moduleTitle.localeCompare(b.moduleTitle),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Is Optional",
    dataIndex: "isOptional",
    key: "isOptional",
    sorter: (a, b) => a?.isOptional - b?.isOptional,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Module Description",
    dataIndex: "moduleDesc",
    key: "moduleDesc",
    sorter: (a, b) => a.moduleDesc.localeCompare(b.moduleDesc),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Module Resource",
    key: "moduleResource",
    sorter: (a, b) => a.moduleResource.localeCompare(b.moduleResource),
    sortDirections: ["descend", "ascend"],
    render: (module: IModuleType) => {
      return (
        <Space>
          {module.type === "READING" && (
            <UploadFileHandler
              key={module.moduleId}
              url={module.moduleResource}
              onChange={(_fileList) => {}}
            />
          )}
          {module.type === "VIDEO" && (
            <UploadFileHandler
              key={module.moduleId}
              url={module.moduleResource}
              onChange={(_fileList) => {}}
            />
          )}
          {module.type === "QUIZ" && (
            <Link href={`/admin/modules/${module.moduleId}`}>
              <Button className="bg-primary-base hover:opacity-70 text-gray-100">
                Edit Quiz
              </Button>
            </Link>
          )}
        </Space>
      );
    },
  },
  {
    title: "Action",
    dataIndex: "",
    key: "appActions",
    render: (module: IModuleType) => (
      <Space size="small">
        <Button
          className="bg-primary-base hover:opacity-70 text-gray-100"
          onClick={() => saveEditedSection(module?.moduleId, module)}
        >
          Save Edit
        </Button>
        <Button
          danger
          type="text"
          onClick={() => deleteEditedSection(module?.moduleId)}
        >
          Delete
        </Button>
      </Space>
    ),
  },
];

export function ModulesTable({ sectionId }: Props) {
  const { data, isLoading, emptyData } = useModules(sectionId);
  const [searchValue, setSearchValue] = useState<string>("");
  const [tableParams, setTableParams] = useState<ITableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e?.target;
    setSearchValue(value);
  };

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<IModuleType> | SorterResult<IModuleType>[]
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      emptyData();
    }
  };

  return (
    <Space direction="vertical" size="middle" className="w-full">
      <Flex gap={16}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search Modules"
          value={searchValue}
          onChange={handleSearch}
        />
      </Flex>
      <Table
        columns={columns}
        rowKey={(record) => record.sectionId}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={isLoading}
        onChange={handleTableChange}
      />
    </Space>
  );
}

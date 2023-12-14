"use client";

import { deleteSectionApi, editSectionApi } from "@/api";
import { useSections } from "@/hooks/useSections";
import { ISectionType } from "@/types";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Input, Space, Table, message } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

type Props = {
  courseId: string;
};

interface ITableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue | null>;
}

const saveEditedSection = async (sectionId: string, sectionName: string) => {
  message.loading("Processing");
  await editSectionApi(sectionName, sectionId)
    .then(() => {
      message.success("Save Succesfully");
    })
    .catch((err) => {
      message.error(`Error: ${err}`);
    });
};

const deleteEditedSection = async (sectionId: string) => {
  message.loading("Processing");
  await deleteSectionApi(sectionId)
    .then(() => {
      message.success("Delete Succesfully");
    })
    .catch((err) => {
      message.error(`Error: ${err}`);
    });
};

const columns: ColumnsType<ISectionType> = [
  {
    title: "Section ID's",
    dataIndex: "sectionId",
    key: "sectionId",
    sorter: (a, b) => a.sectionId.localeCompare(b.sectionId),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Section Names",
    dataIndex: "sectionName",
    key: "sectionName",
    sorter: (a, b) => a.sectionName.localeCompare(b.sectionName),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Action",
    dataIndex: "",
    key: "appActions",
    render: (section: ISectionType) => (
      <Space size="small">
        <Button
        className="bg-primary-base hover:opacity-70 text-gray-100"
          onClick={() =>
            saveEditedSection(section?.sectionName, section?.sectionId)
          }
        >
          Save Edit
        </Button>
        <Link href={`/admin/courses/${section.courseId}/${section.sectionId}`}>
          <Button type="dashed">See Modules</Button>
        </Link>
        <Button
          danger
          type="text"
          onClick={() => deleteEditedSection(section?.sectionId)}
        >
          Delete
        </Button>
      </Space>
    ),
  },
];

export function SectionsTable({ courseId }: Props) {
  const { data, isLoading, emptyData } = useSections(courseId);
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
    sorter: SorterResult<ISectionType> | SorterResult<ISectionType>[]
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
          placeholder="Search Section"
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

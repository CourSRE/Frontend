"use client";

import { useUsers } from "@/hooks";
import { IProgressedCourse, IUsersType } from "@/types";
import { SearchOutlined } from "@ant-design/icons";
import { Flex, Input, Select, Space, Table } from "antd";
import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import React, { ChangeEvent, useState } from "react";

type Props = {};

interface ITableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue | null>;
}

const columns: ColumnsType<IUsersType> = [
  {
    title: "Students Id",
    dataIndex: "userId",
    key: "userId",
    sorter: (a, b) => a.userId.localeCompare(b.userId),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Fullname",
    dataIndex: "fullName",
    key: "fullName",
    sorter: (a, b) => a.fullName.localeCompare(b.fullName),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    sorter: (a, b) => a.username.localeCompare(b.username),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    sorter: (a, b) => a.email.localeCompare(b.email),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Student Chapter",
    dataIndex: "studentChapter",
    key: "studentChapter",
    sorter: (a, b) => a.studentChapter.localeCompare(b.studentChapter),
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Courses",
    dataIndex: "progressedCourses",
    key: "progressedCourses",
    render: (courses) => (
      <Select
      defaultActiveFirstOption
        style={{ width: 180 }}
        options={courses?.map((course: IProgressedCourse) => ({
          label: `${course.title} - ${course.percent}%`,
          value: course.courseId,
        }))}
      />
    ),
    sortDirections: ["descend", "ascend"],
  },
];

// [{ value: "lucy", label: "Lucy" }]

// const getRandomuserParams = (params: ITableParams) => ({
//   results: params.pagination?.pageSize,
//   page: params.pagination?.current,
//   ...params,
// });

export function UsersTable({}: Props) {
  const { data, isLoading, emptyData } = useUsers();
  const [searchValue, setSearchValue] = useState<string>("");
  const [tableParams, setTableParams] = useState<ITableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  // const fetchData = () => {
  //   setLoading(true);
  //   fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(tableParams))}`)
  //     .then((res) => res.json())
  //     .then(({ results }) => {
  //       setData(results);
  //       setLoading(false);
  //       setTableParams({
  //         ...tableParams,
  //         pagination: {
  //           ...tableParams.pagination,
  //           total: 200,
  //           // 200 is mock data, you should read it from server
  //           // total: data.totalCount,
  //         },
  //       });
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [JSON.stringify(tableParams)]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e?.target;
    setSearchValue(value);
  };

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<IUsersType> | SorterResult<IUsersType>[]
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
          placeholder="Search Student"
          value={searchValue}
          onChange={handleSearch}
        />
      </Flex>
      <Table
        columns={columns}
        rowKey={(record) => record.userId}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={isLoading}
        onChange={handleTableChange}
      />
    </Space>
  );
}

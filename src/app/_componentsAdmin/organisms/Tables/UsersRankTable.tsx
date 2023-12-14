"use client";

import { useUserRank } from "@/hooks";
import { IRankUsersDataType } from "@/types";
import { SearchOutlined } from "@ant-design/icons";
import { Flex, Input, Space, Table } from "antd";
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

const columns: ColumnsType<IRankUsersDataType> = [
  {
    title: "Rank",
    dataIndex: "rank",
    key: "rank",
    sorter: (a, b) => a.rank - b.rank,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Name",
    dataIndex: "fullName",
    key: "fullName",
    sorter: (a, b) => a.fullName.localeCompare(b.fullName),
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
    title: "Percentage Complete",
    dataIndex: "percent",
    key: "percent",
    render: text => `${text}%`,
    sorter: (a, b) => a.percent - b.percent,
    sortDirections: ["descend", "ascend"],
  },
  {
    title: "Average Score",
    dataIndex: "averageScore",
    key: "averageScore",
    render: text => `${text}%`,
    sorter: (a, b) => a.averageScore - b.averageScore,
    sortDirections: ["descend", "ascend"],
  },
];

// const getRandomuserParams = (params: ITableParams) => ({
//   results: params.pagination?.pageSize,
//   page: params.pagination?.current,
//   ...params,
// });

export function UsersRankTable({}: Props) {
  const { data, isLoading, emptyData } = useUserRank();
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
    sorter:
      | SorterResult<IRankUsersDataType>
      | SorterResult<IRankUsersDataType>[]
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
        rowKey={(record) => record.id}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={isLoading}
        onChange={handleTableChange}
      />
    </Space>
  );
}

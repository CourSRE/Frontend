"use client";

import { Tab } from "@headlessui/react";
import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TLeaderboardData, dummyLeaderboardData } from "@/constants";
import { OptionInput, TextInput } from "@/app/_components/atoms";

const columnHelper = createColumnHelper<TLeaderboardData>();

const columns = [
  columnHelper.accessor("rank", {
    id: "rank",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    cell: (info) => <i>{info.getValue()}</i>,
    // header: () => <span>Name</span>,
  }),
  columnHelper.accessor("studentChapter", {
    header: () => <span>Student Chapter</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("percentage", {
    header: () => <span>Percentage Complete</span>,
    cell: (info) => <i>{info.getValue()}%</i>,
  }),
  columnHelper.accessor("averageScore", {
    header: () => <span>Average Score</span>,
    cell: (info) => <em>{info.getValue()}%</em>,
  }),
];

type TProps = {};

export const DashboardLeaderboard: React.FC<TProps> = () => {
  const [data, setData] = React.useState(() => [...dummyLeaderboardData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Tab.Panel as="section" className="w-full flex flex-col text-base">
      <section className="flex gap-6 justify-between pt-4 pb-[43px]">
        <TextInput
          className="w-[30%]"
          placeholder="Search by name"
          searchIcon
          fullWidth
          label="Search:"
        />
        <OptionInput fullWidth label="Sort By:">
          <option>Latest</option>
          <option>Highest</option>
          <option>Lowest</option>
        </OptionInput>
        <OptionInput fullWidth label="Courses: ">
          <option>Courses Name</option>
          <option>Biologi 101</option>
          <option>Renewable Energy</option>
          <option>Aby COurse</option>
        </OptionInput>
        <OptionInput fullWidth label="Student Chapter:">
          <option>Student Chapter Name</option>
          <option>SRE Unair</option>
          <option>SRE UGM</option>
          <option>Aby BSI</option>
        </OptionInput>
      </section>
      <table className="flex-1">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="font-normal pb-7 text-left">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Tab.Panel>
  );
};

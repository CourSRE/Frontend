'use client'

import React from 'react'
import AddCourseForm from './_modules/AddCourseForm'
import { IAddCourseFieldType } from '@/types/coursesType/AddCourseFieldType';
import { addCourseApi } from '@/api';
import { message } from 'antd';

type Props = {}

const onFinish = (values: IAddCourseFieldType) => {
  // Todo: Delete Console Log
  addCourseApi(values).then(() => {
    message.success("Success Add Section");
  }).catch((err) => {
    message.error(`Error: ${err}`);
  });
};

export default function CreateCoursePage({}: Props) {
  return (
    <main>
      <AddCourseForm onFinish={onFinish} />
    </main>
  )
}
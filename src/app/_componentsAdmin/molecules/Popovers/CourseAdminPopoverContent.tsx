'use client'

import { deleteCourseApi } from '@/api';
import { Button, Modal, Typography } from 'antd';
import Link from 'next/link'
import React, { useCallback, useState } from 'react'

type Props = {
  idCourse: string
}

export function CourseAdminPopoverContent({idCourse}: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const showModal = useCallback(() => {
    setOpen(true);
  }, [setOpen])
  const handleOk = useCallback(() => {
    deleteCourseApi(idCourse)
    setOpen(false);
  }, [setOpen, idCourse])

  const handleCancel = useCallback(() => {
    setOpen(false);
  }, [setOpen])

  return (
    <ul className="flex flex-col gap-2">
      <Modal
        open={open}
        title="Delete Course?"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { CancelBtn }) => (
          <>
            <CancelBtn />
            <Button onClick={handleOk} danger>Delete</Button>
          </>
        )}
      >
        <Typography.Text>Do you want to delete this course?</Typography.Text>
      </Modal>
      <li><Link href={`/courses/${idCourse}`}>Preview</Link></li>
      <li><Link href={`/admin/courses/${idCourse}`}>Edit Course</Link></li>
      <li onClick={showModal} className="hover:text-red-500 cursor-pointer">Delete Course</li>
    </ul>
  )
}
'use client'

import { Col, Row } from 'antd'
import React from 'react'
import { FunfactCard } from '@/app/_componentsAdmin/molecules'

type Props = {}

export function FunfactList({}: Props) {
  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <FunfactCard title='Active Courses' value='6' icon='/icons/CheckSquareOffset.svg' bgIcon='bg-[#EBEBFF]' />
      </Col>
      <Col span={8}>
        <FunfactCard title='Course Instructor' value='5' icon='/icons/Users-Orange.svg' bgIcon='bg-[#FFF2E5]' />
      </Col>
      <Col span={8}>
        <FunfactCard title='Completition Rate' value='90%' icon='/icons/Trophy.svg' bgIcon='bg-[#E1F7E3]' />
      </Col>
      <Col span={8}>
        <FunfactCard title='Students' value='1000' icon='/icons/UserCircle.svg' bgIcon='bg-[#FFF0F0]' />
      </Col>
      <Col span={8}>
        <FunfactCard title='Student Chapter' value='20' icon='/icons/Notepad.svg' bgIcon='bg-[#E1F7E3]' />
      </Col>
      <Col span={8}>
        <FunfactCard title='Quiz Courses' value='80%' icon='/icons/Stack-Purple.svg' bgIcon='bg-[#EBEBFF]' />
      </Col>
    </Row>
  )
}
"use client";

import { Tab } from '@headlessui/react'
import React from 'react'

type TProps = {}

export const DashboardSettings: React.FC<TProps> = () => {
  return (
    <Tab.Panel as='section'>Settings</Tab.Panel>
  )
}
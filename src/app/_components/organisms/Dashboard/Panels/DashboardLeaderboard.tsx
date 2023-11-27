"use client";

import { Tab } from '@headlessui/react'
import React from 'react'

type TProps = {}

export const DashboardLeaderboard: React.FC<TProps> = () => {
  return (
    <Tab.Panel as='section'>Leaderboard</Tab.Panel>
  )
}
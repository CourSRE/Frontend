import { UsersTable } from '@/app/_componentsAdmin/organisms'
import React from 'react'

type Props = {}

export default function AdminUsersPage({}: Props) {
  return (
    <main>
      <UsersTable />
    </main>
  )
}
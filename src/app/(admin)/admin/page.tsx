import { redirect } from 'next/navigation'

type Props = {}

export default function AdminPage({}: Props) {
  return redirect('/')
  
}
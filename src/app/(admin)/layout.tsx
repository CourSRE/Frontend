interface IProps {
  children: React.ReactNode
}

export default function AdminsLayout({children} : IProps) {
  return (
    <>
      {children}
    </>
  )
}

interface IProps {
  children: React.ReactNode
}

export default function UsersLayout({children} : IProps) {
  return (
    <main>
      {children}
    </main>
  )
}

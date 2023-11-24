interface IProps {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  leaderboard: React.ReactNode;
  settings: React.ReactNode;
}

export default function DashboardUsersLayout({children, dashboard, leaderboard, settings} : IProps) {
  return (
    <main>
      {children}
      {dashboard}
      {leaderboard}
      {settings}
    </main>
  )
}

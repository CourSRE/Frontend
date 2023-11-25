interface IProps {
  children: React.ReactNode
}

function Dashboard({children}: IProps) {
  return (
    <>
    {children}
    </>
  );
};

export default Dashboard;

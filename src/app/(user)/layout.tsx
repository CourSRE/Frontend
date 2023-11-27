import { Footer, Header } from "../_components/organisms";

interface IProps {
  children: React.ReactNode;
}

function Dashboard({ children }: IProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Dashboard;

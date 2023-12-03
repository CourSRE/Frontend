import { AdminHeader, AdminSidebar } from "../_components/organisms";

interface IProps {
  children: React.ReactNode;
}

export default function AdminsLayout({ children }: IProps) {
  return (
    <div className="flex w-full h-full overflow-auto">
      <AdminSidebar />
      <div className="w-full min-h-screen flex-[5]">
        <AdminHeader />
        {children}
      </div>
    </div>
  );
}

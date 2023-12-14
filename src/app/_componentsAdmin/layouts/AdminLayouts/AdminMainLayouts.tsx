import React from "react";
import { AdminFooter } from "@/app/_componentsAdmin/organisms";

type Props = {
  children: React.ReactNode;
};

export function AdminMainLayouts({ children }: Props) {
  return (
    <div className="bg-gray-100 py-4">
      <main className="max-w-5xl mx-auto">{children}</main>
      <AdminFooter />
    </div>
  );
}

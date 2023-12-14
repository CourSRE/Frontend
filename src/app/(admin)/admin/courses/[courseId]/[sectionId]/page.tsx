import React from "react";
import AddModulesSection from "./_modules/AddModulesSection";
import { ModulesTable } from "@/app/_componentsAdmin/organisms";

type Props = {
  params: {
    sectionId: string
  }
};

export default function SectionPage({params}: Props) {
  return (
    <main className="flex flex-col gap-8">
      <AddModulesSection sectionId={params?.sectionId} />
      <ModulesTable sectionId={params?.sectionId} />
    </main>
  );
}

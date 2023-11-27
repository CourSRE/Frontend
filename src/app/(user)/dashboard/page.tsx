import { DashboardTab } from "@/app/_components/organisms";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="pb-4">
      <section className="bg-primary-100 pt-[23.5px] px-4">
        <div className="flex items-center justify-center gap-6 container mx-auto py-10 bg-white border-[1px] border-primary-100">
          <Image
            src="/images/default-avatar-image.jpg"
            alt=""
            width={110}
            height={110}
            className="cursor-pointer rounded-full border-2"
          />
          <div className="flex flex-col gap-[14px]">
            <h2 className="text-gray-900 text-2xl font-semibold">
              Kevin Gilbert
            </h2>
            <p className="text-gray-600">SRE Universitas Airlangga Member</p>
          </div>
        </div>
      </section>
      <DashboardTab />
    </main>
  );
}

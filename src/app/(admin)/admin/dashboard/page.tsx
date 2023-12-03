import { FunFactCards } from "@/app/_components/organisms";

export default function AdminDashboard() {
  return (
    <main className="bg-gray-100 w-full h-full py-6 flex flex-col gap-6 px-[120px]">
      <FunFactCards />
      <div className="flex gap-6 [&>section]:bg-white">
        <section className="flex-[4]">
          <header className="flex py-4 px-5 justify-between">
            <span>Overall Course Rating</span>
            <select className="bg-inherit">
              <option>This Week</option>
            </select>
          </header>
          <div className="flex border-y-[1px] border-gray-200 py-[22px] px-5">
            <section className="flex-1">Overall Rating</section>
            <section className="flex-1">Graphic</section>
          </div>
          <footer className="pt-[22px] pb-5 px-5">Rating score</footer>
        </section>
        <section className="flex-[6]">
          <header className="flex py-4 px-5 justify-between">
            <span>Course Overview</span>
            <select className="bg-inherit">
              <option>This Week</option>
            </select>
          </header>
        </section>
      </div>
    </main>
  );
}

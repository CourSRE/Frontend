"use client";
import { ProgressBar } from "@/app/_components/atoms";
import { FunFactCards } from "@/app/_components/organisms";
import ReactStars from "react-stars";

const starCount = [5, 4, 3, 2, 1];

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
          <footer className="pt-[22px] pb-5 px-5">
            {starCount.map((star) => (
              <div key={star} className="flex items-center justify-between">
                <ReactStars
                  count={5}
                  size={24}
                  value={star}
                  color2="#FD8E1F"
                  className="flex-1"
                />
                <span className="flex-1 text-center">{star} Star</span>
                <ProgressBar
                  percentage={56}
                  className="flex-[2]"
                  color="bg-[#FD8E1F]"
                />
              </div>
            ))}
          </footer>
        </section>
        <section className="flex-[6]">
          <header className="flex py-4 px-5 justify-between">
            <span>Course Overview</span>
            <select className="bg-inherit">
              <option>This Week</option>
            </select>
          </header>
          <div>Add: React Vis</div>
        </section>
      </div>
    </main>
  );
}

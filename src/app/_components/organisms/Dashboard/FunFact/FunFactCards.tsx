import Image from "next/image";
import React from "react";

type TProps = {};

export const FunFactCards: React.FC<TProps> = () => {
  return (
    <ul className="grid grid-cols-3 gap-6 w-full">
      <li className="p-6 flex gap-6 bg-white">
        <div className="p-[14px] bg-[#EBEBFF] ">
          <Image
            src="/icons/CheckSquareOffset.svg"
            alt=""
            width={32}
            height={32}
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <span>6</span>
          <span>Active Courses</span>
        </div>
      </li>

      <li className="p-6 flex gap-6 bg-white">
        <div className="p-[14px] bg-[#FFF2E5] ">
          <Image
            src="/icons/Users-Orange.svg"
            alt=""
            width={32}
            height={32}
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <span>5</span>
          <span>Course Instructor</span>
        </div>
      </li>

      <li className="p-6 flex gap-6 bg-white">
        <div className="p-[14px] bg-[#E1F7E3] ">
          <Image
            src="/icons/Trophy.svg"
            alt=""
            width={32}
            height={32}
            className="text-[#564FFD]"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <span>90%</span>
          <span>Completition Rate</span>
        </div>
      </li>

      <li className="p-6 flex gap-6 bg-white">
        <div className="p-[14px] bg-[#FFF0F0] ">
          <Image
            src="/icons/UserCircle.svg"
            alt=""
            width={32}
            height={32}
            className="text-[#564FFD]"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <span>1000</span>
          <span>Students</span>
        </div>
      </li>

      <li className="p-6 flex gap-6 bg-white">
        <div className="p-[14px] bg-[#E1F7E3] ">
          <Image
            src="/icons/Notepad.svg"
            alt=""
            width={32}
            height={32}
            className="text-[#564FFD]"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <span>20</span>
          <span>Student Chapter</span>
        </div>
      </li>

      <li className="p-6 flex gap-6 bg-white">
        <div className="p-[14px] bg-[#EBEBFF] ">
          <Image
            src="/icons/Stack-Purple.svg"
            alt=""
            width={32}
            height={32}
            className="text-[#564FFD]"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <span>80%</span>
          <span>Quiz Courses</span>
        </div>
      </li>
    </ul>
  );
};

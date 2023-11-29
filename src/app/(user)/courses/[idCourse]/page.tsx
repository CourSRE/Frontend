import { MainContainer } from "@/app/_components/Layouts";
import { Button } from "@/app/_components/atoms";
import { CourseDetailTab } from "@/app/_components/organisms";
import Image from "next/image";

const course = {
  title: "Bioenergi 101",
  desc: "3 3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.",
  imageSrc: "/images/default-courses-image.jpg",
};

export default function CoursesLandingPage() {
  return (
    <main>
      <MainContainer
        className="bg-primary-100 pt-[54.5px] pb-[38px] px-[15%]"
        childrenClassName="flex gap-[29px] justify-center items-center"
      >
        <Image src={course?.imageSrc} alt="" width={254} height={143} />
        <div className="flex flex-col gap-3 text-gray-900">
          <article className="flex flex-col gap-1">
            <h1 className=" font-semibold text-4xl">{course?.title}</h1>
            <p className="text-gray-600 text-xl">{course?.desc}</p>
          </article>
          <Button
            icon={
              <Image src="/icons/start.svg" alt="" width={20} height={20} />
            }
          >
            Start
          </Button>
        </div>
      </MainContainer>
      <MainContainer>
        <CourseDetailTab />
      </MainContainer>
    </main>
  );
}

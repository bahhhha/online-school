"use client";

import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { TeacherCard } from "@/components/TeacherCard/TeacherCard";
import { teachers } from "@/data/teachers";
import Image from "next/image";

const Teachers: React.FC = () => {
  return (
    <div className="flex justify-center py-12 px-4 md:px-0">
      <div className="max-w-[75rem] w-full">
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          <SectionTitle
            title="Наши преподаватели лучшие на свете"
            lineColor="#E74040"
          />
          <div className="w-24 h-24 md:w-36 md:h-36 relative">
            <Image
              src="/teacherIcon.png"
              alt="teacher"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-[#737373] text-center md:text-left text-sm md:text-md font-light max-w-[20rem]">
            Наши преподаватели лучшие на свете Наши преподаватели лучшие Наши
            преподаватели лучшие на свете
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-12 justify-items-center">
          {teachers.map((teacher, index) => (
            <TeacherCard
              text={teacher.text}
              imageSrc={teacher.imageSrc}
              key={index}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;

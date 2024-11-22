"use client";

import React from "react";
import Image from "next/image";
import { getCirclePatterns } from "@/utils/getCirclePatterns";

interface TeacherCardProps {
  imageSrc: string;
  text: string;
  index: number;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({
  imageSrc,
  text,
  index,
}) => {
  const circles = getCirclePatterns(index);

  return (
    <div className="relative flex items-center justify-center p-4 w-full sm:w-[25rem]">
      {circles.map((circle, idx) => (
        <div
          key={idx}
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            backgroundColor: circle.color,
            position: "absolute",
            top: circle.top,
            left: circle.left,
            borderRadius: "50%",
            zIndex: 0,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        ></div>
      ))}

      <div
        className="relative py-4 w-full max-w-[30rem] sm:w-[40rem] h-fit md:py-8 rounded-3xl flex items-center justify-center shadow-md"
        style={{
          background: "rgba(0, 0, 0, 0.05)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-8 rounded-t-3xl flex items-center px-5"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          }}
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 px-6 mt-6 z-10">
          <div className="w-16 h-16 sm:w-24 sm:h-24 relative">
            <Image
              src={imageSrc}
              alt="Instructor"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <div
            className="p-4 w-48 sm:w-64 bg-blue-500 text-white rounded-lg text-sm sm:text-md"
            style={{ zIndex: 10 }}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

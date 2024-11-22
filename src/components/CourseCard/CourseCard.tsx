"use client";
import Image from "next/image";
import { Button } from "../Button/Button";
import { useUnit } from "effector-react";
import { openFormModal } from "@/sections/FormModal/model";

interface CourseCardProps {
  name: string;
  description: string;
  ageGroup?: string;
  gradientFrom?: string;
  gradientTo?: string;
  imageSrc: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  name,
  description,
  ageGroup,
  gradientFrom = "#FD8F55",
  gradientTo = "#FFB58D",
  imageSrc,
}) => {
  const openForm = useUnit(openFormModal);

  return (
    <div
      className="flex flex-col md:flex-row w-full h-auto md:h-[14rem] relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(-225deg, ${gradientFrom}, ${gradientTo})`,
        borderRadius: "2rem",
      }}
    >
      <div className="flex flex-col gap-2 px-6 md:px-16 py-8 justify-between md:w-3/5 h-full">
        <div className="flex flex-col gap-2 w-full md:w-[32rem]">
          <h3 className="text-white text-xl mt-4 md:mt-0 md:text-2xl font-bold">
            {name}
          </h3>
          <p className="text-white text-sm md:text-md font-light">
            {description}
          </p>
        </div>
        <div className="flex items-end mt-4 md:mt-0">
          <Button
            variant="outlined-card"
            buttonClassName="w-full md:w-56"
            onClick={() => {
              openForm();
            }}
          >
            Бесплатное занятие
          </Button>
        </div>
      </div>

      <div className="relative w-full md:flex-grow h-64 md:h-full flex justify-center md:justify-start">
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={`Course image: ${name}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {ageGroup && (
        <div className="absolute right-4 top-4 bg-white bg-opacity-70 text-xs md:text-sm text-navy font-bold rounded-full px-3 md:px-4 py-1">
          {ageGroup}
        </div>
      )}
    </div>
  );
};

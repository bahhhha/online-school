"use client";
import Image from "next/image";
import { Button } from "../Button/Button";
import { openFormModal } from "@/sections/FormModal/model";
import { useUnit } from "effector-react";
import { scrollTo } from "@/utils/scrollTo";

export const Hero: React.FC = () => {
  const openForm = useUnit(openFormModal);

  return (
    <div
      style={{
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "3rem",
        position: "relative",
        background: "white",
        overflow: "hidden",
      }}
      className="flex flex-col md:flex-row w-full h-auto md:h-[36rem]"
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(-45deg, rgba(253, 143, 85, 0.5) 0%, transparent 30%)",
          pointerEvents: "none",
        }}
      ></div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 sm:px-12 md:pl-24 pt-8 md:pt-0 text-center md:text-left">
        <div className="flex flex-col gap-4 md:gap-8 w-full max-w-md">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-title">
            Онлайн школа программирования для детей
          </h1>
          <p className="text-[#737373] text-base sm:text-lg md:text-xl">
            Дополнительный текст для пояснение и короткого описания
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button onClick={() => openForm()}>Бесплатное занятие</Button>
            <Button
              variant="outlined"
              onClick={() => {
                scrollTo("courses");
              }}
            >
              Подробнее
            </Button>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 flex items-end h-[20rem] md:h-full">
        <div className="absolute bottom-0 w-full h-full">
          <Image
            src="/kiddo.png"
            alt="Hero"
            layout="fill"
            className="object-contain"
            style={{
              objectPosition: "bottom",
            }}
          />
        </div>
      </div>
    </div>
  );
};

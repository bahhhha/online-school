"use client";

import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { HeaderLink } from "./HeaderLink/HeaderLink";
import { openFormModal } from "../FormModal/model";
import { useUnit } from "effector-react";
import { scrollTo } from "@/utils/scrollTo";

const Header: React.FC = () => {
  const openForm = useUnit(openFormModal);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between p-4">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
        <div className="w-28 h-14 md:w-48 md:h-24 relative">
          <Image fill src="/logo.svg" objectFit="contain" alt="Logo" />
        </div>

        <div className="flex flex-row md:flex-row items-center gap-4 md:gap-6">
          <HeaderLink onClick={() => scrollTo("courses")}>Курсы</HeaderLink>
          <HeaderLink onClick={() => scrollTo("feedbacks")}>Отзывы</HeaderLink>
        </div>
      </div>

      <div className="mt-4 md:mt-0">
        <Button
          onClick={() => {
            openForm();
          }}
          buttonClassName="w-full md:w-auto"
        >
          Бесплатное занятие
        </Button>
      </div>
    </div>
  );
};

export default Header;

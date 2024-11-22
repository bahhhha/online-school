"use client";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Modal } from "@/components/Modal/Modal";
import { useUnit } from "effector-react";
import { $isFormModalOpen, closeFormModal } from "./model";

export const FormModal = () => {
  const [isOpen, close] = useUnit([$isFormModalOpen, closeFormModal]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <div className="p-8 flex flex-col items-center">
        <div className="mb-8 md:w-[30rem] w-[20rem]">
          <h2 className="text-4xl font-bold">Попробуйте бесплатное занятие</h2>
          <p className="mt-2">
            Оставьте свои данные и мы подберем для вас курс!
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-64">
          <Input
            type="text"
            placeholder="Имя и фамилия"
            required
            inputClassname="border"
          />
          <Input
            type="tel"
            placeholder="Номер телефона"
            required
            inputClassname="border"
          />
          <Button type="submit" buttonClassName="w-full" shadowed>
            Отправить
          </Button>
        </form>
      </div>
    </Modal>
  );
};

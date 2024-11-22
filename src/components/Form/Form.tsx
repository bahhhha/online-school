import Image from "next/image";
import { Input } from "../Input/Input";
import { useState } from "react";
import { Button } from "../Button/Button";

export const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    console.log(name, phone);
  };

  return (
    <div
      className="flex flex-col md:flex-row my-8 md:my-0 w-full h-auto md:h-[30rem] rounded-3xl overflow-hidden shadow-md px-8 pt-8 md:pl-16"
      style={{
        background: "linear-gradient(135deg, #3B9CF6, #B0D9FF)",
      }}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-title mb-6 sm:mb-8 md:mb-12">
          Попробуйте первое бесплатное занятие
        </h2>
        <form className="space-y-4 w-full max-w-sm">
          <Input
            placeholder="Имя Фамилия"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="+7 777 123 4567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button onClick={handleSubmit} buttonClassName="w-full">
            Бесплатное занятие
          </Button>
        </form>
      </div>

      <div className="relative w-full md:w-1/2 h-[15rem] md:h-full flex items-end mt-8 md:mt-0">
        <Image
          src="/girl.png"
          alt="Girl"
          fill
          className="object-contain"
          style={{ objectPosition: "bottom right" }}
        />
      </div>
    </div>
  );
};

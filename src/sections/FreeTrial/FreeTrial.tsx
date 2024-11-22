"use client";
import { Form } from "@/components/Form/Form";

const FreeTrial: React.FC = () => {
  return (
    <div
      className="flex justify-center p-8"
      style={{
        background: "linear-gradient(to bottom, white 50%, #292930 50%)",
      }}
    >
      <div className="w-[75rem]">
        <Form />
      </div>
    </div>
  );
};

export default FreeTrial;

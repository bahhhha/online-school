"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface AccordionContent {
  question: string;
  answer: string;
}

interface AccordionProps {
  content: AccordionContent[];
}

export const Accordion: React.FC<AccordionProps> = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4 w-full">
      {content.map((item, index) => (
        <div
          onClick={() => toggleAccordion(index)}
          key={index}
          className="overflow-hidden"
        >
          <button className="w-full flex gap-4 items-center px-4 py-2 text-left text-lg font-semibold text-gray-800 focus:outline-none">
            <p className="w-4/5">{item.question}</p>
            <div className="w-1/5 flex justify-end">
              <ChevronRight
                className={`transition-transform duration-300 ${
                  activeIndex === index ? "rotate-90" : "rotate-0"
                }`}
                color="#6F1DF4"
                size={16}
              />
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-48" : "max-h-0"
            }`}
          >
            <p className="px-4 py-2 text-zinc-500">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

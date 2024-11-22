"use client";

import { useState } from "react";
import { IconButton } from "@/components/IconButton/IconButton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Feedback } from "@/components/Feedback/Feedback";
import { feedbacks } from "@/data/feedbacks";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";

const Feedbacks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? feedbacks.length - 2 : prev - 2));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2 >= feedbacks.length ? 0 : prev + 2));
  };

  return (
    <div
      id="feedbacks"
      className="bg-[#2AB050] p-4 w-full flex justify-center text-white py-12"
    >
      <div className="md:w-[75rem] w-full">
        <div className="flex justify-between items-center mb-12">
          <SectionTitle
            title="Отзывы наших клиентов"
            lineColor="#fff"
            textColor="#fff"
            subTitle="Мы всегда работаем на качество"
          />
          <div className="flex gap-4">
            <IconButton icon={<ChevronLeft size={24} />} onClick={handlePrev} />
            <IconButton
              icon={<ChevronRight size={24} />}
              onClick={handleNext}
            />
          </div>
        </div>

        <div className="flex gap-8 md:flex-row flex-col items-center justify-center">
          {feedbacks
            .slice(currentIndex, currentIndex + 2)
            .map((feedback, index) => (
              <Feedback
                key={index}
                name={feedback.name}
                feedback={feedback.feedback}
                imageSrc={feedback.imageSrc}
                stars={feedback.stars}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;

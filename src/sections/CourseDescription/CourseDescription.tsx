import { Highlight } from "@/components/Highlight/Highlight";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import Image from "next/image";

const CourseDescription: React.FC = () => {
  return (
    <div className="bg-inherit w-full flex flex-col md:flex-row items-center my-12 gap-8 md:gap-12 px-4 md:px-8 lg:px-16">
      <div className="h-[15rem] md:h-[20rem] w-full md:w-[40rem] relative">
        <Image src="/laptop.svg" alt="laptop" fill objectFit="contain" />
      </div>

      <div className="flex flex-col text-white w-full md:w-2/3 lg:w-1/2">
        <SectionTitle
          lineColor="#fff"
          textColor="#fff"
          title="Рассказываем в чем особенность нашего курса"
        />
        <p className="text-base sm:text-lg md:text-xl font-light my-4 sm:my-6 lg:my-8">
          Более детальное пояснение или ваш текст с описанием дополнительной
          информации
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <Highlight
            statColor="#5956E8"
            stat="100+"
            title="Факт о школе"
            subtitle="Lorem ipsum is simply"
          />
          <Highlight
            statColor="#6A1AB7"
            stat="100+"
            title="Факт о школе"
            subtitle="Lorem ipsum is simply"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;

import { Accordion } from "@/components/Accordion/Accordion";

const FAQ: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-16 px-4 h-[30rem]">
      <div className="w-[40rem]">
        <h2 className="font-bold text-4xl mb-16 text-title">
          Часто задаваемые вопросы
        </h2>
        <Accordion
          content={[
            {
              question: "Что такое программирование?",
              answer:
                "Программирование - это процесс создания программного обеспечения с использованием языков программирования",
            },
            {
              question: "Какие курсы вы проводите?",
              answer:
                "Мы проводим курсы по программированию для детей и взрослых",
            },
            {
              question: "Какие возрастные группы у вас есть?",
              answer: "Мы проводим курсы для детей от 6 лет и для взрослых",
            },
            {
              question: "Какие форматы обучения у вас есть?",
              answer: "Мы проводим онлайн курсы и курсы в оффлайн формате",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FAQ;

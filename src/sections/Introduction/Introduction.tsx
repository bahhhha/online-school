import { Hero } from "@/components/Hero/Hero";
import Header from "../Header/Header";
import CourseDescription from "../CourseDescription/CourseDescription";

const Introduction: React.FC = () => {
  return (
    <div className="bg-background p-4 w-full flex justify-center">
      <div className="md:w-[75rem] w-[30rem] pb-8">
        <Header />
        <Hero />
        <CourseDescription />
      </div>
    </div>
  );
};

export default Introduction;

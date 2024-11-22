import { CourseCard } from "@/components/CourseCard/CourseCard";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { courses } from "@/data/courses";

const Courses: React.FC = () => {
  return (
    <div id="courses" className="w-full bg-white p-4 flex justify-center">
      <div className="md:w-[75rem] w-[40rem] py-16">
        <SectionTitle
          title="Наши онлайн курсы"
          lineColor="#5956E8"
          textColor="#000"
          sectionTitleClassname="mb-8"
        />
        <div className="flex flex-col gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              name={course.name}
              description={course.description}
              imageSrc={course.imageSrc}
              ageGroup={course.ageGroup}
              gradientFrom={course.gradientFrom}
              gradientTo={course.gradientTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

import Image from "next/image";

interface FeedbackProps {
  name: string;
  feedback: string;
  imageSrc: string;
  stars?: number;
}

export const Feedback: React.FC<FeedbackProps> = ({
  name,
  feedback,
  imageSrc,
  stars = 5,
}) => {
  return (
    <div className="md:h-[16rem] md:w-[28rem] h-[18rem] w-[24rem] bg-white px-8 py-4 rounded-xl">
      <div className="w-full flex justify-between items-center h-1/2">
        <div className="flex items-center md:gap-4 gap-2">
          <div className="relative w-12 h-12">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-md font-bold text-typography">{name}</span>
        </div>
        <div className="flex gap-2">
          {[...Array(stars)].map((_, index) => (
            <div className="relative w-4 h-4" key={index}>
              <Image src="/star.png" alt="star" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[0.05rem] w-full bg-[#ECECEC]" />
      <p className="text-[#555555] font-[400] text-md h-1/2 flex items-center">
        {feedback}
      </p>
    </div>
  );
};

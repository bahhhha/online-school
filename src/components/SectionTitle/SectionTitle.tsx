import { SectionLine } from "./SectionLine/SectionLine";

interface SectionTitleProps {
  title: string;
  textColor?: string;
  lineColor?: string;
  sectionTitleClassname?: string;
  subTitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  textColor = "#252B42",
  lineColor = "#252B42",
  sectionTitleClassname = "",
  subTitle = "",
}) => {
  return (
    <div className={`flex flex-col text-white ${sectionTitleClassname}`}>
      <SectionLine color={lineColor} />
      <h2
        className="text-4xl md:text-5xl font-bold mt-6"
        style={{
          color: textColor,
        }}
      >
        {title}
      </h2>
      {subTitle && (
        <p
          className="text-sm mt-4"
          style={{
            color: textColor,
          }}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
};

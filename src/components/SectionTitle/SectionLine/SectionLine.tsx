interface SectionLineProps {
  width?: number;
  color?: string;
}

export const SectionLine: React.FC<SectionLineProps> = ({
  width = 5,
  color = "#fff",
}) => {
  return (
    <div
      style={{
        width: `${width}rem`,
        height: "0.4rem",
        backgroundColor: color,
      }}
    />
  );
};

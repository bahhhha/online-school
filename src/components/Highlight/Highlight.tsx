interface HighlightProps {
  title: string;
  subtitle?: string;
  statColor?: string;
  textColor?: string;
  stat: string;
}

export const Highlight: React.FC<HighlightProps> = ({
  title,
  subtitle = "",
  statColor = "#5956E8",
  textColor = "#fff",
  stat,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <p
        className="text-3xl font-bold"
        style={{
          color: statColor,
        }}
      >
        {stat}
      </p>
      <div
        className="flex flex-col text-justify"
        style={{
          color: textColor,
        }}
      >
        <p className="text-lg font-semibold">{title}</p>
        {subtitle && <p className="text-xs">{subtitle}</p>}
      </div>
    </div>
  );
};

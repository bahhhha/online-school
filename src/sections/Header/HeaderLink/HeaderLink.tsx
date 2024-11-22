"use client";

interface HeaderLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  children,
  onClick,
}) => {
  return (
    <p
      className="font-semibold text-lg text-typography hover:text-navy-400 cursor-pointer duration-150"
      onClick={onClick}
    >
      {children}
    </p>
  );
};

"use client";
import clsx from "classnames";

interface IconButtonProps {
  buttonClassName?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  buttonClassName,
  icon,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        "flex items-center justify-center w-12 h-12 bg-white text-title hover:bg-title hover:text-white rounded-full p-2 transition-all duration-200 ease-in-out",
        buttonClassName
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

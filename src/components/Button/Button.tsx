import clsx from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "filled" | "outlined" | "outlined-card";
  buttonClassName?: string;
  shadowed?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "filled",
  buttonClassName,
  shadowed = false,
  ...props
}) => {
  const baseStyles =
    "rounded-xl px-6 py-3 font-semibold text-sm transition-all duration-200 ease-in-out" +
    (shadowed ? " shadow-md" : "");
  const variantStyles = {
    filled: "bg-navy text-white hover:bg-navy-400",
    outlined:
      "bg-transparent text-navy border border-navy hover:bg-navy hover:text-white",
    "outlined-card":
      "bg-transparent text-white border border-white hover:text-navy hover:bg-white",
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], buttonClassName)}
      {...props}
    >
      {children}
    </button>
  );
};

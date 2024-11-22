import clsx from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputClassname?: string;
}

export const Input: React.FC<InputProps> = ({ inputClassname, ...props }) => {
  return (
    <input
      className={clsx(
        "w-full p-3 rounded-xl bg-white text-gray-700 placeholder-gray-400 shadow-md",
        inputClassname
      )}
      {...props}
    />
  );
};

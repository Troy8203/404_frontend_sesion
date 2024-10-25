import { FC } from "react";

interface ButtonProps {
  content: string;
  color: "orange" | "purple";
  active?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ content, color, active, onClick }) => {
  return (
    <button
      className={`border-2 rounded-full py-2 px-6 text-white
      bg-[${content}]
      `}
    >
      {content}
    </button>
  );
};

export default Button;

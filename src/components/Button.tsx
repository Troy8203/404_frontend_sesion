import { FC } from "react";

interface ButtonProps {
  content: string;
  color: "orange" | "purple";
  active?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ content, color, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white py-2 px-8 rounded-full capitalize
      ${active && (color === "orange" ? "bg-fire-bush-400" : "bg-purple-500")}
      ${
        !active &&
        (color === "orange"
          ? "text-fire-bush-500 border-2 border-fire-bush-500"
          : "text-purple-500 border-2 border-purple-500")
      }
      ${
        color === "orange"
          ? "hover:shadow-neon-orange hover:bg-fire-bush-400 hover:text-white active:bg-fire-bush-700"
          : "hover:shadow-neon-purple hover:bg-purple-400 hover:text-white active:bg-purple-700"
      }
      `}
    >
      {content}
    </button>
  );
};

export default Button;

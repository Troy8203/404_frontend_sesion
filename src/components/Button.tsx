import { FC } from "react";

interface ButtonProps {
  content: string;
  color: "orange" | "purple";
  active?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ content }) => {
  return (
    <div className="border-2 rounded-full border-fire-bush-500 text-center text-fire-bush-500 hover:bg-fire-bush-600 active:bg-fire-bush-700 hover:text-white hover:border-fire-bush-600 active:border-fire-bush-700 py-2">
      <button
        className={`text-white ${
          content.length > 4 ? "bg-fuchsia-400" : "bg-green-300"
        }`}
      >
        {content}
      </button>
    </div>
  );
};

export default Button;

// src/components/Button.tsx
import { FC } from "react";
import { ButtonProps } from "../../interfaces";

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {label}
    </button>
  );
};

export default Button;
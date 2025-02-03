import React from "react";
import './style.css'

interface Props {
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  width?: string;
  radius?: string;
  className?: string; // Allows custom Tailwind classes
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  border = "2px solid transparent",
  color = "bg-white-300",
  children,
  height = "auto",
  width = "auto",
  radius = "rounded-md",
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 ${color} ${radius} border ${className} transition duration-300 ease-in-out hover:brightness-90 focus:outline-none`}
      style={{ height, width, border }}
    >
      {children}
    </button>
  );
};

export default Button;

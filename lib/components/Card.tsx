import React from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  className?: string; // Allows custom Tailwind classes
}

const Card: React.FC<Props> = ({ title, subtitle, description, className = "" }) => {
  return (
    <div className={`bg-white border border-gray-200 rounded-lg shadow-md p-5 transition-transform hover:scale-105 ${className}`}>
      <h1 className="text-xl font-bold text-gray-900">{title}</h1>
      <h2 className="text-lg font-semibold text-gray-700">{subtitle}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;

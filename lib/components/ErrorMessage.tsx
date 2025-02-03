import React from "react";
import './style.css'

interface ErrorMessageProps {
  error: { message: string };
  onClose: () => void;
  className?: string; // Allows custom Tailwind classes
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, onClose, className = "" }) => {
  return (
    <div className={`flex items-center justify-between p-4 border border-red-400 bg-red-100 text-red-700 rounded-lg shadow-md ${className}`}>
      <p className="font-medium">{error.message}</p>
      <button
        onClick={onClose}
        className="ml-4 text-red-900 hover:text-red-600 font-bold focus:outline-none transition duration-300"
      >
        ✖
      </button>
    </div>
  );
};

export default ErrorMessage;

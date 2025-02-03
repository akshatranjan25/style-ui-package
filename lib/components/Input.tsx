import React from 'react'; // Import React explicitly

interface InputProps {
  type: "text" | "number" | "email" | "password";
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error?: boolean;
  disabled?: boolean;
  className?: string; // Allows custom Tailwind classes
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Using React for type
}

const Input = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  className = "",
  onChange,
}: InputProps) => {
  return (
    <>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        className={`p-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${
          error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
        } ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"} ${className}`}
      />
      {error && <p className="text-red-600 text-sm">Input field can't be empty!</p>}
    </>
  );
};

export default Input;

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  register: UseFormRegisterReturn;
  className?: string;
  placeholder?: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  register,
  className = "mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm",
  placeholder = "",
  type = "text",
}) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      {...register}
    />
  );
};

import { RegisterOptions } from "react-hook-form";

export const nameValidation: RegisterOptions = {
  required: "Name is required",
  minLength: {
    value: 4,
    message: "Name must be between 4 and 64 characters",
  },
  maxLength: {
    value: 64,
    message: "Name must be between 4 and 64 characters",
  },
};

export const emailValidation: RegisterOptions = {
  required: "Email is required",
  pattern: {
    value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
    message: "Invalid email address",
  },
};

export const phoneValidation: RegisterOptions = {
  required: "Phone number is required",
  pattern: {
    value: /^[0-9]{9}$/,
    message: "Phone number must be 9 digits",
  },
};

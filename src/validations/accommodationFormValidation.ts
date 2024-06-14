import { RegisterOptions } from "react-hook-form";

export const nameValidation: RegisterOptions = {
  required: "Name is required",
  minLength: {
    value: 4,
    message: "Name must be between 4 and 128 characters",
  },
  maxLength: {
    value: 128,
    message: "Name must be between 4 and 128 characters",
  },
  pattern: {
    value: /^[A-Za-z\s]+$/,
    message: "Name must not contain numbers",
  },
};

export const addressValidation: RegisterOptions = {
  required: "Address is required",
  minLength: {
    value: 4,
    message: "Address must be between 4 and 128 characters",
  },
  maxLength: {
    value: 128,
    message: "Address must be between 4 and 128 characters",
  },
};

export const descriptionValidation: RegisterOptions = {
  minLength: {
    value: 128,
    message: "Description must be between 128 and 2048 characters",
  },
  maxLength: {
    value: 2048,
    message: "Description must be between 128 and 2048 characters",
  },
  validate: (value) =>
    value.trim().length === 0 ||
    value.trim().length >= 128 ||
    "Description must be between 128 and 2048 characters",
};

export const typeValidation: RegisterOptions = {
  required: "Property type is required",
  validate: (value) =>
    ["apartment", "villa", "house"].includes(value) || "Invalid property type",
};

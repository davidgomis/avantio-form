interface ButtonProps {
  text: string;
  isValid: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, isValid }) => {
  return (
    <button
      type="submit"
      className={`px-4 py-2 rounded-md shadow-sm ${
        isValid
          ? "bg-blue-500 text-white hover:bg-sky-500 hover:border-transparent"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      {text}
    </button>
  );
};

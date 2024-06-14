interface ErrorFormProps {
  textError: string | undefined;
}

export const ErrorForm: React.FC<ErrorFormProps> = ({ textError }) => {
  return <p className="text-red-500 text-xs mt-1 text-left">{textError}</p>;
};

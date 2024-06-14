interface LabelProps {
  text: string;
}

export const Label: React.FC<LabelProps> = ({ text }) => {
  return <label className="block text-gray-700 text-left">{text}</label>;
};

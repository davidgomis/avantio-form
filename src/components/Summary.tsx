import { useAppSelector } from "../store/store";

export const Summary = () => {
  const form = useAppSelector((state) => state.form.accommodationForm);
  console.log(form.name);

  return <p>Result</p>;
};

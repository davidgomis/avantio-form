import { useAppSelector } from "../store/store";

export const Result = () => {
  const formAccommodation = useAppSelector(
    (state) => state.form.accommodationForm
  );
  const formOwner = useAppSelector((state) => state.form.ownerForm);
  console.log("formAccommodation", formAccommodation);
  console.log("formOwner", formOwner);

  return <p>Result</p>;
};

import { useAppSelector } from "../store/store";
import "./ResultComponent";

export const Result = () => {
  const formAccommodation = useAppSelector(
    (state) => state.form.accommodationForm
  );
  const formOwner = useAppSelector((state) => state.form.ownerForm);
  console.log("formAccommodation", formAccommodation);
  console.log("formOwner", formOwner);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Custom Element Example</h1>
      <result-component></result-component>
    </div>
  );
};

import { useAppSelector } from "../store/store";
import "./ResultComponent";

export const Result = () => {
  const formAccommodation = useAppSelector(
    (state) => state.form.accommodationForm
  );
  const formOwner = useAppSelector((state) => state.form.ownerForm);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Custom Element Example</h1>
      <result-component
        accommodation-name={formAccommodation.name}
        accommodation-address={formAccommodation.address}
        accommodation-description={formAccommodation.description}
        accommodation-type={formAccommodation.type}
        owner-name={formOwner.name}
        owner-email={formOwner.email}
        owner-phone={formOwner.phone}
      ></result-component>
    </div>
  );
};

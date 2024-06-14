import { useAppSelector } from "../store/store";
import { getRandomBoolean } from "../utils/getRandomBoolean";
import "./ResultComponent";

export const Result = () => {
  const formAccommodation = useAppSelector(
    (state) => state.form.accommodationForm
  );
  const formOwner = useAppSelector((state) => state.form.ownerForm);
  const formElement = document.querySelector(
    "custom-react-form"
  ) as HTMLElement;
  const body = document.querySelector("body") as HTMLElement;
  const randomResult = getRandomBoolean();

  if (formElement) {
    formElement.style.display = "block";
    formElement.style.margin = "0 auto";
    body.style.flexDirection = "column";
    formElement.setAttribute("accommodation-name", formAccommodation.name);
    formElement.setAttribute(
      "accommodation-address",
      formAccommodation.address
    );
    formElement.setAttribute(
      "accommodation-description",
      formAccommodation.description
    );
    formElement.setAttribute("accommodation-type", formAccommodation.type);
    formElement.setAttribute("owner-name", formOwner.name);
    formElement.setAttribute("owner-email", formOwner.email);
    formElement.setAttribute("owner-phone", formOwner.phone);
  }
  return (
    <div>
      <h2 className="text-3xl text-left mb-3 mt-10 font-bold">
        {randomResult ? "FORM SUBMIT!" : "SUBMIT ERROR"}
      </h2>
    </div>
  );
};

import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/store";
import { resetForms } from "../store/formSlice";
import { getRandomBoolean } from "../utils/getRandomBoolean";
import "./ResultComponent";

export const Result = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  const handleSubmit = () => {
    dispatch(resetForms());
    navigate("/");
  };
  return (
    <div>
      <h2 className="text-5xl text-left mb-3 mt-10 font-bold">
        {randomResult ? "FORM SUBMIT!" : "SUBMIT ERROR"}
      </h2>
      <button
        type="submit"
        className={
          "mt-5 px-4 py-1 rounded-md shadow-sm bg-blue-500 text-white hover:bg-sky-500 hover:border-transparent"
        }
        onClick={handleSubmit}
      >
        Reset Form
      </button>
    </div>
  );
};

import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../store/store";
import { updateOwnerForm } from "../store/formSlice";
import { useNavigate } from "react-router-dom";
import { OwnerForm as OwnerFormType } from "../types/types";
import {
  nameValidation,
  emailValidation,
  phoneValidation,
} from "../validations/ownerFormValidation";

export const OwnerForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<OwnerFormType>();

  const onSubmit: SubmitHandler<OwnerFormType> = (values: OwnerFormType) => {
    if (isValid) {
      dispatch(updateOwnerForm(values));
      navigate("/summary");
    }
  };
  return (
    <div className="container border-solid border-2 border-black p-10 rounded-xl">
      <h2 className="text-2xl text-left mb-5 font-bold">Owner</h2>
      <form
        className="flex flex-col justify-between gap-4 w-96"
        style={{ height: "715px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-between gap-4">
          <div>
            <label className="block text-gray-700 text-left">Name</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              {...register("name", nameValidation)}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 text-left">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-left">Email</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              {...register("email", emailValidation)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1 text-left">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 text-left">Phone</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              {...register("phone", phoneValidation)}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 text-left">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className={`px-4 py-2 rounded-md shadow-sm ${
            isValid
              ? "bg-blue-500 text-white hover:bg-sky-500 hover:border-transparent"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </form>
    </div>
  );
};

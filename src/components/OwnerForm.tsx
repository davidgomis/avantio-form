import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../store/store";
import { updateOwnerForm } from "../store/formSlice";
import { useNavigate } from "react-router-dom";
import { OwnerForm as OwnerFormType } from "../types/types";

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
        <div>
          <div>
            <label className="block text-gray-700 text-left">Name</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 4,
                  message: "Name must be between 4 and 64 characters",
                },
                maxLength: {
                  value: 64,
                  message: "Name must be between 4 and 64 characters",
                },
              })}
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
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
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{9}$/,
                  message: "Phone number must be 9 digits",
                },
              })}
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

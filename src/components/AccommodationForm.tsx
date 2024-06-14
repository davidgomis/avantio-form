import { Key } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../store/store";
import { updateAccommodationForm } from "../store/formSlice";
import { useNavigate } from "react-router-dom";
import { AccommodationForm as AccommodationFormType } from "../types/types";
import useImagePreviews from "../hooks/useImagePreview";
import {
  nameValidation,
  addressValidation,
  descriptionValidation,
  typeValidation,
} from "../validations/accommodationFormValidation";

export const AccommodationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<AccommodationFormType>();

  const images = watch("images");
  const imagePreviews = useImagePreviews(images);

  const onSubmit: SubmitHandler<AccommodationFormType> = (
    values: AccommodationFormType
  ) => {
    if (isValid) {
      dispatch(updateAccommodationForm(values));
      navigate("/owner");
    }
  };

  return (
    <div className="container border-solid border-2 border-black p-10 rounded-xl">
      <h2 className="text-2xl text-left mb-5 font-bold">Accommodation</h2>
      <form
        className="flex flex-col justify-between gap-4 w-96"
        style={{ minHeight: "715px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
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
          <label className="block text-gray-700 text-left">Address</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            {...register("address", addressValidation)}
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.address.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 text-left">Description</label>
          <textarea
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            cols={10}
            rows={10}
            {...register("description", descriptionValidation)}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.description.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 text-left">Type</label>
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            {...register("type", typeValidation)}
          >
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="house">House</option>
          </select>
          {errors.type && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.type.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-gray-700 text-left">Photos</label>
          <input
            type="file"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            accept="image/*"
            multiple
            {...register("images", {
              validate: {
                maxFiles: (files) =>
                  files.length <= 2 || "You can upload up to 2 images",
                maxSize: (files) => {
                  const valid = Array.from(files).every(
                    (file) => file.size <= 500 * 1024
                  );
                  return valid || "Each image must be less than 500KB";
                },
              },
            })}
          />
          {errors.images && (
            <p className="text-red-500 text-xs mt-1 text-left">
              {errors.images.message}
            </p>
          )}
        </div>
        <div className="space-y-4">
          {imagePreviews.map(
            (src: string | undefined, index: Key | null | undefined) => (
              <img
                key={index}
                src={src}
                alt={`Preview ${index}`}
                style={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  margin: "10px",
                }}
              />
            )
          )}
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

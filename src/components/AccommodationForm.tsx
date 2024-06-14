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
import { Button } from "./Button";
import { Label } from "./Label";
import { ErrorForm } from "./ErrorForm";
import { Input } from "./Input";

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
          <Label text="Name" />
          <Input register={register("name", nameValidation)} />
          {errors.name && <ErrorForm textError={errors.name.message} />}
        </div>
        <div>
          <Label text="Address" />
          <Input register={register("address", addressValidation)} />
          {errors.address && <ErrorForm textError={errors.address.message} />}
        </div>
        <div>
          <Label text="Description" />
          <textarea
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            cols={10}
            rows={10}
            {...register("description", descriptionValidation)}
          ></textarea>
          {errors.description && (
            <ErrorForm textError={errors.description.message} />
          )}
        </div>
        <div>
          <Label text="Type" />
          <select
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            {...register("type", typeValidation)}
          >
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="house">House</option>
          </select>
          {errors.type && <ErrorForm textError={errors.type.message} />}
        </div>
        <div>
          <Label text="Photos" />
          <input
            type="file"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            accept="image/*"
            multiple
            lang="en"
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
          {errors.images && <ErrorForm textError={errors.images.message} />}
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
        <Button text="Next" isValid={isValid} />
      </form>
    </div>
  );
};

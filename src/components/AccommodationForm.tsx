import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../store/store";
import { updateAccommodationForm } from "../store/formSlice";
import { useNavigate } from "react-router-dom";
import { AccommodationForm as AccommodationFormType } from "../types/types";
import {
  nameValidation,
  addressValidation,
  descriptionValidation,
  typeValidation,
  imageValidation,
} from "../validations/accommodationFormValidation";
import { Button } from "./Button";
import { Label } from "./Label";
import { ErrorForm } from "./ErrorForm";
import { Input } from "./Input";
import { Photos } from "./Photos";

export const AccommodationForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<AccommodationFormType>();

  const onSubmit: SubmitHandler<AccommodationFormType> = (
    values: AccommodationFormType
  ) => {
    if (isValid) {
      dispatch(updateAccommodationForm(values));
      navigate("/owner");
    }
  };

  const handleImagesChange = (images: FileList) => {
    setValue("images", images);
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

        <Photos
          onImagesChange={handleImagesChange}
          register={register("images", imageValidation)}
        />

        <Button text="Next" isValid={isValid} />
      </form>
    </div>
  );
};

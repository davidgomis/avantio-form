import { Key } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../store/store";
import { updateAccommodationForm } from "../store/formSlice";
import { useNavigate } from "react-router-dom";
import { AccommodationForm as AccommodationFormType } from "../types/types";
import useImagePreviews from "../hooks/useImagePreview";

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
    <>
      <h2>Accommodation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 4,
                message: "Name must be between 4 and 128 characters",
              },
              maxLength: {
                value: 128,
                message: "Name must be between 4 and 128 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name must not contain numbers",
              },
            })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            {...register("address", {
              required: "Address is required",
              minLength: {
                value: 4,
                message: "Address must be between 4 and 128 characters",
              },
              maxLength: {
                value: 128,
                message: "Address must be between 4 and 128 characters",
              },
            })}
          />
          {errors.address && (
            <p className="text-danger">{errors.address.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            cols={30}
            rows={10}
            {...register("description", {
              minLength: {
                value: 128,
                message: "Description must be between 128 and 2048 characters",
              },
              maxLength: {
                value: 2048,
                message: "Description must be between 128 and 2048 characters",
              },
            })}
          ></textarea>
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select
            className="form-control"
            {...register("type", {
              required: "Property type is required",
              validate: (value) =>
                ["apartment", "villa", "house"].includes(value) ||
                "Invalid property type",
            })}
          >
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="house">House</option>
          </select>
          {errors.type && <p className="text-danger">{errors.type.message}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            type="file"
            className="form-control"
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
            <p className="text-danger">{errors.images.message}</p>
          )}
        </div>
        <div className="mb-3">
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
        <button type="submit" className="btn btn-info">
          Next
        </button>
      </form>
    </>
  );
};

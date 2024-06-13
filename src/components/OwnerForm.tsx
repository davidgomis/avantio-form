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
      navigate("/result");
    }
  };
  return (
    <>
      <h2>Owner</h2>
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
                message: "Name must be between 4 and 64 characters",
              },
              maxLength: {
                value: 64,
                message: "Name must be between 4 and 64 characters",
              },
            })}
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{9}$/,
                message: "Phone number must be 9 digits",
              },
            })}
          />
          {errors.phone && (
            <p className="text-danger">{errors.phone.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-info">
          Next
        </button>
      </form>
    </>
  );
};

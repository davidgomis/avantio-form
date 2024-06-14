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
import { Button } from "./Button";
import { Label } from "./Label";
import { ErrorForm } from "./ErrorForm";
import { Input } from "./Input";

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
            <Label text="Name" />
            <Input register={register("name", nameValidation)} />
            {errors.name && <ErrorForm textError={errors.name.message} />}
          </div>
          <div>
            <Label text="Email" />
            <Input register={register("email", emailValidation)} />
            {errors.email && <ErrorForm textError={errors.email.message} />}
          </div>
          <div>
            <Label text="Phone" />
            <Input register={register("phone", phoneValidation)} />
            {errors.phone && <ErrorForm textError={errors.phone.message} />}
          </div>
        </div>
        <Button text="Next" isValid={isValid} />
      </form>
    </div>
  );
};

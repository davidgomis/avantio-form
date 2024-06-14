import { useAppSelector } from "../store/store";
import { useNavigate } from "react-router-dom";

export const Summary = () => {
  const formAccommodation = useAppSelector(
    (state) => state.form.accommodationForm
  );
  const formOwner = useAppSelector((state) => state.form.ownerForm);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/result");
  };

  return (
    <div className="container border-solid border-2 border-black p-10 rounded-xl">
      <h2 className="text-2xl text-left mb-5 font-bold">Accommodation</h2>
      <div
        className="flex flex-col justify-between gap-4 w-96"
        style={{ height: "715px" }}
      >
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-1">
              <p className="font-bold">Name:</p>
              <p>{formAccommodation.name}</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="font-bold">Address:</p>
              <p>{formAccommodation.address}</p>
            </div>
            {formAccommodation.description && (
              <div className="flex items-center gap-1">
                <p className="font-bold">Description:</p>
                <p>{formAccommodation.description}</p>
              </div>
            )}
            <div className="flex items-center gap-1">
              <p className="font-bold">Type:</p>
              <p>{formAccommodation.type}</p>
            </div>
            {formAccommodation.images && (
              <div className="flex flex-col gap-1">
                <p className="font-bold text-left">Photos:</p>
                <div className="flex justify-start flex-wrap gap-3">
                  {formAccommodation.images &&
                    Array.from(formAccommodation.images).map((file, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`preview ${index}`}
                        style={{
                          maxWidth: "500px",
                          maxHeight: "500px",
                          margin: "5px",
                        }}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>
          <div>
            <h2 className="text-2xl text-left mb-5 font-bold">Owner</h2>
            <div>
              <div className="flex items-center gap-1">
                <p className="font-bold">Name:</p>
                <p>{formOwner.name}</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="font-bold">Email:</p>
                <p>{formOwner.email}</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="font-bold">Phone:</p>
                <p>{formOwner.phone}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className={
            "px-4 py-2 rounded-md shadow-sm bg-blue-500 text-white hover:bg-sky-500 hover:border-transparent"
          }
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

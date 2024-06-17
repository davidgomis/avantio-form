import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface ImageUploaderProps {
  onImagesChange: (images: FileList) => void;
  register: UseFormRegisterReturn;
}

export const Photos: React.FC<ImageUploaderProps> = ({ onImagesChange }) => {
  const [images, setImages] = useState<File[]>([]);
  const [errors, setErrors] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files);
      const updatedImages = [...images, ...newImages];

      // Validation
      if (updatedImages.length > 2) {
        setErrors("You can upload up to 2 images");
        return;
      }

      const valid = updatedImages.every((file) => file.size <= 500 * 1024);
      if (!valid) {
        setErrors("Each image must be less than 500KB");
        return;
      }

      setErrors(null);
      setImages(updatedImages);

      const dataTransfer = new DataTransfer();
      updatedImages.forEach((file) => dataTransfer.items.add(file));
      onImagesChange(dataTransfer.files);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    const dataTransfer = new DataTransfer();
    updatedImages.forEach((file) => dataTransfer.items.add(file));
    onImagesChange(dataTransfer.files);
  };

  return (
    <div className="image-uploader">
      {images.length < 2 && (
        <div className="border-solid border-2 border-black rounded-md cursor-pointer hover:bg-black hover:border-transparent hover:text-white">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="image-upload"
            onChange={handleImageChange}
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer block w-full p-2"
          >
            + Add Photos
          </label>
        </div>
      )}
      {errors && <p className="text-red-500">{errors}</p>}
      <div className="image-preview mt-4 flex flex-col gap-5">
        {images.map((image, index) => (
          <div key={index} className="">
            <img
              src={URL.createObjectURL(image)}
              alt={`preview-${index}`}
              className="image-preview"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="bg-red-500 text-white p-2 rounded-md cursor-pointer hover:bg-red-400 hover:border-transparent"
            >
              {`Remove Image ${index + 1}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

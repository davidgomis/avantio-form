import { useState, useEffect } from "react";

const useImagePreviews = (files: FileList | null) => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  useEffect(() => {
    if (files && files.length > 0) {
      const filePreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews(filePreviews);

      return () => {
        filePreviews.forEach((url) => URL.revokeObjectURL(url));
      };
    }
  }, [files]);

  return imagePreviews;
};

export default useImagePreviews;

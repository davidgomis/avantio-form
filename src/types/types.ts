export interface AccommodationForm {
  name: string;
  address: string;
  description: string;
  type: "apartment" | "villa" | "house";
  images: FileList;
}

export interface OwnerForm {
  name: string;
  email: string;
  phone: string;
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccommodationFormState {
  name: string;
  address: string;
  description: string;
  type: "apartment" | "villa" | "house";
  images: FileList | null;
}

interface OwnerFormState {
  name: string;
  email: string;
  phone: string;
}

interface FormsState {
  accommodationForm: AccommodationFormState;
  ownerForm: OwnerFormState;
}

const initialState: FormsState = {
  accommodationForm: {
    name: "",
    address: "",
    description: "",
    type: "apartment",
    images: null,
  },
  ownerForm: {
    name: "",
    email: "",
    phone: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateAccommodationForm: (
      state,
      action: PayloadAction<AccommodationFormState>
    ) => {
      state.accommodationForm = action.payload;
    },
    updateOwnerForm: (state, action: PayloadAction<OwnerFormState>) => {
      state.ownerForm = action.payload;
    },
    resetForms: (state) => {
      state.accommodationForm = initialState.accommodationForm;
      state.ownerForm = initialState.ownerForm;
    },
  },
});

export const { updateAccommodationForm, updateOwnerForm, resetForms } =
  formSlice.actions;
export default formSlice.reducer;

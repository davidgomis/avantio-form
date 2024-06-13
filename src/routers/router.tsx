import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AccommodationForm } from "../components/AccommodationForm";
import { OwnerForm } from "../components/OwnerForm";
import { Summary } from "../components/Summary";
import { Result } from "../components/Result";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <AccommodationForm /> },
      { path: "owner", element: <OwnerForm /> },
      { path: "summary", element: <Summary /> },
      { path: "result", element: <Result /> },
    ],
  },
]);

export default router;

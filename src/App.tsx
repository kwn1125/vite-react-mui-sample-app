import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UsersPage } from "./pages/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello!</h1>,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
]);

export const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
};

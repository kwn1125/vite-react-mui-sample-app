import { CssBaseline, Typography } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UsersPage } from "./pages/users";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Typography component="h1" variant="h3">
        Hello!
      </Typography>
    ),
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

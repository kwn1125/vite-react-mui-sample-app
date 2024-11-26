import { CssBaseline, Typography } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UsersPage } from "./pages/users";
import { UsersNewPage } from "./pages/users/new";

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
  {
    path: "/users/new",
    element: <UsersNewPage />,
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

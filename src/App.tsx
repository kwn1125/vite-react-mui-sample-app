import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UsersPage } from "./pages/users";
import { UsersNewPage } from "./pages/users/new";

const defaultTheme = createTheme({});

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
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

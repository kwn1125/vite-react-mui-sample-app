import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello!</h1>,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

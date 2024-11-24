import { Typography } from "@mui/material";
import { UsersTable } from "../presenter/UsersTable";

export const UsersContainer = () => {
  return (
    <>
      <Typography component="h1" variant="h3">
        Users
      </Typography>
      <UsersTable />
    </>
  );
};

import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { UsersDataGrid } from "../presenter/UsersDataGrid";

export const UsersContainer = () => {
  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography component="h1" variant="h3" flexGrow={1}>
          Users
        </Typography>
        <Button component={Link} to="/users/new" variant="contained">
          Add user
        </Button>
      </Box>
      <UsersDataGrid />
    </>
  );
};

import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";

export const UsersTable = () => {
  const rows: GridRowsProp = [
    {
      id: 1,
      name: "Lionel Messi",
      email: "lionel.messi@example.com",
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
      email: "cristiano.ronaldo@example.com",
    },
  ];

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 200,
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 300,
    },
  ];

  return <DataGrid rows={rows} columns={columns} />;
};

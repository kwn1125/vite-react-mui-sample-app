import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { User } from "../../../domains/user";

type Props = {
  rows: User[];
};

export const UsersDataGrid = (props: Props) => {
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

  return <DataGrid rows={props.rows} columns={columns} />;
};

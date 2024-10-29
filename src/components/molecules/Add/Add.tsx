import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { AddProps } from "./Add.interface";

export default function Add({ onClick }: AddProps) {
  return (
    <Fab color="primary" aria-label="add" onClick={onClick}>
      <AddIcon />
    </Fab>
  );
}

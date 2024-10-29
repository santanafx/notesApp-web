import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import { RemoveProps } from "./Remove.interface";

export default function Remove({ onClick }: RemoveProps) {
  return <CancelTwoToneIcon onClick={onClick} color="error" />;
}

import { Fab } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { MenuIconProps } from "./MenuIcon.interface";

export default function MenuIcon({
  onClick,
  icon,
  tooltipTitle,
}: MenuIconProps) {
  return (
    <Tooltip title={tooltipTitle}>
      <Fab color="primary" aria-label={tooltipTitle} onClick={onClick}>
        {icon}
      </Fab>
    </Tooltip>
  );
}

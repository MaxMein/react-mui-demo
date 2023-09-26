import { Tooltip, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
export const MuiToolTip = () => {
  return (
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
};

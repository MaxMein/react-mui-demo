import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Print, CopyAll, Share, Edit } from "@mui/icons-material";
export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      <SpeedDialAction icon={<CopyAll />} tooltipTitle="Copy" tooltipOpen />
      <SpeedDialAction icon={<Print />} tooltipTitle="Print" tooltipOpen />
      <SpeedDialAction icon={<Share />} tooltipTitle="Share" tooltipOpen />
    </SpeedDial>
  );
};

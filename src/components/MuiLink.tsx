import { Stack, Link, Typography } from "@mui/material";
export const MuiLink = () => {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="#">Link</Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Typography variant="h5">
        <Link href="#" underline="hover">
          {/* none for no underline */}
          Underline
        </Link>
      </Typography>
    </Stack>
  );
};

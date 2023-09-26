import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
export const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Submit
          </Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

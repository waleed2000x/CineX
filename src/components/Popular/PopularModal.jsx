import { Dialog, DialogContent, Typography } from "@mui/material";
import React from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function PopularModal({ open, onClose, data }) {
  console.log(data);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Typography variant="h6">PopularModal</Typography>
        <Typography>
          This is the content of the modal. You can add any information or
          components you want here.
        </Typography>
        <InfoOutlinedIcon />
      </DialogContent>
    </Dialog>
  );
}

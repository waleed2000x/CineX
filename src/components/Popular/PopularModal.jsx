import { Dialog, DialogContent, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";

// eslint-disable-next-line react/prop-types
export default function PopularModal({ open, onClose, data }) {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent
        style={{
          background: `${theme === "light" ? "white" : "black"}`,
          color: `${theme === "light" ? "black" : "white"}`,
          border: ` 2px solid ${theme === "light" ? "black" : "white"}`,
        }}
      >
        <Typography variant="h6">data</Typography>
        <Typography>
          This is the content of the modal. You can add any information or
          components you want here.
        </Typography>
        <InfoOutlinedIcon />
      </DialogContent>
    </Dialog>
  );
}

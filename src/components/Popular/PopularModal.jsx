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
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            margin: "10px 0px",
          }}
        >
          <InfoOutlinedIcon style={{ fontSize: "30px" }} />
        </div>
        <Typography variant="h4" fontFamily={"inherit"}>
          {data.original_title}
        </Typography>
        <div
          className="popularModalDialoge"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
            style={{
              height: "500px",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <Typography variant="p" fontFamily={"inherit"}>
          {data.overview}
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

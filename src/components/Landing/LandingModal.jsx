import { Dialog, DialogContent, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../themeContext/ThemeContext";

export default function LandingModal({ open, onClose, data }) {
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
        <Typography variant="h4" fontFamily={"inherit"}>
          {data.original_title || data.original_name}
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
              margin: "10px 0px",
              borderRadius: "3px",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </div>
        <Typography variant="p" fontFamily={"inherit"}>
          {data.overview}
        </Typography>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Released: {data.release_date}</Typography>
          <Typography variant="h6">
            Language: {data.original_language}
          </Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
}

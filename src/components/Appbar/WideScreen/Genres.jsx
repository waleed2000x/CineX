import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useContext, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ThemeContext } from "../../themeContext/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Genres() {
  const { theme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    setAnchorEl(null);
  };

  const iconStyle = {
    color: theme === "light" ? "black" : "white",
  };

  const genres = [
    "Action & Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Horror",
    "Kids",
    "Mystery",
    "News",
    "Reality",
    "Romance",
    "Sci-Fi & Fantasy",
    "Soap",
    "Talk",
    "War & Politics",
    "Western",
  ];

  return (
    <Button
      variant="text"
      size="small"
      color="error"
      endIcon={<ArrowDropDownIcon style={iconStyle} />}
      onClick={handleClick}
    >
      <div>
        <Typography variant="p" color={theme === "light" ? "black" : "white"}>
          Genres
        </Typography>
        <Menu
          PaperProps={{
            style: {
              display: "flex",
              justifyContent: "center",
              background: theme === "light" ? "white" : "black",
              color: theme === "light" ? "black" : "white",
              width: "maxContent",
              borderRadius: "10px",
              border: `0.5px solid ${theme === "light" ? "black" : "white"}`,
            },
          }}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <AnimatePresence>
            {anchorEl && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                style={{
                  height: "50vh",
                  overflow: "scroll",
                }}
              >
                {genres.map((genre, index) => (
                  <MenuItem
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "15px 20px",
                      width: "300px",
                      borderTop: `0.5px solid ${
                        theme === "light" ? "black" : "white"
                      }`,
                      borderBottom: `0.5px solid ${
                        theme === "light" ? "black" : "white"
                      }`,
                    }}
                    onClick={handleMenuItemClick}
                  >
                    <Typography variant="p">{genre}</Typography>
                  </MenuItem>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </Menu>
      </div>
    </Button>
  );
}

import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../themeContext/ThemeContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function WideSubScreen() {
  const { theme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (anchorEl) {
      setAnchorEl(null); // Close the menu if it's already open
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    setAnchorEl(null); // Close the menu when a menu item is clicked
  };

  const iconStyle = {
    color: theme === "light" ? "black" : "white",
  };

  return (
    <div className="subBarWidescreen">
      <div className="subCenter">
        <Button variant="text" size="small" color="error">
          <Typography variant="p" color={theme === "light" ? "black" : "white"}>
            Popular
          </Typography>
        </Button>
        <Button variant="text" size="small" color="error">
          <Typography variant="p" color={theme === "light" ? "black" : "white"}>
            New Releases
          </Typography>
        </Button>
        <Button
          variant="text"
          size="small"
          color="error"
          endIcon={<ArrowDropDownIcon style={iconStyle} />}
          onClick={handleClick}
        >
          <div>
            <Typography
              variant="p"
              color={theme === "light" ? "black" : "white"}
            >
              Genres
            </Typography>
            <Menu
              //   style={{
              //     background: ` ${theme === "light" ? "white" : "black"}`,
              //   }}
              PaperProps={{
                style: {
                  display: "flex",
                  justifyContent: "center",
                  background: theme === "light" ? "white" : "black",
                  color: theme === "light" ? "black" : "white",
                  width: "20%",
                  border: `0.5px solid ${
                    theme === "light" ? "black" : "white"
                  }`,
                },
              }}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                style={{ padding: "10px" }}
                onClick={handleMenuItemClick}
              >
                Action
              </MenuItem>
              <MenuItem
                style={{ padding: "10px" }}
                onClick={handleMenuItemClick}
              >
                Comedy
              </MenuItem>
              <MenuItem
                style={{ padding: "10px" }}
                onClick={handleMenuItemClick}
              >
                Romance
              </MenuItem>
              <MenuItem
                style={{ padding: "10px" }}
                onClick={handleMenuItemClick}
              >
                Horror
              </MenuItem>
            </Menu>
          </div>
        </Button>
        <Button variant="text" size="small" color="error">
          <Typography variant="p" color={theme === "light" ? "black" : "white"}>
            Vintage
          </Typography>
        </Button>
        <Button variant="text" size="small" color="error">
          <Typography variant="p" color={theme === "light" ? "black" : "white"}>
            Comedy
          </Typography>
        </Button>
      </div>
    </div>
  );
}

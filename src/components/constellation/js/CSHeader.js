import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Icon from "@mdi/react";
import { mdiAccount, mdiLock, mdiLockOpen } from "@mdi/js";
import "../scss/CSHeader.scss";
import "../../solarsystem/img/Tip001Blue.png";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        //backgroundColor: "green",
      }}
    >
      <div className="CSHeader">
        <Toolbar className="header-menubar">
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
              marginLeft: "20px",
              color: "black",
            }}
            fontColor="black"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            className="typography-cs"
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              //textAlign: "center",
              color: "black",
              marginLeft: "15px",
            }}
          >
            Astronomical News
          </Typography>
          <Icon
            path={mdiAccount}
            title="User Profile"
            size={2}
            horizontal
            vertical
            rotate={180}
            color="black"
          />
          <Icon
            path={mdiLock}
            title="lock"
            size={2}
            horizontal
            vertical
            rotate={180}
            color="black"
          />
          <Icon
            path={mdiLockOpen}
            title="lockOpen"
            size={2}
            horizontal
            vertical
            rotate={180}
            color="black"
          />
        </Toolbar>
      </div>

      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          sx={{
            //backgroundColor: "red",
            display: "flex",
            padding: "3px",
          }}
        />
      </Search>
    </Box>
  );
}

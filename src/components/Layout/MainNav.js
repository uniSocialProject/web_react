import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

import logo from "../../images/navIcon.png";

function ResponsiveAppBar() {
  return (
    <AppBar
      position="fixed"
      style={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            variant="text"
            sx={{
              backgroundColor: "inherit",
              marginLeft: 5,
              padding: 0,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "transparent",
              },
            }}
            disableRipple
          >
            <img src={logo} alt="logo" width={150} draggable={false} />
          </Button>
          <NavLink
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            to="/"
          >
            Main Page
          </NavLink>

          <NavLink className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
            Deneme 1
          </NavLink>
          <NavLink className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
            Deneme 2
          </NavLink>

          <NavLink to="/login">
            <Button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              variant="contained"
              sx={{
                marginRight: 5,
                textTransform: "capitalize",
                fontWeight: "bold",
                "&.MuiButtonBase-root:hover": {},
              }}
            >
              Giriş Yap
            </Button>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

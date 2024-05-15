import React from "react";

import logo from "../img/logo.png";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";
// menu
import DrawerItems from "../DrawerItems/DrawerItems";
// rotas
import { Outlet, Link } from "react-router-dom";

// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//rotas
const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Course",
    to: "/course",
  },
  {
    text: "Instructor",
    to: "/instructor",
  },
  {
    text: "Internship",
    to: "/internship",
  },
  {
    text: "Certificate",
    to: "/certificate",
  },
];

function Layout() {
  return (
    <div>
      <AppBar
        component="nav"
        position="sticky"
        sx={{
          backgroundColor: "rgba(66, 148, 243, 1)",
        }}
        elevation={0}
      >
        <StyledToolbar>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{
              width: "20%",
              height: "10vh",
              marginTop: "10px",
              margintop: "-70px",
            }}
          />

          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <DrawerItems />
          </Box>
          <ListMenu>
            {itemList.map((item) => {
              const { text } = item;
              return (
                <ListItem key={text}>
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    sx={{
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "black",
                      },
                    }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </ListMenu>
        </StyledToolbar>
      </AppBar>
      <Outlet />
    </div>
  );
}

export default Layout;

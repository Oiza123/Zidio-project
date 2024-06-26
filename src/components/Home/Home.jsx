import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//img
import headerImg from "../img/image.png";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Home() {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",

    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),

    backgroundColor: "rgba(66, 148, 243, 1)",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));
  return (
    <div className="Home">
      <Header />
      <CustomBox component="header">
        {/*  Box text  */}
        <BoxText component="section">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Zidio Learning: Your Gateway to Industry Excellence
          </Typography>

          <Typography
            variant="p"
            component="p"
            sx={{
              py: 3,
              lineHeight: 1.6,
              color: "#fff",
            }}
          >
            Explore new skills beyond the world of knowledge and get lost in the
            freedom of creativity
          </Typography>

          <Box>
            <Button
              variant="contained"
              sx={{
                mr: 2,
                px: 4,
                py: 1,
                fontSize: "0.9rem",
                textTransform: "capitalize",
                borderRadius: 0,
                borderColor: "#14192d",
                color: "rgba(66, 148, 243, 1)",
                backgroundColor: "white",
                "&&:hover": {
                  backgroundColor: "black",
                },
                "&&:focus": {
                  backgroundColor: "#343a55",
                },
              }}
            >
              <Link to="/log-in" className="LoginLink">
                Log In
              </Link>
            </Button>
            <Button
              component={Link}
              to={"/about"}
              variant="outlined"
              sx={{
                px: 4,
                py: 1,
                fontSize: "0.9rem",
                textTransform: "capitalize",
                borderRadius: 0,
                color: "#fff",
                backgroundColor: "transparent",
                borderColor: "#fff",
                "&&:hover": {
                  color: "#343a55",
                  borderColor: "#343a55",
                },
                "&&:focus": {
                  color: "#343a55",
                  borderColor: "black",
                },
              }}
            >
              <Link to="/feed-back" className="LoginLink">
                Register Feedback
              </Link>
            </Button>
          </Box>
        </BoxText>

        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              flex: "1",
              paddingTop: "30px",
              alignSelf: "center",
            },
            [theme.breakpoints.up("md")]: {
              flex: "2",
              alignSelf: "flex-end",
            },
          })}
        >
          <img
            src={headerImg}
            alt="headerImg"
            style={{
              width: "90%",
              height: "100vh",
              marginTop: "-120px",
            }}
          />
        </Box>
      </CustomBox>
      <Footer />
    </div>
  );
}

export default Home;

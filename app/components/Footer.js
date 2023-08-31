"use client";

import {
  Box,
  Container,
  Stack,
  Typography,
  Grid,
  Divider,
  styled,
} from "@mui/material";

const CustomDivider = styled(Divider)`
  margin: 80px 0px 20px;
  border-width: 0px 0px thin;
  border-style: solid;
  border-color: rgb(243, 245, 249);
`;
const Footer = () => {
  const facilities = [
    "Indian Menu",
    "Popular Item",
    "Menu Item",
    "Regular Menu",
    "Private Event",
    "New Food",
    "Italian Menu",
    "Special Offer",
    "Best Offer",
  ];
  return (
    <Box
      sx={{
        background: "#070707",
        paddingTop: "100px",
        paddingBottom: "50px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <Typography variant="h5" color="white" fontSize="1.5rem" >
              Our Facilities
            </Typography>
            <Grid container mt={3} >
              {facilities.map((f) => (
                <Grid item xs={6} color="#ffffffcc">
                  <Typography
                    variant="subtitle2"
                    fontSize="18px"
                    py={1.5}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {f}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={4} display={{xs:"flex", md:"block"}} justifyContent="center">
            <Box
              sx={{
                width: "300px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                borderRadius: "50%",
                border: "1px solid hsla(0,0%,100%,.15)",
              }}
            >
              <Stack textAlign="center" spacing={1}>
                <img src="https://restho-nextjs.vercel.app/assets/images/header1-logo.svg" />
                <Typography color="#ffffffcc" variant="subtitle1">
                  Established . 2022
                </Typography>
                {/* <span className="footer-span">
                    <img  src="https://restho-nextjs.vercel.app/assets/images/icon/footer-shape.svg"/>
                </span> */}
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <Typography variant="h5" color="white" fontSize="1.5rem">
                Address Info
              </Typography>
              <Stack
                mt={2}
                spacing={1.5}
                alignItems={{ xs: "center", md: "start" }}
              >
                <Stack direction="row">
                  <Typography color="primary.main" variant="subtitle1">
                    Phone:{" "}
                  </Typography>
                  <Typography color="#ffffffcc" variant="subtitle1" ml={1.5}>
                    {" "}
                    +880-1776-766-767
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography color="primary.main" variant="subtitle1">
                    Email:{" "}
                  </Typography>
                  <Typography color="#ffffffcc" variant="subtitle1" ml={1.5}>
                    info@example.com
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography color="primary.main" variant="subtitle1">
                    Fax ID:{" "}
                  </Typography>
                  <Typography color="#ffffffcc" variant="subtitle1" ml={1.5}>
                    +99-75667-786
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography color="primary.main" variant="subtitle1">
                    Location:{" "}
                  </Typography>
                  <Typography color="#ffffffcc" variant="subtitle1" ml={1.5}>
                    Mirpur DOHS,House-167/170.
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <CustomDivider />
        <Stack
          color="#ffffffcc"
          direction={{ xs: "column", sm: "row" }}
          textAlign={{ xs: "center", sm: "left" }}
          spacing={{ xs: 1.5, sm: 0 }}
          justifyContent="space-between"
        >
          <Typography variant="subtitle1">
            @Copyright by Sirlahm-2023, All Right Reserved.
          </Typography>
          <Typography variant="subtitle1">
            Privacy & Policy | Terms and Conditions.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;

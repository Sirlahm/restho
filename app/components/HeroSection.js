"use client";

import { Box, Stack, Typography, Grid, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Hero = () => {
  return (
    <Box
      paddingX={{xs:5, md: 0}}
      sx={{
        // background: " linear-gradient(90.28deg,#000 .23%,#09161d 100.33%)",
        position: "relative",

      }}
    >
      <Grid container>
        <Grid item xs={12} md={6}  >
          <Box
            padding={{ xs: "100px 0 100px", md: "150px 0 100px", lg: "250px 0 190px" }}
            textAlign={{xs:"center", md:"left"}}
            display={{xs:"flex", md:"block"}} justifyContent="center" flexDirection="column"
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <img
                alt="restho"
                src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
              />
              <Typography variant="h6" color="primary.main">
                Welcome To Restho
              </Typography>
              <img
                alt="restho"
                src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
              />
            </Stack>

            <Typography
              color="white"
              variant="h5"
              fontSize={{xs: "3.4rem",md:"3.6rem"}}
              lineHeight={1.1}
              mt={3}
            >
              Find Your Best Healthy & Tasty Food.
            </Typography>
            <Typography
              color="white"
              variant="h6"
              fontSize="1.2rem"
              mt={5}
              fontWeight="500"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                bgcolor: "transparent",
                color: "primary.main",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "40px",
                paddingX: "35px",
                paddingY: "15px",
                alignItems: "center",
                display: "flex",
                gap: 1,
                mt: 4,
                "&:hover": {
                  bgcolor: "#09161d",
                },
              }}
            >
              <ChevronRightIcon />
              <Typography variant="subtitle1" fontSize="17px">
                Discover More
              </Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} display={{xs: "none",md:"flex", lg:"block"}} justifyContent="end">
          <Box
            gap={{ xs: "20px", lg: 0 }}
            marginTop={{xs:"180px", lg:"200px"}}
            sx={{
              position: "relative",
              display: "flex",
            }}
          >
            <img
              className="hero-img1"
              style={{}}
              src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img1.png"
            />
            <img
              className="hero-img3"
              style={{}}
              src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img3.png"
            />

            <img
              className="hero-img2"
              style={{}}
              src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img2.png"
            />
            <img
              className="hero-img4"
              style={{}}
              src="https://restho-nextjs.vercel.app/assets/images/bg/h2-banner-img4.png"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;

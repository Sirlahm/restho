"use client";
import { Box, Stack, Typography, Grid, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
  return (
    <Box
      sx={{
        // width: "369px",
        marginRight: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            zIndex: 9,
          }}
        >
          <img
            className="anime"
            src="https://restho-nextjs.vercel.app/assets/images/bg/h2-product-4.png"
          />
        </div>

        <Box
          sx={{
            maxWidth: "270px",
            width: "100%",
            border: "1.5px solid #eee",
            borderRadius: "5px",
            padding: "20px 15px 20px 110px",
            marginLeft: "-90px",
            zIndex: "4",
          }}
        >
          <Typography variant="h6" fontSize="1.4rem">
            {" "}
            Thai Soup{" "}
          </Typography>
          <Typography variant="subtitle2" fontSize="14px">
            {" "}
            Lorem ipsum dolor sit amet consectet.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Recipe = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    autoplay: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Box
      py={{ xs: "70px", md: "120px" }}
      bgcolor="white"
      width={{ xs: "90%", md: "85%" }}
      margin="0 auto"
    >
      <Box>
        <Slider {...settings}>
          {arr.map((item, index) => (
            <div key={index}>
              <Card />
            </div>
          ))}
        </Slider>
      </Box>

      <Grid container spacing={5} alignItems="center" mt={{ xs: 5, md: 15 }}>
        <Grid item xs={12} md={6}>
          <Box>
            <img
              style={{
                width: "100%",
                height: "auto",
              }}
              src=" https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img-full.png"
            />
          </Box>
          {/* <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              //  marginTop: "-50px",
              maxWidth: "620px",
              width: "100%",
              marginRight: "30px",
            }}
          >
            <img
              style={{
                width: "240px",
                maxWidth: "100%",
                height: "auto",
              }}
              src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img1.png"
            />
            <img
              style={{
                width: "240px",
                maxWidth: "100%",
                height: "auto",
                marginTop: "20px",
              }}
              src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img3.png"
            />
            <img
              style={{
                width: "240px",
                maxWidth: "100%",
                height: "auto",
                position: "absolute",
                left: "132px",
                top: "-115px",
              }}
              src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img2.png"
            />
            <img
              style={{
                width: "240px",
                maxWidth: "100%",
                height: "auto",
                position: "absolute",
                left: "112px",
                bottom: "-124px",
              }}
              src="https://restho-nextjs.vercel.app/assets/images/bg/h2-about-img4.png"
            />
          </Box> */}
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            display={{ xs: "flex", md: "block" }}
            justifyContent="center"
            textAlign={{ xs: "center", md: "left" }}
            flexDirection="column"
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <img
                alt="restho"
                src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
              />
              <Typography variant="h6" color="primary.main">
                About to Restho
              </Typography>
              <img
                alt="restho"
                src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
              />
            </Stack>
            <Typography variant="h5" fontSize="2.5rem" lineHeight={1.1} mt={3}>
              Come to Our Restaurant, Ready Your Food.
            </Typography>
            <Typography variant="h6" fontWeight="400" mt={2}>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
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

            <Stack mt={4} spacing={3}>
              <Stack direction="row" spacing={1}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #bf9444",
                    borderRadius: "5px",
                    marginRight: "20px",
                    marginTop: "2px",
                  }}
                >
                  <img src="https://restho-nextjs.vercel.app/assets/images/icon/h2-about1.svg" />
                </Box>

                <Stack spacing={0.2}>
                  <Typography variant="h6" fontSize="1.4rem">
                    {" "}
                    Pure Fresh Food.
                  </Typography>
                  <Typography variant="subtitle2" fontSize="14px">
                    {" "}
                    We are serve different type of fresh food.
                  </Typography>
                </Stack>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Box
                  sx={{
                    height: "70px",
                    width: "70px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #bf9444",
                    borderRadius: "5px",
                    marginRight: "20px",
                    marginTop: "2px",
                  }}
                >
                  <img src="https://restho-nextjs.vercel.app/assets/images/icon/h2-about1.svg" />
                </Box>

                <Stack spacing={0.2}>
                  <Typography variant="h6" fontSize="1.4rem">
                    {" "}
                    Experties Chef.
                  </Typography>
                  <Typography variant="subtitle2" fontSize="14px">
                    {" "}
                    We are serve different type of fresh food.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Recipe;

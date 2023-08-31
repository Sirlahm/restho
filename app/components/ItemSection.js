"use client";

import { Box, Stack, Typography, Grid, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Card = ({ img, name }) => {
  return (
    <Box>
      <img
        style={{
          width: "100%",
        }}
        src={img}
      />
      <div
        style={{
          padding: "45px 55px 45px 55px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          color: "#ffffffcc",
        }}
      >
        <Typography variant="h6" fontSize="1.8rem">
          {" "}
          {name}
        </Typography>
        <Typography variant="subtitle2" fontSize="17px" lineHeight="28px">
          {" "}
          It is a long established fact that a reader will be distracted.
        </Typography>
      </div>
    </Box>
  );
};
const ItemSection = () => {
  const arr = [
    {
      name: "Soup with Egg",
      img: "https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items12.png",
    },
    {
      name: "Prawn Fried",
      img: "https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items13.png",
    },
    {
      name: "Prawn Noodles",
      img: "https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items11.png",
    },
    {
      name: "Soup with Egg",
      img: "https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items12.png",
    },
    {
      name: "Prawn Fried",
      img: "https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items13.png",
    },
    {
      name: "Prawn Noodles",
      img: "https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items11.png",
    },
  ];

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translate(0, -50%)",
          right: "-25px",
          background: "#bf9444",
          color: "white",
          "&:hover": {
            background: "#bf9444",
          },
        }}
      >
        <ArrowForwardIcon
          sx={{
            cursor: "pointer",
            fontSize: "25px",
          }}
        />
      </IconButton>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translate(0, -50%)",
          left: "-25px",
          zIndex: 10,
          background: "#bf9444",
          color: "white",
          "&:hover": {
            background: "#bf9444",
          },
        }}
      >
        <ArrowBackIcon
          sx={{
            cursor: "pointer",
            fontSize: "25px",
          }}
        />
      </IconButton>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
        breakpoint: 660,
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
      py="120px"
      sx={{
        background: "#070707",
      }}
    >
      <Box
        sx={{
          width: "85%",
          margin: "0 auto",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <img
            alt="restho"
            src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
          />
          <Typography variant="h6" color="primary.main">
            Our New Item
          </Typography>
          <img
            alt="restho"
            src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
          />
        </Stack>
        <Typography
          variant="h5"
          fontSize="3.5rem"
          color="white"
          lineHeight={1.1}
          mt={1}
          textAlign="center"
        >
          Restho New Item List
        </Typography>
        <Typography variant="h6" color="#ffffffcc" mt={1} textAlign="center">
          Various versions have evolved over the years, sometimes on purpose.
        </Typography>

        <Slider {...settings}>
          {arr.map((item, index) => (
            <div key={index}>
              <Card {...item} />
            </div>
          ))}
        </Slider>
        {/* <Grid container spacing={5} mt={2}>
          {arr.map((i) => (
            <Grid item sm={4}>
              <Card {...i}/>
            </Grid>
          ))}
        </Grid> */}
      </Box>
    </Box>
  );
};

export default ItemSection;

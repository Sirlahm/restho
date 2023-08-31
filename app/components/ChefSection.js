"use client";

import { Box, Stack, Typography, Button, Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Card = ({ name, img }) => {
  return (
    <Box>
      <div
        style={{
          position: "relative",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <img
          style={{
            borderRadius: "10px 10px 0 0",
            width: "100%",
            height: "auto",
          }}
          src={img}
        />
      </div>

      <div
        style={{
          padding: "45px 55px 45px 55px",
          textAlign: "center",
          border: "1px solid #eee",
          borderRadius: "0 0 10px 10px",
          marginTop: "-10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h6" fontSize="1.8rem">
          {" "}
          {name}
        </Typography>
        <Typography variant="subtitle2" fontSize="17px" lineHeight="28px">
          {" "}
          Chef of Head
        </Typography>
      </div>
    </Box>
  );
};

const ChefSection = () => {
  const arr = [
    {
      name: "Mr. Willium Jhon",
      img: "https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen1.png",
    },
    {
      name: "Mile Woatson",
      img: "https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen2.png",
    },
    {
      name: "Mr. Robert Jhon",
      img: "https://restho-nextjs.vercel.app/assets/images/bg/chef-kitchen3.png",
    },
  ];

  return (
    <Box bgcolor="white">
      <Box
        py={{ xs: "80px", md: "120px" }}
        width={{ xs: "93%", md: "85%" }}
        margin="0 auto"
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
            Our Experties
          </Typography>
          <img
            alt="restho"
            src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
          />
        </Stack>
        <Typography
          variant="h5"
          fontSize={{ xs: "3rem", md: "3.5rem" }}
          lineHeight={1.1}
          mt={1}
          textAlign="center"
        >
          Restho's Best Chef
        </Typography>

        <Grid container spacing={5} mt={2}>
          {arr.map((i) => (
            <Grid item sm={4}>
              <Card {...i} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ChefSection;

"use client";

import { Box, Stack, Typography, Grid } from "@mui/material";


const Card = () => {
  return (
    <Box>
      <img   style={{
        width: "100%"
      }} src="https://restho-nextjs.vercel.app/assets/images/bg/h2-regular-items12.png" />
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
          Soup with Egg
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
  const arr = [1, 2, 3];
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

        <Grid container spacing={5} mt={2}>
          {arr.map((i) => (
            <Grid item sm={4}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ItemSection;

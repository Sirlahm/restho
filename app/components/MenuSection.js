"use client";
import { Box, Stack, Typography, Button, Grid } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Card = () => {
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
          src="https://restho-nextjs.vercel.app/assets/images/bg/h2-food-item-3.png"
        />
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: 0,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              paddingX: "20px",
              paddingY: "10px",
              borderRadius: "10px 0 0 10px",
              bgcolor: "white",
            }}
          >
            Launch
          </Typography>
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-10px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "1.375rem",
              fontWeight: 600,
              color: "#bf9444",
              fontfamily: "16px",
              padding: "8px 35px",
              background: "white",
              border: "1px solid #eee",
              borderRadius: "50px",
            }}
          >
            $45
          </span>
        </div>
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
          Golden Coffee.
        </Typography>
        <Typography variant="subtitle2" fontSize="17px" lineHeight="28px">
          {" "}
          It is a long established fact that a reader will be distracted.
        </Typography>
      </div>
    </Box>
  );
};

const MenuSection = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <Box
      py={{ xs: "80px", md: "120px" }}
      bgcolor="white"
      width={{ xs: "93%", md: "85%" }}
      margin="0 auto"
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        spacing={{ xs: 2, md: 0 }}
        alignItems="start"
      >
        <Stack spacing={1}>
          <Stack direction="row" spacing={2} alignItems="center">
            <img
              alt="restho"
              src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
            />
            <Typography variant="h6" color="primary.main">
              Menu List
            </Typography>
            <img
              alt="restho"
              src="https://restho-nextjs.vercel.app/assets/images/icon/sub-title-vec.svg"
            />
          </Stack>
          <Typography
            variant="h5"
            fontSize={{ xs: "2.5rem", sm: "3rem", md: "3.4rem" }}
            lineHeight={1.1}
            mt={1}
          >
            Find Your Food Item
          </Typography>
        </Stack>
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
            "&:hover": {
              bgcolor: "#09161d",
            },
          }}
        >
          <ChevronRightIcon />
          <Typography variant="subtitle1" fontSize="17px">
            View More
          </Typography>
        </Button>
      </Stack>

      <Grid container spacing={5} mt={2}>
        {arr.map((i) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MenuSection;

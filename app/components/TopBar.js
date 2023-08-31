"use client";
import {
  Typography,
  Box,
  Stack,
  Button,
  Paper,
  useMediaQuery,
  IconButton,
  Drawer,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import CallIcon from "@mui/icons-material/Call";

const TopBar = () => {
  const isNonMobile = useMediaQuery("(min-width:1230px)");
  const isMobile = useMediaQuery("(min-width:968px)");
  const [drawer, setDrawer] = useState(false);
  const openDrawer = () => {
    setDrawer(true);
  };

  const closeDrawer = () => {
    setDrawer(false);
  };

  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          paddingY: "16px",
          paddingX: isMobile ? "35px" : "20px",
          borderRadius: "48px",
          boxShadow: "3px 3px 30px rgba(32,35,56,.06)",
        }}
      >
        <div>
          <img
            alt="restho"
            src="https://restho-nextjs.vercel.app/assets/images/header2-logo.svg"
          />
        </div>

        <Stack
          direction="row"
          spacing={4.5}
          display={{ xs: "none", lg: "flex" }}
        >
          <Stack direction="row">
            <Typography
              variant="subtitle1"
              fontSize="17px"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Home
            </Typography>
            <ExpandMoreIcon />
          </Stack>
          <Typography
            variant="subtitle1"
            fontSize="17px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            About
          </Typography>
          <Stack direction="row">
            <Typography
              variant="subtitle1"
              fontSize="17px"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Menu
            </Typography>
            <ExpandMoreIcon />
          </Stack>
          <Stack direction="row">
            <Typography
              variant="subtitle1"
              fontSize="17px"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Pages
            </Typography>
            <ExpandMoreIcon />
          </Stack>
          <Stack direction="row">
            <Typography
              variant="subtitle1"
              fontSize="17px"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Blog
            </Typography>
            <ExpandMoreIcon />
          </Stack>
          <Typography
            variant="subtitle1"
            fontSize="17px"
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "primary.main",
              },
            }}
          >
            Contact
          </Typography>
        </Stack>

        <Button
          sx={{
            textTransform: "none",
            bgcolor: "primary.main",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "40px",
            paddingX: "35px",
            paddingY: "15px",
            display: isNonMobile ? "inline-block" : "none",
            "&:hover": {
              bgcolor: "#09161d",
            },
          }}
        >
          Find Reservation
        </Button>
        <IconButton
          onClick={openDrawer}
          sx={{
            display: isNonMobile ? "none" : "inline-flex",
          }}
        >
          <MenuIcon sx={{ fontSize: "40px" }} />
        </IconButton>
      </Paper>

      <Drawer
        open={drawer}
        onClose={closeDrawer}
        anchor="left"
        bgcolor="#09161d"
        sx={{
          zIndex: "1200",
          "& .MuiPaper-root": {
            backgroundColor: "#09161d",
          },
        }}
      >
        <Box
          sx={{
            p: 3,
            width: "320px",
            height: "100vh",
            color: "#ffffffcc",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <div>
              <img
                alt="restho"
                src="https://restho-nextjs.vercel.app/assets/images/header1-logo.svg"
              />
            </div>

            <IconButton>
              <CloseIcon
                sx={{
                  color: "white",
                  fontSize: "30px",
                }}
              />
            </IconButton>
          </Stack>

          <Stack color="white" spacing={3.5} mt={5}>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontSize="17px"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Home
              </Typography>
              <AddIcon />
            </Stack>
            <Typography
              variant="subtitle1"
              fontSize="17px"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              About
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontSize="17px"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Menu
              </Typography>
              <AddIcon />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontSize="17px"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Pages
              </Typography>
              <AddIcon />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography
                variant="subtitle1"
                fontSize="17px"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                Blog
              </Typography>
              <AddIcon />
            </Stack>
            <Typography
              variant="subtitle1"
              fontSize="17px"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              Contact
            </Typography>
          </Stack>

          <Stack mt={7} direction="row" spacing={2} alignItems="center">
            <CallIcon
              sx={{
                color: "primary.main",
                fontSize: "40px",
              }}
            />

            <Stack >
              <Typography color="primary.main"  variant="h6">
                Call Now
              </Typography>
              <Typography color="white" variant="h6">
                +994-778098467
              </Typography>
            </Stack>
          </Stack>
          <Button
          sx={{
            textTransform: "none",
            bgcolor: "primary.main",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            borderRadius: "40px",
            paddingX: "35px",
            paddingY: "13px",
            mt: 3,
            "&:hover": {
              bgcolor: "#09161d",
            },
          }}
        >
          Find Reservation
        </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default TopBar;

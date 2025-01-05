import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  Divider,
  Tooltip,
  ClickAwayListener,
  Menu,
  MenuItem,
} from "@mui/material";
import { Container } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router";
import AddReport from "../../components/addReport/AddReport";

const Layout = () => {
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const [anchorElAddReport, setAnchorElAddReport] = React.useState(null);
  const openAddReport = Boolean(anchorElAddReport);
  const openMenu = Boolean(anchorElMenu);
  const [addReport, setAddReport] = useState(false);

  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleClickAddReport = (event) => {
    setAnchorElAddReport(event.currentTarget);
  };
  const handleCloseAddReport = () => {
    setAnchorElAddReport(null);
  };

  return (
    <>
      {/* Header Section */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          height: "130px",
          padding: "18px 0",
          position: "sticky",
          zIndex: "9999",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <img src="public/images/brand.png" alt="" />
            <Tooltip>
              <button className="home" onClick={handleClickMenu}>
                Home
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9401 7.2124L10.0501 12.1024C9.47256 12.6799 8.52756 12.6799 7.95006 12.1024L3.06006 7.2124"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </Tooltip>
            <Menu
              anchorEl={anchorElMenu}
              id="account-menu"
              open={openMenu}
              onClose={handleCloseMenu}
              onClick={handleCloseMenu}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseMenu}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseMenu}>Add another account</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Settings</MenuItem>
              <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <button className="icon">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.625 16.25C12.56 16.25 15.75 13.06 15.75 9.125C15.75 5.18997 12.56 2 8.625 2C4.68997 2 1.5 5.18997 1.5 9.125C1.5 13.06 4.68997 16.25 8.625 16.25Z"
                  fill="white"
                />
                <path
                  d="M15.9749 16.9999C15.8399 16.9999 15.7049 16.9474 15.6074 16.8499L14.2124 15.4549C14.0099 15.2524 14.0099 14.9224 14.2124 14.7124C14.4149 14.5099 14.7449 14.5099 14.9549 14.7124L16.3499 16.1074C16.5524 16.3099 16.5524 16.6399 16.3499 16.8499C16.2449 16.9474 16.1099 16.9999 15.9749 16.9999Z"
                  fill="white"
                />
              </svg>
            </button>
            <button className="icon">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z"
                  fill="white"
                />
                <path
                  d="M11.7283 6.77131L14.0021 4.49756M11.7283 12.2283L14.0021 14.5021M6.27131 12.2283L3.99756 14.5021M6.27131 6.77131L3.99756 4.49756"
                  stroke="#050E28"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 13.25C11.0711 13.25 12.75 11.5711 12.75 9.5C12.75 7.42893 11.0711 5.75 9 5.75C6.92893 5.75 5.25 7.42893 5.25 9.5C5.25 11.5711 6.92893 13.25 9 13.25Z"
                  stroke="#050E28"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button className="icon">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.505 11.3675L13.755 10.1225C13.5975 9.845 13.455 9.32 13.455 9.0125V7.115C13.455 5.3525 12.42 3.83 10.9275 3.1175C10.5375 2.4275 9.81746 2 8.99246 2C8.17496 2 7.43996 2.4425 7.04996 3.14C5.58746 3.8675 4.57496 5.375 4.57496 7.115V9.0125C4.57496 9.32 4.43246 9.845 4.27496 10.115L3.51746 11.3675C3.21746 11.87 3.14996 12.425 3.33746 12.935C3.51746 13.4375 3.94496 13.8275 4.49996 14.015C5.95496 14.51 7.48496 14.75 9.01496 14.75C10.545 14.75 12.075 14.51 13.53 14.0225C14.055 13.85 14.46 13.4525 14.655 12.935C14.85 12.4175 14.7975 11.8475 14.505 11.3675Z"
                  fill="white"
                />
                <path
                  d="M11.1223 15.5075C10.8073 16.3775 9.97477 17 8.99977 17C8.40727 17 7.82227 16.76 7.40977 16.3325C7.16977 16.1075 6.98977 15.8075 6.88477 15.5C6.98227 15.515 7.07977 15.5225 7.18477 15.5375C7.35727 15.56 7.53727 15.5825 7.71727 15.5975C8.14477 15.635 8.57977 15.6575 9.01477 15.6575C9.44227 15.6575 9.86977 15.635 10.2898 15.5975C10.4473 15.5825 10.6048 15.575 10.7548 15.5525C10.8748 15.5375 10.9948 15.5225 11.1223 15.5075Z"
                  fill="white"
                />
              </svg>
            </button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "#000",
                padding: "6px 10px",
                borderRadius: "20px",
              }}
            >
              <Avatar>
                <svg
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width="26" height="26" rx="13" fill="#EFF3FF" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 13.5C14.6575 13.5 16 12.1575 16 10.5C16 8.8425 14.6575 7.5 13 7.5C11.3425 7.5 10 8.8425 10 10.5C10 12.1575 11.3425 13.5 13 13.5ZM13 15C10.9975 15 7 16.005 7 18V19.5H19V18C19 16.005 15.0025 15 13 15Z"
                    fill="#050E28"
                  />
                </svg>
              </Avatar>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0px",
                  color: "#fff",
                }}
              >
                <Typography variant="small" color="text.contrastText">
                  Esther Howard
                </Typography>
                <Typography variant="xsmall" color="text.fade">
                  Employee
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#ffffff",
              position: "relative",
              width: "100%",
              zIndex: "1",
              top: "20px",
              boxShadow:
                "0px 2px 3px 0px rgba(0, 34, 66, 0.05), 0px 0px 1px 0px rgba(0, 0, 0, 0.10)",
              borderRadius: "4px",
            }}
          >
            <Box sx={{ padding: "16px" }}>
              <Typography variant="h1" sx={{ fontWeight: "bold" }}>
                Brand
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} justifyContent="center">
              <Tooltip>
                <Box
                  textAlign="center"
                  sx={{
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    "&:hover": {
                      cursor: "pointer",
                      // backgroundColor: "surface.main",
                    },
                  }}
                  onClick={handleClickAddReport}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    •
                  </Typography>
                  <Typography variant="medium">New</Typography>
                </Box>
              </Tooltip>
              <Menu
                anchorEl={anchorElAddReport}
                id="add-report"
                open={openAddReport}
                onClose={handleCloseAddReport}
                onClick={handleCloseAddReport}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseAddReport();
                    setAddReport(true);
                  }}
                >
                  <span style={{ padding: "9px 5px", textAlign: "left" }}>
                    Start a Report
                  </span>
                </MenuItem>
                <MenuItem onClick={handleCloseAddReport}>
                  <span style={{ padding: "9px 5px", textAlign: "left" }}>
                    New Cash Advance
                  </span>
                </MenuItem>
                <MenuItem onClick={handleCloseAddReport}>
                  <span style={{ padding: "9px 5px", textAlign: "left" }}>
                    Upload Receipts
                  </span>
                </MenuItem>
              </Menu>

              <Divider
                orientation="vertical"
                sx={{
                  height: "87px",
                }}
              ></Divider>

              <Box
                textAlign="center"
                sx={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  23
                </Typography>
                <Typography variant="medium">Available Expenses</Typography>
              </Box>

              <Divider
                orientation="vertical"
                sx={{
                  height: "87px",
                }}
              ></Divider>

              <Box
                textAlign="center"
                sx={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  10
                </Typography>
                <Typography variant="medium">Open Reports</Typography>
              </Box>

              <Divider
                orientation="vertical"
                sx={{
                  height: "87px",
                }}
              ></Divider>

              <Box
                textAlign="center"
                sx={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  0
                </Typography>
                <Typography variant="medium">Admin Approval</Typography>
              </Box>

              <Divider
                orientation="vertical"
                sx={{
                  height: "87px",
                }}
              ></Divider>

              <Box
                textAlign="center"
                sx={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  0
                </Typography>
                <Typography variant="medium">Transactions</Typography>
              </Box>

              <Divider
                orientation="vertical"
                sx={{
                  height: "87px",
                }}
              ></Divider>

              <Box
                textAlign="center"
                sx={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  0
                </Typography>
                <Typography variant="medium">Cash Advance</Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Layout Section */}
      <Container
        maxWidth="xl"
        sx={{
          height: "calc(100vh - 195px)",
          padding: "26px 0px",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            width: "8px", // Scrollbar width
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888", // Scrollbar thumb color
            borderRadius: "4px", // Rounded corners for the thumb
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555", // Color on hover
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f1f1f1", // Track background color
          },
        }}
      >
        <Box sx={{ padding: "32px 0px", marginTop: "25px" }}>
          <Outlet />
        </Box>
      </Container>

      {/* Footer Section */}
      <Footer />
      <AddReport addReport={addReport} setAddReport={setAddReport} />
    </>
  );
};

export default Layout;

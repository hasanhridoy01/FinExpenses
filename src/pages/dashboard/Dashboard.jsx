import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Tabs,
  Tab,
  Badge,
} from "@mui/material";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
};

const cellStyle = {
  padding: "12px 16px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const lastCellStyle = {
  borderBottom: "none",
};

const rows = [
  "Trip to Seattle",
  "Trip to Chittagong",
  "Factory Visit",
  "Foreign Client Visit",
  "Annual Event 2024",
  "Product Transportation",
  "Factory Visit",
  "Trip to Seattle",
  "Factory Visit",
  "Trip to Seattle",
];

const transactionTableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
};

const transactionRowStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #ddd",
};

const transactionLeftCellStyle = {
  textAlign: "left",
  fontWeight: "normal",
};

const transactionBoldTextStyle = {
  fontWeight: "bold",
};

const transactionRightCellStyle = {
  textAlign: "right",
};

const transactionRows = Array(10).fill({
  date: "12/29",
  description: "UbarX",
  amount: "$12.50",
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2.5 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        {/* Content Section */}
        <Container maxWidth="xl">
          <Grid container gap={4}>
            <Grid
              item
              size={2.5}
              sx={{
                border: "1px solid #e0e0e0",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                borderRadius: "4px",
                height: "457px",
                marginTop: "48px",
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #e0e0e0",
                  padding: "0px",
                  width: "100%",
                  height: "52px",
                  paddingRight: "10px",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box
                    sx={{
                      height: "52px",
                      width: "48px",
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "4px 0px 0px 0px",
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      0
                    </Typography>
                    {/* Title */}
                  </Box>
                  <Typography variant="small">Required Approval</Typography>
                </Box>
                <ArrowForwardIcon sx={{ color: "#666" }} />
              </Box>

              {/* Content */}
              <Box sx={{ padding: "20px 10px" }}>
                <Typography variant="medium">Great!</Typography>
                <Typography variant="medium">
                  You currently have no approvals.
                </Typography>
              </Box>

              {/* Icon at the bottom */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                <svg
                  width="25"
                  height="45"
                  viewBox="0 0 25 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6834 16.1603L13.3934 12.7703C13.0662 12.5936 12.7002 12.501 12.3284 12.501C11.9565 12.501 11.5905 12.5936 11.2634 12.7703L4.97339 16.1603C4.7492 16.2905 4.56312 16.4772 4.43378 16.7018C4.30443 16.9265 4.23633 17.1811 4.23633 17.4403C4.23633 17.6996 4.30443 17.9542 4.43378 18.1789C4.56312 18.4035 4.7492 18.5902 4.97339 18.7203L11.2634 22.1103C11.5887 22.2871 11.9531 22.3798 12.3234 22.3798C12.6936 22.3798 13.058 22.2871 13.3834 22.1103L19.6734 18.7203C19.9009 18.5938 20.0899 18.408 20.2202 18.1826C20.3505 17.9572 20.4172 17.7007 20.4134 17.4403C20.4227 17.1802 20.3594 16.9226 20.2304 16.6965C20.1015 16.4704 19.912 16.2847 19.6834 16.1603Z"
                    fill="#D2D2D2"
                  />
                  <path
                    d="M10.2335 23.2902L4.3835 20.3602C4.16617 20.2556 3.92593 20.2077 3.68511 20.2209C3.44428 20.2341 3.21071 20.308 3.00612 20.4358C2.80154 20.5635 2.6326 20.7409 2.515 20.9515C2.3974 21.1621 2.33496 21.399 2.33352 21.6402V27.1702C2.33166 27.6376 2.46092 28.0963 2.70662 28.494C2.95233 28.8917 3.30464 29.2126 3.72353 29.4202L9.57351 32.3402C9.7723 32.4392 9.99143 32.4905 10.2135 32.4902C10.4797 32.4918 10.7404 32.4153 10.9635 32.2702C11.1731 32.1434 11.346 31.9642 11.4652 31.7503C11.5844 31.5363 11.6459 31.2951 11.6435 31.0502V25.5002C11.6407 25.0363 11.5069 24.5827 11.2574 24.1917C11.0079 23.8007 10.653 23.4881 10.2335 23.2902Z"
                    fill="#D2D2D2"
                  />
                  <path
                    d="M22.3335 21.65V26.24C22.2924 26.179 22.2455 26.122 22.1935 26.07C21.7793 25.5821 21.2647 25.1892 20.6848 24.9183C20.105 24.6473 19.4735 24.5047 18.8335 24.5C18.0359 24.4979 17.2522 24.7082 16.5629 25.1094C15.8737 25.5106 15.3037 26.0882 14.9116 26.7827C14.5195 27.4772 14.3195 28.2637 14.3322 29.0611C14.3448 29.8585 14.5696 30.6382 14.9835 31.32C15.1552 31.6063 15.36 31.8714 15.5935 32.11L15.1235 32.35C14.9039 32.4589 14.6602 32.51 14.4154 32.4984C14.1706 32.4868 13.9328 32.413 13.7245 32.2838C13.5162 32.1546 13.3444 31.9744 13.2252 31.7603C13.106 31.5461 13.0435 31.3051 13.0435 31.06V25.5C13.0416 25.0325 13.1709 24.5738 13.4166 24.1761C13.6623 23.7784 14.0146 23.4575 14.4335 23.25L20.3335 20.37C20.5515 20.2561 20.7957 20.2017 21.0415 20.2122C21.2873 20.2228 21.526 20.2979 21.7335 20.43C21.9262 20.5682 22.0819 20.7519 22.1865 20.9647C22.2912 21.1776 22.3417 21.4129 22.3335 21.65Z"
                    fill="#D2D2D2"
                  />
                  <path
                    d="M22.3337 26.1698C21.6092 25.303 20.5851 24.7404 19.4649 24.5937C18.3447 24.4471 17.2104 24.7272 16.2872 25.3783C15.364 26.0295 14.7195 27.0041 14.4817 28.1085C14.2439 29.213 14.4302 30.3664 15.0037 31.3398C15.2654 31.7828 15.6041 32.1756 16.0037 32.4998C16.8219 33.1768 17.8553 33.5388 18.9172 33.5205C19.979 33.5021 20.9993 33.1046 21.7937 32.3998C22.1452 32.0965 22.4458 31.7386 22.6837 31.3398C23.1072 30.6399 23.3319 29.8379 23.3337 29.0198C23.3428 27.9823 22.9891 26.9742 22.3337 26.1698ZM21.0937 28.4998L18.6936 30.7198C18.5544 30.8476 18.3726 30.9189 18.1837 30.9198C18.0851 30.9203 17.9875 30.9011 17.8965 30.8633C17.8055 30.8255 17.7229 30.7699 17.6537 30.6998L16.5437 29.5898C16.3991 29.4492 16.3163 29.257 16.3135 29.0554C16.3107 28.8538 16.3881 28.6594 16.5287 28.5148C16.6692 28.3703 16.8615 28.2875 17.0631 28.2847C17.2647 28.2819 17.4591 28.3592 17.6037 28.4998L18.2037 29.0998L20.0737 27.3698C20.2155 27.2318 20.4057 27.1545 20.6037 27.1545C20.8016 27.1545 20.9918 27.2318 21.1337 27.3698C21.2134 27.4421 21.2764 27.531 21.3183 27.6302C21.3601 27.7294 21.3798 27.8365 21.376 27.9441C21.3722 28.0517 21.345 28.1572 21.2962 28.2531C21.2474 28.3491 21.1783 28.4333 21.0937 28.4998Z"
                    fill="#222222"
                  />
                </svg>
              </Box>
            </Grid>
            <Grid
              item
              size={2.5}
              sx={{
                border: "1px solid #e0e0e0",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                borderRadius: "4px",
                height: "457px",
                marginTop: "48px",
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #e0e0e0",
                  padding: "0px",
                  width: "100%",
                  height: "52px",
                  paddingRight: "10px",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box
                    sx={{
                      height: "52px",
                      width: "48px",
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "4px 0px 0px 0px",
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      23
                    </Typography>
                    {/* Title */}
                  </Box>
                  <Typography variant="small" color="text.main">
                    Available Expenses
                  </Typography>
                </Box>
                <ArrowForwardIcon sx={{ color: "#666" }} />
              </Box>

              {/* Content */}
              <Box>
                <table style={transactionTableStyle}>
                  <tbody>
                    {transactionRows.map((row, index) => (
                      <tr key={index}>
                        <td
                          style={{
                            ...transactionRowStyle,
                            ...transactionLeftCellStyle,
                            ...(index === transactionRows.length - 1
                              ? { borderBottom: "none" }
                              : {}),
                          }}
                        >
                          {row.date}{" "}
                          <span style={transactionBoldTextStyle}>
                            {row.description}
                          </span>
                        </td>
                        <td
                          style={{
                            ...transactionRowStyle,
                            ...transactionRightCellStyle,
                            ...(index === transactionRows.length - 1
                              ? { borderBottom: "none" }
                              : {}),
                          }}
                        >
                          {row.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            </Grid>
            <Grid
              item
              size={2.5}
              sx={{
                border: "1px solid #e0e0e0",
                backgroundColor: "primary.contrastText",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                borderRadius: "4px",
                height: "457px",
                marginTop: "48px",
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #e0e0e0",
                  padding: "0px",
                  width: "100%",
                  height: "52px",
                  paddingRight: "10px",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Box
                    sx={{
                      height: "52px",
                      width: "48px",
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "4px 0px 0px 0px",
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      10
                    </Typography>
                    {/* Title */}
                  </Box>
                  <Typography variant="small">Open Report</Typography>
                </Box>
                <ArrowForwardIcon sx={{ color: "#666" }} />
              </Box>

              {/* Content */}
              <Box>
                <table style={tableStyle}>
                  <tbody>
                    {rows.map((row, index) => (
                      <tr key={index}>
                        <td
                          style={
                            index === rows.length - 1
                              ? { ...cellStyle, ...lastCellStyle }
                              : cellStyle
                          }
                        >
                          {row}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            </Grid>

            <Grid
              item
              size={3.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "4px",
                height: "540px",
              }}
            >
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  sx={{
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                    "& .MuiTab-root": {
                      textTransform: "none",
                      fontWeight: "500",
                      fontSize: "16px",
                      borderRadius: "8px 8px 0px 0px",
                      color: "#666",
                      transition: "all 0.3s ease",
                      borderBottom: "none",
                      fontFamily: '"Poppins", sans-serif',
                    },
                    "& .Mui-selected": {
                      backgroundColor: "primary.main",
                      color: "#a1a1a1",
                    },
                  }}
                >
                  <Tab
                    label={
                      <Box display="flex" alignItems="start" gap="5px">
                        ALERTS
                        <Badge
                          badgeContent={9}
                          color="error"
                          sx={{
                            marginLeft: "8px",
                            "& .MuiBadge-badge": {
                              fontSize: "12px",
                              height: "18px",
                              minWidth: "18px",
                              borderRadius: "9px",
                            },
                          }}
                        />
                      </Box>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    label={
                      <Box display="flex" alignItems="start" gap="5px">
                        Company Notes
                        <Badge
                          badgeContent={3}
                          color="error"
                          sx={{
                            marginLeft: "8px",
                            "& .MuiBadge-badge": {
                              fontSize: "12px",
                              height: "18px",
                              minWidth: "18px",
                              borderRadius: "9px",
                            },
                          }}
                        />
                      </Box>
                    }
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>

              <Box
                item
                size={4}
                sx={{
                  border: "1px solid #e0e0e0",
                  backgroundColor: "#fff",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "4px",
                  height: "457px",
                  width: "100%",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  padding: "10px 0px",
                }}
              >
                <Box>
                  <CustomTabPanel value={value} index={0}>
                    <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                      <button style={{ border: "none", background: "none" }}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#F0F0F0" />
                          <path
                            d="M12.9998 18.8332C16.2082 18.8332 18.8332 16.2082 18.8332 12.9998C18.8332 9.7915 16.2082 7.1665 12.9998 7.1665C9.7915 7.1665 7.1665 9.7915 7.1665 12.9998C7.1665 16.2082 9.7915 18.8332 12.9998 18.8332Z"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13 10.6665V13.5832"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9966 15.3335H13.0018"
                            stroke="#606060"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <Box>
                        <Typography
                          variant="tabsFont"
                          style={{
                            textAlign: "justify",
                          }}
                        >
                          As an employee of Pacific Fishery Management Council,
                          you are eligible for a free TripIt Pro subscription.
                          <a
                            href="#"
                            style={{
                              color: "#050E28",
                              marginLeft: "5px",
                              textDecoration: "underline",
                            }}
                          >
                            Learn More and Activate
                          </a>
                        </Typography>
                        <p
                          style={{
                            fontSize: "12px",
                            fontFamily: '"Poppins", serif',
                            marginTop: "8px",
                          }}
                        >
                          10:30AM
                        </p>
                      </Box>
                    </Box>
                    <p
                      style={{
                        fontSize: "12px",
                        fontFamily: '"Poppins", serif',
                        marginTop: "10px",
                      }}
                    >
                      Last Week
                    </p>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: 2,
                        marginTop: "10px",
                      }}
                    >
                      <button style={{ border: "none", background: "none" }}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#F0F0F0" />
                          <path
                            d="M12.9998 18.8332C16.2082 18.8332 18.8332 16.2082 18.8332 12.9998C18.8332 9.7915 16.2082 7.1665 12.9998 7.1665C9.7915 7.1665 7.1665 9.7915 7.1665 12.9998C7.1665 16.2082 9.7915 18.8332 12.9998 18.8332Z"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13 10.6665V13.5832"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9966 15.3335H13.0018"
                            stroke="#606060"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <Box>
                        <Typography
                          variant="tabsFont"
                          style={{
                            textAlign: "justify",
                          }}
                        >
                          As an employee of Pacific Fishery Management Council,
                          you are eligible for a free TripIt Pro subscription.
                          <a
                            href="#"
                            style={{
                              color: "#050E28",
                              marginLeft: "5px",
                              textDecoration: "underline",
                            }}
                          >
                            Learn More and Activate
                          </a>
                        </Typography>
                        <p
                          style={{
                            fontSize: "12px",
                            fontFamily: '"Poppins", serif',
                            marginTop: "8px",
                          }}
                        >
                          24/12/2025 10:30AM
                        </p>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: 2,
                        marginTop: "10px",
                      }}
                    >
                      <button style={{ border: "none", background: "none" }}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#F0F0F0" />
                          <path
                            d="M12.9998 18.8332C16.2082 18.8332 18.8332 16.2082 18.8332 12.9998C18.8332 9.7915 16.2082 7.1665 12.9998 7.1665C9.7915 7.1665 7.1665 9.7915 7.1665 12.9998C7.1665 16.2082 9.7915 18.8332 12.9998 18.8332Z"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13 10.6665V13.5832"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9966 15.3335H13.0018"
                            stroke="#606060"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <Box>
                        <Typography
                          variant="tabsFont"
                          style={{
                            textAlign: "justify",
                          }}
                        >
                          As an employee of Pacific Fishery Management Council,
                          you are eligible for a free TripIt Pro subscription.
                          <a
                            href="#"
                            style={{
                              color: "#050E28",
                              marginLeft: "5px",
                              textDecoration: "underline",
                            }}
                          >
                            Learn More and Activate
                          </a>
                        </Typography>
                        <p
                          style={{
                            fontSize: "12px",
                            fontFamily: '"Poppins", serif',
                            marginTop: "8px",
                          }}
                        >
                          24/12/2025 10:30AM
                        </p>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: 2,
                        marginTop: "10px",
                      }}
                    >
                      <button style={{ border: "none", background: "none" }}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#F0F0F0" />
                          <path
                            d="M12.9998 18.8332C16.2082 18.8332 18.8332 16.2082 18.8332 12.9998C18.8332 9.7915 16.2082 7.1665 12.9998 7.1665C9.7915 7.1665 7.1665 9.7915 7.1665 12.9998C7.1665 16.2082 9.7915 18.8332 12.9998 18.8332Z"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13 10.6665V13.5832"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9966 15.3335H13.0018"
                            stroke="#606060"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <Box>
                        <Typography
                          variant="tabsFont"
                          style={{
                            textAlign: "justify",
                          }}
                        >
                          As an employee of Pacific Fishery Management Council,
                          you are eligible for a free TripIt Pro subscription.
                          <a
                            href="#"
                            style={{
                              color: "#050E28",
                              marginLeft: "5px",
                              textDecoration: "underline",
                            }}
                          >
                            Learn More and Activate
                          </a>
                        </Typography>
                        <p
                          style={{
                            fontSize: "12px",
                            fontFamily: '"Poppins", serif',
                            marginTop: "8px",
                          }}
                        >
                          24/12/2025 10:30AM
                        </p>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: 2,
                        marginTop: "10px",
                      }}
                    >
                      <button style={{ border: "none", background: "none" }}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#F0F0F0" />
                          <path
                            d="M12.9998 18.8332C16.2082 18.8332 18.8332 16.2082 18.8332 12.9998C18.8332 9.7915 16.2082 7.1665 12.9998 7.1665C9.7915 7.1665 7.1665 9.7915 7.1665 12.9998C7.1665 16.2082 9.7915 18.8332 12.9998 18.8332Z"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13 10.6665V13.5832"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9966 15.3335H13.0018"
                            stroke="#606060"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <Box>
                        <Typography
                          variant="tabsFont"
                          style={{
                            textAlign: "justify",
                          }}
                        >
                          As an employee of Pacific Fishery Management Council,
                          you are eligible for a free TripIt Pro subscription.
                          <a
                            href="#"
                            style={{
                              color: "#050E28",
                              marginLeft: "5px",
                              textDecoration: "underline",
                            }}
                          >
                            Learn More and Activate
                          </a>
                        </Typography>
                        <p
                          style={{
                            fontSize: "12px",
                            fontFamily: '"Poppins", serif',
                            marginTop: "8px",
                          }}
                        >
                          24/12/2025 10:30AM
                        </p>
                      </Box>
                    </Box>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <Box sx={{ display: "flex", alignItems: "start", gap: 2 }}>
                      <button style={{ border: "none", background: "none" }}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#F0F0F0" />
                          <path
                            d="M12.9998 18.8332C16.2082 18.8332 18.8332 16.2082 18.8332 12.9998C18.8332 9.7915 16.2082 7.1665 12.9998 7.1665C9.7915 7.1665 7.1665 9.7915 7.1665 12.9998C7.1665 16.2082 9.7915 18.8332 12.9998 18.8332Z"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13 10.6665V13.5832"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9966 15.3335H13.0018"
                            stroke="#606060"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <Box>
                        <Typography
                          variant="tabsFont"
                          style={{
                            textAlign: "justify",
                          }}
                        >
                          As an employee of Pacific Fishery Management Council,
                          you are eligible for a free TripIt Pro subscription.
                          <a
                            href="#"
                            style={{
                              color: "#050E28",
                              marginLeft: "5px",
                              textDecoration: "underline",
                            }}
                          >
                            Learn More and Activate
                          </a>
                        </Typography>
                        <p
                          style={{
                            fontSize: "12px",
                            fontFamily: '"Poppins", serif',
                            marginTop: "8px",
                          }}
                        >
                          10:30AM
                        </p>
                      </Box>
                    </Box>
                    <p
                      style={{
                        fontSize: "12px",
                        fontFamily: '"Poppins", serif',
                        marginTop: "10px",
                      }}
                    >
                      Last Week - 24/12/2025
                    </p>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: 2,
                        marginTop: "10px",
                      }}
                    >
                      <button style={{ border: "none", background: "none" }}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#F0F0F0" />
                          <path
                            d="M12.9998 18.8332C16.2082 18.8332 18.8332 16.2082 18.8332 12.9998C18.8332 9.7915 16.2082 7.1665 12.9998 7.1665C9.7915 7.1665 7.1665 9.7915 7.1665 12.9998C7.1665 16.2082 9.7915 18.8332 12.9998 18.8332Z"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13 10.6665V13.5832"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9966 15.3335H13.0018"
                            stroke="#606060"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <Box>
                        <Typography
                          variant="tabsFont"
                          style={{
                            textAlign: "justify",
                          }}
                        >
                          As an employee of Pacific Fishery Management Council,
                          you are eligible for a free TripIt Pro subscription.
                          <a
                            href="#"
                            style={{
                              color: "#050E28",
                              marginLeft: "5px",
                              textDecoration: "underline",
                            }}
                          >
                            Learn More and Activate
                          </a>
                        </Typography>
                        <p
                          style={{
                            fontSize: "12px",
                            fontFamily: '"Poppins", serif',
                            marginTop: "8px",
                          }}
                        >
                          24/12/2025 10:30AM
                        </p>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: 2,
                        marginTop: "10px",
                      }}
                    >
                      <button style={{ border: "none", background: "none" }}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#F0F0F0" />
                          <path
                            d="M12.9998 18.8332C16.2082 18.8332 18.8332 16.2082 18.8332 12.9998C18.8332 9.7915 16.2082 7.1665 12.9998 7.1665C9.7915 7.1665 7.1665 9.7915 7.1665 12.9998C7.1665 16.2082 9.7915 18.8332 12.9998 18.8332Z"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13 10.6665V13.5832"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9966 15.3335H13.0018"
                            stroke="#606060"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <Box>
                        <Typography
                          variant="tabsFont"
                          style={{
                            textAlign: "justify",
                          }}
                        >
                          As an employee of Pacific Fishery Management Council,
                          you are eligible for a free TripIt Pro subscription.
                          <a
                            href="#"
                            style={{
                              color: "#050E28",
                              marginLeft: "5px",
                              textDecoration: "underline",
                            }}
                          >
                            Learn More and Activate
                          </a>
                        </Typography>
                        <p
                          style={{
                            fontSize: "12px",
                            fontFamily: '"Poppins", serif',
                            marginTop: "8px",
                          }}
                        >
                          24/12/2025 10:30AM
                        </p>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: 2,
                        marginTop: "10px",
                      }}
                    >
                      <button style={{ border: "none", background: "none" }}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#F0F0F0" />
                          <path
                            d="M12.9998 18.8332C16.2082 18.8332 18.8332 16.2082 18.8332 12.9998C18.8332 9.7915 16.2082 7.1665 12.9998 7.1665C9.7915 7.1665 7.1665 9.7915 7.1665 12.9998C7.1665 16.2082 9.7915 18.8332 12.9998 18.8332Z"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13 10.6665V13.5832"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9966 15.3335H13.0018"
                            stroke="#606060"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <Box>
                        <Typography
                          variant="tabsFont"
                          style={{
                            textAlign: "justify",
                          }}
                        >
                          As an employee of Pacific Fishery Management Council,
                          you are eligible for a free TripIt Pro subscription.
                          <a
                            href="#"
                            style={{
                              color: "#050E28",
                              marginLeft: "5px",
                              textDecoration: "underline",
                            }}
                          >
                            Learn More and Activate
                          </a>
                        </Typography>
                        <p
                          style={{
                            fontSize: "12px",
                            fontFamily: '"Poppins", serif',
                            marginTop: "8px",
                          }}
                        >
                          24/12/2025 10:30AM
                        </p>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "start",
                        gap: 2,
                        marginTop: "10px",
                      }}
                    >
                      <button style={{ border: "none", background: "none" }}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="26" height="26" rx="13" fill="#F0F0F0" />
                          <path
                            d="M12.9998 18.8332C16.2082 18.8332 18.8332 16.2082 18.8332 12.9998C18.8332 9.7915 16.2082 7.1665 12.9998 7.1665C9.7915 7.1665 7.1665 9.7915 7.1665 12.9998C7.1665 16.2082 9.7915 18.8332 12.9998 18.8332Z"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13 10.6665V13.5832"
                            stroke="#606060"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.9966 15.3335H13.0018"
                            stroke="#606060"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <Box>
                        <Typography
                          variant="tabsFont"
                          style={{
                            textAlign: "justify",
                          }}
                        >
                          As an employee of Pacific Fishery Management Council,
                          you are eligible for a free TripIt Pro subscription.
                          <a
                            href="#"
                            style={{
                              color: "#050E28",
                              marginLeft: "5px",
                              textDecoration: "underline",
                            }}
                          >
                            Learn More and Activate
                          </a>
                        </Typography>
                        <p
                          style={{
                            fontSize: "12px",
                            fontFamily: '"Poppins", serif',
                            marginTop: "8px",
                          }}
                        >
                          24/12/2025 10:30AM
                        </p>
                      </Box>
                    </Box>
                  </CustomTabPanel>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;

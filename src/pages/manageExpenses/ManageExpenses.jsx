import React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router";
import AddExpenses from "../../components/addExpenses/AddExpenses";
import ExpensesList from "../../components/expensesList/ExpensesList";

const ManageExpenses = () => {
  return (
    <Box>
      <Stack spacing={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="titleText">Manage Expenses</Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.secondary">List of Invoice</Typography>
          </Breadcrumbs>
        </Box>
        <Typography variant="titleTextBig">
          Office Supplies - $298.00
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            gap: 1,
            alignItems: "center",
          }}
        >
          <button
            style={{
              padding: "4px 10px",
              borderRadius: "40px",
              border: "1px solid #FFE999",
              backgroundColor: "#FFF4CC",
            }}
          >
            <Typography variant="small">Not Submitted</Typography>
          </button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              gap: 1,
              alignItems: "center",
            }}
          >
            <Typography variant="medium">Report Number: </Typography>
            <button
              style={{
                padding: "4px 10px",
                borderRadius: "40px",
                border: "1px solid #CDD9FF",
                backgroundColor: "#EFF3FF",
              }}
            >
              <Typography variant="small">JG6W3A</Typography>
            </button>
          </Box>
        </Box>
      </Stack>

      <Box sx={{ mt: 2 }}>
        <ButtonGroup
          variant="contained"
          sx={{ backgroundColor: "primary.dark", boxShadow: "none" }}
          aria-label="Basic button group"
        >
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            Report Details{" "}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9401 6.71289L10.0501 11.6029C9.47256 12.1804 8.52756 12.1804 7.95006 11.6029L3.06006 6.71289"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            Print/Share{" "}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9401 6.71289L10.0501 11.6029C9.47256 12.1804 8.52756 12.1804 7.95006 11.6029L3.06006 6.71289"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            Travel Allowance{" "}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9401 6.71289L10.0501 11.6029C9.47256 12.1804 8.52756 12.1804 7.95006 11.6029L3.06006 6.71289"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            View Available Receipts{" "}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9401 6.71289L10.0501 11.6029C9.47256 12.1804 8.52756 12.1804 7.95006 11.6029L3.06006 6.71289"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </ButtonGroup>
      </Box>

      <Box sx={{ mt: 2 }}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              py: 2,
              px: 2,
            }}
          >
            <ButtonGroup
              variant="contained"
              sx={{
                backgroundColor: "primary.light",
                boxShadow: "none", // Removes shadow
                color: "#000", // Default text color
                borderColor: "#CDD9FF", // Border color for the ButtonGroup
                "& .MuiButton-root": {
                  color: "#000", // Text color for individual buttons
                  border: "1px solid #CDD9FF", // Border for individual buttons
                  backgroundColor: "primary.light", // Button background color
                  //   "&:hover": {
                  //     backgroundColor: "primary.main", // Hover effect for better interactivity
                  //     borderColor: "#CDD9FF", // Hover border color
                  //   },
                },
              }}
              aria-label="Basic button group"
            >
              {/* AddExpenses */}
              <AddExpenses />
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.94501 2.70041L3.78751 9.21791C3.55501 9.46541 3.33001 9.95291 3.28501 10.2904L3.00751 12.7204C2.91001 13.5979 3.54001 14.1979 4.41001 14.0479L6.82501 13.6354C7.16251 13.5754 7.63501 13.3279 7.86751 13.0729L14.025 6.55541C15.09 5.43041 15.57 4.14791 13.9125 2.58041C12.2625 1.02791 11.01 1.57541 9.94501 2.70041Z"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.91748 3.78711C9.23998 5.85711 10.92 7.43961 13.005 7.64961"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.25 16.5H15.75"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Edit
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1373 6.85547L13.6498 14.408C13.5673 15.5855 13.4998 16.5005 11.4073 16.5005H6.5923C4.4998 16.5005 4.4323 15.5855 4.3498 14.408L3.8623 6.85547"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.75 4.48535C13.2525 4.23785 10.74 4.11035 8.235 4.11035C6.75 4.11035 5.265 4.18535 3.78 4.33535L2.25 4.48535"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.375 3.7275L6.54 2.745C6.66 2.0325 6.75 1.5 8.0175 1.5H9.9825C11.25 1.5 11.3475 2.0625 11.46 2.7525L11.625 3.7275"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.74756 12.375H10.2451"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.125 9.375H10.875"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Delete{" "}
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9.675V12.825C12 15.45 10.95 16.5 8.325 16.5H5.175C2.55 16.5 1.5 15.45 1.5 12.825V9.675C1.5 7.05 2.55 6 5.175 6H8.325C10.95 6 12 7.05 12 9.675Z"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 5.175V8.325C16.5 10.95 15.45 12 12.825 12H12V9.675C12 7.05 10.95 6 8.325 6H6V5.175C6 2.55 7.05 1.5 9.675 1.5H12.825C15.45 1.5 16.5 2.55 16.5 5.175Z"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Copy{" "}
              </Button>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 3.8625V6.6375C16.5 8.325 15.825 9 14.1375 9H12.1125C10.425 9 9.75 8.325 9.75 6.6375V3.8625C9.75 2.175 10.425 1.5 12.1125 1.5H14.1375C15.825 1.5 16.5 2.175 16.5 3.8625Z"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.25 11.3625V14.1375C8.25 15.825 7.575 16.5 5.8875 16.5H3.8625C2.175 16.5 1.5 15.825 1.5 14.1375V11.3625C1.5 9.675 2.175 9 3.8625 9H5.8875C7.575 9 8.25 9.675 8.25 11.3625Z"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 11.25C16.5 14.1525 14.1525 16.5 11.25 16.5L12.0375 15.1875"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1.5 6.75C1.5 3.8475 3.8475 1.5 6.75 1.5L5.9625 2.8125"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Move to{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9396 6.71289L10.0496 11.6029C9.47207 12.1804 8.52707 12.1804 7.94957 11.6029L3.05957 6.71289"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </ButtonGroup>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.light",
                boxShadow: "none", // Removes shadow
                color: "#000", // Default text color
                border: "1px solid #CDD9FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99988 15.2025C11.6474 15.2025 14.1149 13.6425 15.8324 10.9425C16.5074 9.88504 16.5074 8.10754 15.8324 7.05004C14.1149 4.35004 11.6474 2.79004 8.99988 2.79004C6.35238 2.79004 3.88488 4.35004 2.16738 7.05004C1.49238 8.10754 1.49238 9.88504 2.16738 10.9425C3.88488 13.6425 6.35238 15.2025 8.99988 15.2025Z"
                  stroke="#222222"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6854 9.00043C11.6854 10.4854 10.4854 11.6854 9.00043 11.6854C7.51543 11.6854 6.31543 10.4854 6.31543 9.00043C6.31543 7.51543 7.51543 6.31543 9.00043 6.31543C10.4854 6.31543 11.6854 7.51543 11.6854 9.00043Z"
                  stroke="#222222"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Standard{" "}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9396 6.71289L10.0496 11.6029C9.47207 12.1804 8.52707 12.1804 7.94957 11.6029L3.05957 6.71289"
                  stroke="#222222"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </Box>
          {/* ExpensesList */}
          <ExpensesList />
        </Paper>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Button variant="outlined" color="error">
            Delete Report
          </Button>
          <Button variant="contained" color="primary">
            Submit Report
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ManageExpenses;

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CreateExpanses = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
            <Typography variant="medium">Date: </Typography>
            <button
              style={{
                padding: "4px 10px",
                borderRadius: "40px",
                border: "1px solid #CDD9FF",
                backgroundColor: "#EFF3FF",
              }}
            >
              <Typography variant="small">12 / 12 / 2024</Typography>
            </button>
            <button
              style={{
                padding: "4px 10px",
                borderRadius: "40px",
                border: "1px solid #CDD9FF",
                backgroundColor: "#EFF3FF",
              }}
            >
              <Typography variant="small">Reservation</Typography>
            </button>
          </Box>
        </Box>
      </Stack>

      <Box sx={{ mt: 2 }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
                transition: "all 0.3s ease",
                borderBottom: "none",
                fontFamily: '"Poppins", sans-serif',
              },
              "& .Mui-selected": {
                borderBottom: "2px solid #172B4D",
                backgroundColor: "#fff",
                color: "#172B4D",
              },
            }}
          >
            <Tab label="Details" {...a11yProps(0)} />
            <Tab label="Itemizations" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Paper sx={{ width: "100%", overflow: "hidden", p: 3 }}>
            <Typography
              variant="h6"
              color="primary"
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: "8px" }}
              >
                <rect width="24" height="24" rx="12" fill="#E3F2FD" />
                <path
                  d="M18 10V15C18 17 17 18 15 18H9C7 18 6 17 6 15V9C6 7 7 6 9 6H10.5C11.5 6 11.78 6.3 12.2 6.8L13.6 8.6C14 9.1 14.2 9.4 15 9.4H15C17 9.4 18 10 18 10Z"
                  stroke="#1565C0"
                  strokeWidth="1.5"
                />
              </svg>
              Allocate
            </Typography>
            <Grid container spacing={3}>
              {/* Left Section */}
              <Grid item xs={9}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Expense Type *
                    </Typography>
                    <TextField
                      fullWidth
                      label="Vendor Name"
                      select
                      variant="outlined"
                      required
                    >
                      <MenuItem value="Policy">Policy</MenuItem>
                      <MenuItem value="Vendor2">Vendor 2</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Transaction Date *
                    </Typography>
                    <TextField
                      fullWidth
                      label="Transaction Date"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Business Purpose
                    </Typography>
                    <TextField
                      fullWidth
                      label="Vendor Name"
                      select
                      variant="outlined"
                      required
                    >
                      <MenuItem value="aaaaaaa">aaaaaaa</MenuItem>
                      <MenuItem value="aaaaaaa2">aaaaaaa 2</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Vendor Name
                    </Typography>
                    <TextField
                      fullWidth
                      label="Amount"
                      type="text"
                      defaultValue="1000.00"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      City
                    </Typography>
                    <TextField
                      fullWidth
                      label="Vendor Name"
                      select
                      variant="outlined"
                      required
                    >
                      <MenuItem value="aaaaaaa">aaaaaaa</MenuItem>
                      <MenuItem value="aaaaaaa2">aaaaaaa 2</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Payment Type *
                    </Typography>
                    <TextField
                      fullWidth
                      label="Vendor Name"
                      select
                      variant="outlined"
                      required
                    >
                      <MenuItem value="aaaaaaa">aaaaaaa</MenuItem>
                      <MenuItem value="aaaaaaa2">aaaaaaa 2</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}></Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Amount *
                    </Typography>
                    <TextField
                      fullWidth
                      label="Amount"
                      type="text"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Currency *
                    </Typography>

                    <TextField
                      fullWidth
                      label="Currency"
                      select
                      defaultValue="US Dollar"
                      variant="outlined"
                      required
                    >
                      <MenuItem value="US Dollar">US Dollar</MenuItem>
                      <MenuItem value="Euro">Euro</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Personal Expense (do not reimburse)"
                    />
                    <FormControlLabel control={<Checkbox />} label="Has VAT" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Receipt Status *
                    </Typography>
                    <TextField
                      fullWidth
                      label="Vendor Name"
                      select
                      variant="outlined"
                      required
                    >
                      <MenuItem value="aaaaaaa">aaaaaaa</MenuItem>
                      <MenuItem value="aaaaaaa2">aaaaaaa 2</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ mb: 1 }}>
                      Comments
                    </Typography>
                    <TextField
                      fullWidth
                      label="Comment"
                      multiline
                      rows={3}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* Right Section */}
              <Grid item xs={3}>
                <Box
                  sx={{
                    border: "1px dashed #ccc",
                    borderRadius: "4px",
                    p: 2,
                    textAlign: "center",
                    bgcolor: "#FAFAFA",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1.5,
                  }}
                >
                  <Typography variant="h6">Add Receipt</Typography>
                  <Typography variant="tabsFont" color="textSecondary">
                    Click to upload or drag and drop files to upload a new
                    receipt.
                  </Typography>
                  <Typography variant="small" color="textSecondary">
                    File format: JPG, PNG, PDF, ...
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Button
                variant="outlined"
                color="surface"
                sx={{
                  mt: 2,
                  boxShadow: "none",
                  color: "surface.contrastText",
                  "&:hover": { background: "none" },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="surface"
                sx={{
                  mt: 2,
                  boxShadow: "none",
                  color: "surface.contrastText",
                  "&:hover": { background: "none" },
                }}
              >
                Save Expenses
              </Button>
            </Box>
          </Paper>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {/* Recently Used */}
          <Accordion defaultExpanded sx={{ marginBottom: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Recently Used</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="medium" gutterBottom>
                Office Supplies
              </Typography>
              <Typography variant="medium" gutterBottom>
                Car Rental
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Business Promotions */}
          <Accordion defaultExpanded sx={{ marginBottom: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6">Business Promotions</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="medium" gutterBottom>
                Misc. Promotional Expense
              </Typography>
              <Typography variant="medium" gutterBottom>
                Trade Shows
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Communications */}
          <Accordion sx={{ marginBottom: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h6">Communications</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="medium" gutterBottom>
                No items available
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Communications */}
          <Accordion sx={{ marginBottom: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h6">Communications</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="medium" gutterBottom>
                No items available
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default CreateExpanses;

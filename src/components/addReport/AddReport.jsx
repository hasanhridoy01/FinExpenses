import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Grid,
  Box,
} from "@mui/material";

const AddReport = ({ addReport, setAddReport }) => {
  const handleClickOpen = () => {
    setAddReport(true);
  };

  const handleClose = () => {
    setAddReport(false);
  };
  return (
    <React.Fragment>
      {/* <span style={{ padding: "9px 5px", textAlign: "left" }}>
        Start a Report
      </span> */}
      <Dialog
        open={addReport}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        aria-labelledby="create-new-report-dialog"
      >
        <DialogTitle
          id="create-new-report-dialog"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Typography
            variant="h6"
            color="primary"
            sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#F0F9F9" />
              <path
                d="M30 19V25C30 29 29 30 25 30H15C11 30 10 29 10 25V15C10 11 11 10 15 10H16.5C18 10 18.33 10.44 18.9 11.2L20.4 13.2C20.78 13.7 21 14 22 14H25C29 14 30 15 30 19Z"
                stroke="#222222"
                strokeWidth="1.5"
                strokeMiterlimit="10"
              />
              <path
                d="M20.0601 24.5V19.5"
                stroke="#222222"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.5 22H17.5"
                stroke="#222222"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Create New Report
          </Typography>
          <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
            onClick={handleClose}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="48" height="48" rx="24" fill="#D2D2D2" />
              <path
                d="M31 18.41L29.59 17L24 22.59L18.41 17L17 18.41L22.59 24L17 29.59L18.41 31L24 25.41L29.59 31L31 29.59L25.41 24L31 18.41Z"
                fill="#322F35"
              />
            </svg>
          </button>
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Create From an Approved Request
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Report Name *
              </Typography>
              <TextField
                fullWidth
                label="Report Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Report Date
              </Typography>
              <TextField
                fullWidth
                label="Report Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Policy
              </Typography>
              <TextField
                fullWidth
                select
                label="Policy"
                variant="outlined"
                required
              >
                <MenuItem value="policy1">Policy 1</MenuItem>
                <MenuItem value="policy2">Policy 2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Busyness Purpose *
              </Typography>
              <TextField
                fullWidth
                select
                label="Business Purpose"
                variant="outlined"
                required
              >
                <MenuItem value="purpose1">Purpose 1</MenuItem>
                <MenuItem value="purpose2">Purpose 2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Comment
              </Typography>
              <TextField
                fullWidth
                label="Comment"
                multiline
                rows={2}
                variant="outlined"
              />
              <Typography
                variant="caption"
                sx={{
                  mt: 1.5,
                  display: "flex",
                  alignItems: "center",
                  gap: 0.7,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00016 14.6668C11.6668 14.6668 14.6668 11.6668 14.6668 8.00016C14.6668 4.3335 11.6668 1.3335 8.00016 1.3335C4.3335 1.3335 1.3335 4.3335 1.3335 8.00016C1.3335 11.6668 4.3335 14.6668 8.00016 14.6668Z"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 5.3335V8.66683"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.99609 10.6665H8.00208"
                    stroke="#969696"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Statement here
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Travel Allowance
              </Typography>
              <Typography variant="base" sx={{ mb: 3 }}>
                Select if you have travel and require lodging, meals, or
                incidental travel allowances.
              </Typography>
              <RadioGroup
                defaultValue="yes"
                row
                sx={{ display: "flex", flexDirection: "column", gap: 0 }}
              >
                <FormControlLabel
                  value="yes"
                  sx={{ color: "text.secondary" }}
                  control={<Radio />}
                  label="Yes, I require Travel Allowance"
                />
                <FormControlLabel
                  value="no"
                  sx={{ color: "text.secondary" }}
                  control={<Radio />}
                  label="No, I do not require Travel Allowance"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={2}>
              <Button
                fullWidth
                variant="contained"
                color="surface"
                size="large"
                sx={{
                  mt: 2,
                  boxShadow: "none",
                  color: "surface.contrastText",
                  "&:hover": { background: "none" },
                }}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default AddReport;

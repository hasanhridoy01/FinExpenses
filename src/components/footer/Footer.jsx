import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 2.5, 
      }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center" justifyContent="space-between">
          {/* Left Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2, // Space between text items
            }}
          >
            <Typography variant="body" color="textSecondary">
              © 2025, Developed by <span style={{ color: "#172B4D", fontFamily: '"Poppins", sans-serif'}}>Newroz Technology</span>
            </Typography>
            <Typography variant="body" color="primary" style={{ fontFamily: '"Poppins", sans-serif'}}>
              Version 2.5.1
            </Typography>
          </Grid>

          {/* Right Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2, // Space between text items
            }}
          >
            <Typography variant="body" color="textSecondary" style={{ fontFamily: '"Poppins", sans-serif'}}>
              Privacy Policy
            </Typography>
            <Typography variant="body" color="textSecondary" style={{ fontFamily: '"Poppins", sans-serif'}}>
              Support
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

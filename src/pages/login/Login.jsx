import {
  Box,
  Button,
  FormControl,
  IconButton,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import brand from "../../../public/brand.png";
import Grid from "@mui/material/Grid2";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import PulseLoader from "react-spinners/PulseLoader";
import Footer from "../../components/Footer/Footer"; 
import { useTheme } from '@mui/material/styles';

const Login = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const customeTextFeild = {
    // padding: "15px 20px",
    background: "#FAFAFA",
    "& label.Mui-focused": {
      color: "#A0AAB4",
    },

    "& .MuiInput-underline:after": {
      borderBottomColor: "#B2BAC2",
    },
    "& .MuiOutlinedInput-input": {
      padding: "15px 24px 15px 0px",
    },
    "& .MuiOutlinedInput-root": {
      paddingLeft: "24px",
      "& fieldset": {
        borderColor: "rgba(0,0,0,0)",
      },

      "&:hover fieldset": {
        borderColor: "#969696",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#969696",
      },
    },
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "calc(100vh - 65px)", backgroundColor: "#FAFAFA" }}
      >
        <form
          style={{
            width: "442px",
            padding: "30px 40px",
            background: "#fff",
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          <img
            src={brand}
            alt=""
            style={{
              display: "block",
              margin: "auto",
              maxWidth: "155px",
              marginBottom: "30px",
            }}
          />
          <Typography
            variant="base"
            color="text.light"
            sx={{ fontWeight: 500, mb: 4, display: "block" }}
          >
            Login
          </Typography>
          <Box sx={{ mb: 2 }}>
            <TextField
              sx={{ ...customeTextFeild }}
              placeholder="User ID"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                        fill="black"
                        fill-opacity="0.3"
                      />
                    </svg>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              id="UserID"
            />{" "}
            {/* {errors?.email && (
            <Typography
              variant="small"
              color="error.main"
              sx={{ textAlign: "left" }}
            >
              {errors.email.toString()}
            </Typography>
          )} */}
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControl
              fullWidth
              variant="outlined"
              sx={{ ...customeTextFeild }}
            >
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                // size="small"
                endAdornment={
                  <InputAdornment position="start">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                        fill="black"
                        fill-opacity="0.3"
                      />
                    </svg>
                  </InputAdornment>
                }
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle password visibility"
                //       onClick={() => setShowPassword(!showPassword)}
                //       onMouseDown={handleMouseDownPassword}
                //       edge="end"
                //       sx={{ mr: 0.5 }}
                //     >
                //       {showPassword ? (
                //         <VisibilityOffOutlinedIcon sx={{ color: "#969696" }} />
                //       ) : (
                //         <RemoveRedEyeOutlinedIcon sx={{ color: "#969696" }} />
                //       )}
                //     </IconButton>
                //   </InputAdornment>
                // }
              />
            </FormControl>
            {/* {errors?.password && (
            <Typography
              variant="small"
              color="error.main"
              sx={{ textAlign: "left" }}
            >
              {errors.password.toString()}
            </Typography>
          )} */}
          </Box>

          <Typography
            component="div"
            // color="secondary.main"
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              textAlign: "left",
              cursor: "pointer",
              marginTop: "20px",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Forgot Password?
          </Typography>

          <Button
            variant="contained"
            color="primary"
            disableElevation
            fullWidth
            sx={{
              minHeight: "56px",
              mb: 4,
              mt: 2,
              ml: "auto !important",
              textTransform: "none",
              // backgroundColor: "#172B4D",
              "&:disabled": { backgroundColor: "#9e9e9e" },
            }}
            disabled={loading}
            type="submit"
          >
            {loading === false && "Login"}
            <PulseLoader
              color={theme.palette.primary.main}
              loading={loading}
              size={10}
              speedMultiplier={0.5}
            />{" "}
          </Button>
        </form>
      </Grid>
      <Footer />
    </>
  );
};

export default Login;

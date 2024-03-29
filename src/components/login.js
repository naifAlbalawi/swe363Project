import { Avatar, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import LoginAuth from "./loginAuth";

const Login = () => {
  const paperstyle = {
    padding: "20px",
    height: "70vh",
    width: "310px",
    margin: "20px auto",
  };
  const avtarstyly = { backgroundColor: "#000080" };
  const buttonstyle = { margin: "8px 0px" };
  return (
    <Grid>
      <Paper elevation={10} style={paperstyle}>
        <Grid align="center">
          <Avatar style={avtarstyly}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>

        <form id="Login-form">
          <TextField
            id="User-Email"
            label="Email"
            variant="standard"
            placeholder="Enter your Email"
            fullWidth
            required
          />
          <TextField
            id="User-password"
            label="Password"
            variant="standard"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={
              <Checkbox id="remember-me" name="antoine" color="primary" />
            }
            label="Remember me"
          />
          <Button
            id="signin"
            type="submit"
            color="primary"
            onClick={LoginAuth}
            fullWidth
            variant="contained"
            style={buttonstyle}
          >
            {/* <Link className="loglink" to="/"> */}
            SIGN IN
            {/* </Link> */}
          </Button>
        </form>

        <Typography>
          Don&apos;t have an account?
          <Link to="/signup">SIGN UP</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};
export default Login;

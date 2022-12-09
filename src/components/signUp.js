import React from "react";
import { Avatar, Grid, Paper, TextField, Typography } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Button from '@mui/material/Button';
import a from "./authh"


 const Signup = () =>{
    const paperStyle = {padding: "30px 20px", width:300, margin:"20px auto" }
    const avtarstyle = {backgroundColor: "#000080"}
    const buttonStyle = {margin:'10px auto'}
    
  
    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
               <Grid align="center">
                <Avatar style={avtarstyle}>
                    <AddCircleOutlineOutlinedIcon/>
                </Avatar>
                <h2> Sign UP </h2>
               </Grid>
               <Typography variant="caption"> Please fill this form to create an account !</Typography> 
               <form id="Signup-form">
               <TextField id="User-FName"  label="First Name" variant="standard"  placeholder='First Name' fullWidth required />
               <TextField id="User-LName"  label="Last Name" variant="standard"  placeholder='Last Name' fullWidth required />
               <TextField id="User-Email"  label="Email" variant="standard"  placeholder='Enter your Email' fullWidth required />
               <TextField id="User-password"  label="Password" variant="standard"  placeholder='Enter your Password' type='password' fullWidth required />
               <div className="card-dropdown copy" data-dropdown>
               <Button id= "signup" onClick = {a}  type="submit" variant="contained" color="primary"style={buttonStyle}  fullWidth data-dropdown-button> Sign UP </Button>
               <div className="card-dropdown-menu">
               <span className="copy-content link" id="error"></span>
              </div>
              </div>
               </form>
            </Paper>
 
        </Grid>
    )
   
 }


 export default Signup;


import { Avatar, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'; 
const direct= () =>{
    const g=  document.getElementById("User-Email").value;
    console.log(g)
    console.log("helllp")
}

    
   

const Login = () =>{
    const paperstyle = {padding:'20px', height:'70vh', width:'310px', margin:'20px auto'}
    const avtarstyly = {backgroundColor: "#000080"}
    const buttonstyle = {margin:'8px 0px'}
    return(
        <Grid>
            <Paper elevation={10} style = {paperstyle}>
                <Grid align='center'>
                <Avatar style={avtarstyly}><LockOutlinedIcon/></Avatar>
                <h2 >Sign in</h2>
                </Grid>
           
             <TextField id="User-Email" label="Email" variant="standard"  placeholder='Enter your Email' fullWidth required/>
             <TextField id="User-password" label="Password" variant="standard"  placeholder='Enter Password' type='password' fullWidth required/>
             <FormControlLabel
            control={
              <Checkbox  id='remember-me' name="antoine" color ="primary" />
              
            }

            label="Remember me"
          />
            <Button id='signin' type='submit' color='primary' onClick={direct} fullWidth variant='contained' style={buttonstyle}>SIGN IN</Button>
            <Typography>
            Don&apos;t have an account?
                <Link herf='#' >SIGN UP</Link>
            </Typography>
            </Paper>
        </Grid>
    )
}
export default Login
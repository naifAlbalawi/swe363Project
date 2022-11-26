import React, {useState} from "react";
import { Avatar, Grid, Paper, TextField, Typography } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Button from '@mui/material/Button';

 const Signup = () =>{
    const paperStyle = {padding: "30px 20px", width:300, margin:"20px auto" }
    const avtarstyle = {backgroundColor: "#000080"}
    const buttonStyle = {margin:'10px auto'}
    const [name,setName]= useState("")
    const [password,setPassword]= useState("")
    const [email,setEmail]= useState("")
    function signUp(e){
        e.preventDefault();
        let item = {name,email,password}
        console.warn(item)
    }
    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
               <Grid align="center">
                <Avatar style={avtarstyle}>
                    <AddCircleOutlineOutlinedIcon/>
                </Avatar>
                <h2>
                    Sign UP
                </h2>
               </Grid>
               <Typography variant="caption"> Please fill this form to create an account !</Typography> 
               <form>
               <TextField id="User-Name" value={name} label="Name" variant="standard"  placeholder='Enter your Name' fullWidth required onChange={(e)=>setName(e.target.value)}/>
               <TextField id="User-Email" value={email} label="Email" variant="standard"  placeholder='Enter your Email' fullWidth required onChange={(e)=>setEmail(e.target.value)}/>
               <TextField id="User-password" value={password} label="Password" variant="standard"  placeholder='Enter your Password' type='password' fullWidth required onChange={(e)=>setPassword(e.target.value)}/>
               <Button id= "signup" onClick={signUp} type="submit" variant="contained" color="primary"style={buttonStyle}  fullWidth > Sign UP </Button>
               </form>
            </Paper>
 
        </Grid>
    )
 }

 export default Signup;
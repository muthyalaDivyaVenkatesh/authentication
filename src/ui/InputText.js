import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react'

function InputText({  htmlName  , name, inputLabel ,value, size, type, position, changeHandler,mouseHandler, style}){

   const [showPassword, setShowPassword] = useState(false);
 
  
 const onMouseDownHandler = (event) =>{
  console.log(event.target.name,"we are seeing ")
  mouseHandler(event.target.name)
 }
   

   let onchangeHandler = (event) => {
    console.log(event.target.name, event.target.value)
    changeHandler(event.target.name,event.target.value)
   }
   return (
        <FormControl variant="standard" style={{ width: size }}>
        <InputLabel htmlFor={htmlName} style={{ fontWeight: '950px'}}>
          { inputLabel }
        </InputLabel>
        <Input
        required
        name={name}
        value={value}
        type={type == 'password'?  showPassword ? 'text': 'password' : type } 
          id={htmlName}
          startAdornment={
            <InputAdornment position={position}>
               {type=='password' ?    <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=> {
                    console.log("onClickkkkkkkkkkk",showPassword)
                    setShowPassword(prevValue => !prevValue)
                  }}
                >
             
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton> :<AccountCircle />}
            </InputAdornment>
          }
          onMouseDown={onMouseDownHandler}
          onChange={onchangeHandler}
        />

      </FormControl >
           
    )
}

export default InputText
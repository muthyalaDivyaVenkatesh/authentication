import './Login.css'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { redirect, useNavigate } from 'react-router-dom';



export default function Login() {
  let  navigate = useNavigate()
  
  let [touchedValues, setTouchedValues] = useState({
     userName:  false,
     password: false
  })

  let  [values, setValues] = useState({
    userName: '',
    password: '',
    showPassword: false,
  });


   
  function handleChangeHandler(type,event){
    console.log(type)
    setValues((prevValues) => ({...prevValues,[type]:event.target.value}))
    console.log(values)
  }

  let handleClickShowPassword = () => {
   setValues((prevValues) => ({
    ...prevValues,
    showPassword:true
   }))
  }

  function submitHandler(event){
    event.preventDefault()
    console.log(values,"LET US STOP RELOADING")
    //send to backend
    navigate('/',{replace:true})
  }

  function signInHandler(){
    console.log("we are Inside SignIn Handler")
    navigate('/signin',{replace:true})

  }

  function touchHandler(keyName){
    console.log("we are inside Key name", keyName)
    setTouchedValues((prevValues) => ({
      ...prevValues,
      [keyName]: true 
    }))
  }

  return (
     <div className='CardStyle'>
      <div className="FormStyle">
      <form onSubmit={submitHandler}>
      <FormControl variant="standard" style={{ width: '50vh'}}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Email
        </InputLabel>
        <Input
        required
        type="email"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          onMouseDown={touchHandler.bind(null,'userName')}
          onChange={handleChangeHandler.bind(null,'userName')}
        />
        {(touchedValues.userName && !values.userName.length ) && <small style={{'color':'red'}}>Email cannot be Empty</small>}
      </FormControl >
      <div style={{ marginTop: '30px'}}>
      <FormControl variant="standard" style={{ width: '50vh'}}>
      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            required
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onMouseDown={touchHandler.bind(null,'password')}
            onChange={handleChangeHandler.bind(null,'password')}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            />
              {(touchedValues.password && !values.password.length ) && <small style={{ color: 'red'}}>Password cannot be Empty</small>}
      </FormControl>
      <section style={{marginTop:30}}>
      <Button color='primary' variant="contained" type='submit'>Login</Button>
      </section>
      </div>
      </form>
      <section style={{marginTop:50}}>
      <Button   color="secondary" style={{width:300}} variant="contained" onClick={signInHandler}>SignIn</Button>
      </section>
      </div>
   
     </div>
  );
}

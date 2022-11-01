import { Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputText from "../../../ui/InputText";
import './Signin.css'
import { useState } from "react";

export default function SignIn() {
    let navigation = useNavigate()
    const [showPasswordError, setShowPasswordError] = useState(false)
    const [signinValues, setsigninValues] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    });
    let [touchedValues, setTouchedValues] = useState({
        email:  false,
        name: false,
        password: false,
        confirmPasword: false
     })
    

    function redirectTologinHandler() {
        navigation('/login')
    }

    // onChangeHandler
    function onChangeHandler(type, value) {
       console.log(type, value,"FROM LOGIN")
        setsigninValues((prevValues) => ({
            ...prevValues,
            [type]: value
        }))
    }
 
    let submitHandler = (event) =>{
        event.preventDefault()  
        console.log("we are Inside submitHandler")
        console.log(signinValues)
        if(signinValues.password !== signinValues.confirmPassword){
            console.log("Password and Confirm Password Not Equal")
            setShowPasswordError((prevValues) => !prevValues)
            alert("Password and Confirm Password is Not Equal")
            return
        }
        alert("SuccessFully account Created")
        // Send this to Back end
    }

     const onMouseDownHandler = (name) =>{
      setTouchedValues((prevValues) =>({
        ...prevValues,
        [name] : true
      }))
     }

    return (
        <div className="SigninContainer">
            
            <form className="SigninForm" onSubmit={submitHandler}>
            {showPasswordError && <p style={{ color: 'red' }}>Password And Confirm Password Must be Same</p>}
                <InputText variant="standerd" inputLabel="Email" name="email" value={signinValues.email} mouseHandler={onMouseDownHandler} type="email"  htmlName="input-with-icon-adornment" size="300px" position="start" changeHandler={onChangeHandler} />
                {(touchedValues.email && !signinValues.email.length ) && <small style={{'color':'red'}}>Email cannot be Empty</small>}
                <InputText variant="standerd" inputLabel="Name" name="name" value={signinValues.name} type="text"  mouseHandler={onMouseDownHandler} htmlName="input-with-icon-adornment" size="300px" position="start" changeHandler={onChangeHandler} />
                {(touchedValues.name && !signinValues.name.length ) && <small style={{'color':'red'}}>userName cannot be Empty</small>}
                <InputText variant="standerd" inputLabel="password" name="password" value={signinValues.password} mouseHandler={onMouseDownHandler}  type="password" htmlName="standard-adornment-password" size="300px" position="start" changeHandler={onChangeHandler} />
                {(touchedValues.password && !signinValues.password.length ) && <small style={{'color':'red'}}>password  cannot be Empty</small>}
                <InputText variant="standerd" inputLabel="confirmPassword" name="confirmPassword" value={signinValues.confirmPassword}  mouseHandler={onMouseDownHandler} type="password" htmlName="standard-adornment-password" size="300px" position="start" changeHandler={onChangeHandler} />
                {(touchedValues.confirmPasword && !signinValues.confirmPassword.length ) && <small style={{'color':'red'}}>confirmPassword cannot be Empty</small>}
                <Button color='primary' variant="contained" type='submit'> SignIn</Button >
            </form>
            <div style={{ marginLeft: '50rem', marginTop: '60px' }}>
                <p style={{ color: "#9c27b0" }}>If you alredy have a account plese SignIn</p>
                <Button color="secondary" style={{ width: '300px' }} variant="contained" onClick={redirectTologinHandler} >Login</Button>
            </div>
            <div>
              
            </div>
        </div>
    )
}

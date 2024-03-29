
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from '../floatmellow-logo-alt2.png';
import './Login.css';

export default function Login({setNavBarHidden}) {
setNavBarHidden(true);
let history = useHistory();
const [passwordValue, setPasswordValue] = useState('');
const [validationError, setValidationError] = useState(null);

useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


function handleSubmit(e) {
    e.preventDefault();

    if(passwordValue.length >= 6){
      history.push('dashboard');  
    }
    else{
      return setValidationError(<p className="validation-error">Password needs to be longer than six letters, numbers and special characters.</p>)  
    }
}

function passwordValueChange(e){
    setPasswordValue(e.target.value);
}


    return (
        <div className="login">
            <div className="login-heading">
            <img className="logo" src={logo} alt="Floatmellow logo in blue"/>
            <h1 className="login-header">
                The only flood protection device you'll ever need.
            </h1>
            </div>
            <div className="login-form-block">
          <form className="login-form" onSubmit={handleSubmit}>
              <fieldset className="vertical-fieldset">
              <label htmlFor="#email">Email</label>
              <input id="email" type="email" placeholder="janedoe@email.com" required/>
              </fieldset>
              <fieldset className="vertical-fieldset">
                  {validationError}
              <label htmlFor="#password">Password</label>
              <input id="password" type="password" onChange={passwordValueChange} required/>
              </fieldset>
              <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <small className="disclaimer">*This project takes any email and any password 6 letters or more. There is no user database and this page 
            is just to showcase simple form validation and routing.
          </small>
          </div>
        </div>
    );
}
import { useHistory } from "react-router-dom";
import logo from '../floatmellow-logo.png';

export default function Login({setNavBarHidden}) {
setNavBarHidden(true);
let history = useHistory();
function handleSubmit() {
    history.push('dashboard');
}

    return (
        <div className="login">
          <form className="login-form" onSubmit={handleSubmit}>
                <img className="logo" src={logo} alt="Floatmellow logo in blue"/>
          <h1 className="login-header">Login</h1>
              <fieldset className="vertical-fieldset">
              <label htmlFor="#email">Email</label>
              <input id="email" type="email" required/>
              </fieldset>
              <fieldset className="vertical-fieldset">
              <label htmlFor="#password">Password</label>
              <input id="password" type="password" required/>
              </fieldset>
              <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
    );
}
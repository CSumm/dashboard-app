import { useHistory } from "react-router-dom"; 

export default function Login({setNavBarHidden}) {
setNavBarHidden(true);
let history = useHistory();
function handleSubmit() {
    history.push('dashboard');
}

    return (
        <div className="login">
            
          <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-header">Login</h1>
              <fieldset className="username-fieldset">
              <label htmlFor="#email">Email</label>
              <input id="email" type="email" required/>
              </fieldset>
              <fieldset className="password-fieldset">
              <label htmlFor="#password">password</label>
              <input id="password" type="password" required/>
              </fieldset>
              <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
    );
}
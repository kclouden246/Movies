import React from 'react'

export default class Login extends React.Component {
    constructor(props){
        super(props);
            
    }

    Login = (event) => {
        event.preventDefault()
        let user = document.getElementById("email");
        let pwd = document.getElementById("password");
        console.log("Login.js", user.value)
        this.props.loginAccount(user.value, pwd.value);
    }
    
    render(props){
        return (
          <div>
              <h1>Login</h1>
            <form id="login-form" onSubmit={this.Login}>
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                id="email"
              />
              <br></br>
              <label htmlFor="password">Password:</label>
              <input
                type="text"
                id="password"
              />
              <br></br>
              <input 
                type="submit" value="Login" id="login"/>
            </form>
          </div>
        );
    }
}
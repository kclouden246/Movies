import React from 'react'

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",   
            pw: ""   
        };
            
    }
    
    render(props){
        return (
          <div>
              <h1>Login</h1>
            <form id="login-form" onSubmit={this.loginAccount}>
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
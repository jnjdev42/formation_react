import React from 'react'
import {Redirect} from 'react-router-dom'


class Login extends React.Component {

  constructor(props){
    super(props)

    this.state = {
        login: '',
        password: '',
        loggedIn: false
    }
  }

  handleChange(e){
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleClick(){
    fetch('https://localhost:44393/auth/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
            'email': this.state.login,
            'password': this.state.password
        })
      })
      .then(response => {
          if(response.status !== 200){
              throw("Erreur de connexion.");
          }
          return response.json()
      })
      .then(body => {
          localStorage.setItem('access_token', body.token)
          this.setState({
              loggedIn: true
          })
      })
      .catch(err => {
          alert(err)
      })
  }

  render(){
    return (
      <div>
          {this.state.loggedIn === true ? <Redirect to="/" /> : null}
          <div>
            <label>Login</label>
            <input type="text" name="login" onChange={(e) => this.handleChange(e)} />
          </div>
          <div>
            <label>Password</label>
            <input type="text" name="password" onChange={(e) => this.handleChange(e)} />
          </div>
          <div>
              <button type="button" onClick={() => this.handleClick()}>Login</button>
          </div>
      </div>
    );
  }
}

export default Login;
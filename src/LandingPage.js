import React from 'react'
import { Redirect } from 'react-router-dom'

class LandingPage extends React.Component {

  constructor(props){
    super(props)
  }

  handleClick(){
    localStorage.removeItem('access_token');
    document.location.href='/login'
  }

  componentDidMount(){
      fetch('https://localhost:44393/professeurs', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization' : 'Bearer ' + localStorage.getItem('access_token')
          }
        })
        .then(response => {
            return response.json()
        })
        .then(body => {
            console.log(body)
        })
        .catch(err => {
            alert(err)
        })
    }

  render(){
    return (
      <div>
        <div>
          Landing Page
        </div>
        <button onClick={() => this.handleClick()}>Déconnexion</button>
      </div>
    );
  }
}

export default LandingPage;
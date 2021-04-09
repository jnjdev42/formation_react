import React from 'react'
import Test from './Components/Test'

class Home extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      prenom: 'Jérôme'
    }
  }

  handleClick(){
    this.setState({
      prenom: "Pierre"
    })
  }

  render(){
    return (
      <div>
        <div>
          Ceci est l'écran Home
        </div>
        <Test prenom={this.state.prenom} />
        <button onClick={() => this.handleClick()}>click</button>
      </div>
    );
  }
}
export default Home;
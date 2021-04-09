import React from 'react'
import LandingPage from './LandingPage';

class App extends React.Component {
  prenom2 = 'Gérard';

  constructor(props){
    super(props)

    this.state = {
      prenom: 'Jérôme',
      age: 0,
      fleur: {
        couleur: 'rose'
      }
    }
  }

  handleClick(){
    this.setState({
      prenom: "Théo"
    })
  }


  render(){
    return (
      <div>
        <div>
          <LandingPage />
        </div>
      </div>
    );
  }
}
export default App;

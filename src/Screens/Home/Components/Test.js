import React from 'react'

class Test extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        {this.props.prenom}
      </div>
    );
  }
}

export default Test;
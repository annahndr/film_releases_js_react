import React from 'react';

class IndividualFilm extends React.Component {
  render(){
    return(
      <li className="individual-film">
        <p><a href={this.props.url}>{this.props.name} </a></p>
      </li>
    )
  }
}

export default IndividualFilm;

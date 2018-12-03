import React from 'react';
import IndividualFilm from './IndividualFilm';


class FilmList extends React.Component {
  render(){

    const filmNodes = this.props.films.map(film => {
      return (
        <IndividualFilm key={film.id} name= {film.name} url={film.url}>
        </IndividualFilm>
      )
    })

    return (
      <ul className="film-list">
        {filmNodes}
      </ul>
    )

  }
}

export default FilmList;

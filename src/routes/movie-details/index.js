import { h, Component } from "preact";

class MovieDetails extends Component {
  render({ id, title }) {
    return (
      <div>
        <h3 class="card-header">{title}</h3>
        <p>Movie ID: {id}</p>
        <p>All other details...</p>
      </div>
    );
  }
}

export default MovieDetails;

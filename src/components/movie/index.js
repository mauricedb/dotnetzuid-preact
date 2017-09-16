import { h, Component } from "preact";
import classnames from "classnames";
import Genre from "../genre";
import style from "./style";

class Movie extends Component {
  render({ movie, isMediumScreen }) {
    let img = null;

    if (isMediumScreen) {
      img = (
        <div
          class={classnames("float-left", "d-none", "d-md-block", style.image)}
        >
          <img src={`//image.tmdb.org/t/p/w150${movie.poster_path}`} />
        </div>
      );
    }

    return (
      <div class={classnames("card", style.card)}>
        <h3 class="card-header">{movie.title}</h3>
        <div class="card-body">
          {img}
          <p class="card-text">{movie.overview}</p>
          <a href="#" class="btn btn-primary">
            Read More
          </a>
          <span class="float-right">
            {movie.genres.map(genre => <Genre genre={genre} />)}
          </span>
        </div>
      </div>
    );
  }
}

export default Movie;

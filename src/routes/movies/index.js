import { h, Component } from "preact";

import Movie from "../../components/movie";
import style from "./style";

class Movies extends Component {
  state = {
    movies: [],
    take: 5
  };

  constructor() {
    super();

    this.observer = new IntersectionObserver(this.onIntersection);
    this.observer.POLL_INTERVAL = 100; // Time in milliseconds for the polyfill.
  }

  onIntersection = entries => {
    const entry = entries[0];
    if (
      entry &&
      entry.isIntersecting &&
      this.state.take < this.state.movies.length
    ) {
      this.setState(state => ({ take: state.take + 5 }));
    }
  };

  componentDidMount() {
    fetch("/api/movies.json")
      .then(rsp => rsp.json())
      .then(movies => this.setState(() => ({ movies })))
      .then(() => {
        this.observer.observe(this.bottom);
      });
  }

  componentWillUnmount() {
    this.observer.unobserve(this.bottom);
  }

  render({}, { movies, take }) {
    return (
      <div>
        <h1>Movies</h1>

        <div>{movies.slice(0, take).map(movie => <Movie movie={movie} />)}</div>

        <div
          class={style.bottom}
          ref={el => {
            this.bottom = el;
          }}
        />
      </div>
    );
  }
}

export default Movies;

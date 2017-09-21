import { h, Component } from "preact";

import Movie from "../../components/movie";
import style from "./style";

class Movies extends Component {
  constructor() {
    super();

    this.observer = new IntersectionObserver(this.onIntersection);
    this.observer.POLL_INTERVAL = 100; // Time in milliseconds for the polyfill.
    this.mediaQueryList = matchMedia("(min-width: 768px)");

    this.state = {
      movies: [],
      take: 5,
      isMediumScreen: this.mediaQueryList.matches
    };
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

  onMediaQueryListChanged = e => {
    if (e.matches !== this.state.isMediumScreen) {
      this.setState({ isMediumScreen: e.matches });
    }
  };

  componentDidMount() {
    fetch("/api/movies.json")
      .then(rsp => rsp.json())
      .then(movies => this.setState(() => ({ movies })))
      .then(() => {
        this.observer.observe(this.bottom);
      });

    this.mediaQueryList.addListener(this.onMediaQueryListChanged);
  }

  componentWillUnmount() {
    this.observer.unobserve(this.bottom);
    this.mediaQueryList.removeListener(this.onMediaQueryListChanged);
  }

  render({}, { movies, take, isMediumScreen }) {
    return (
      <div>
        <h1>Movies</h1>

        <div>
          {movies
            //.slice(0, take)
            .map(movie => (
              <Movie movie={movie} isMediumScreen={isMediumScreen} />
            ))}
        </div>

        <div class={style.bottom} ref={el => (this.bottom = el)} />
      </div>
    );
  }
}

export default Movies;

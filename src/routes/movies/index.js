import { h, Component } from 'preact';
import style from './style';

import Movie from '../../components/movie';

class Movies extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch('/api/movies.json')
        .then(rsp => rsp.json())
        .then(movies => this.setState({movies}))
    }

    render({}, {movies}) {
        return (
            <div class={style.movies}>
                <h1>Movies</h1>

                <ul>
                    {movies.map(movie => <Movie movie={movie} />)}
                </ul>
            </div>
        );
    }
}

export default Movies;


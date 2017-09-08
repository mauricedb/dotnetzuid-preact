import { h, Component } from 'preact';

class Movie extends Component {
    render({movie}) {
        return (
            <div>
                <li>{movie.title}</li>
            </div>
        );
    }
}

export default Movie
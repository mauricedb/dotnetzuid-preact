import { h, Component } from 'preact';
import style from './style';

class Directors extends Component {
    state = {
        directors: []
    }

    componentDidMount() {
        fetch('/api/directors.json')
        .then(rsp => rsp.json())
        .then(directors => this.setState({directors}))
    }

    render({}, {directors}) {
        return (
            <div class={style.directors}>
                <h1>Directors</h1>

                <ul>
                    {directors.map(director => <li>{director}</li>)}
                </ul>
            </div>
        );
    }
}

export default Directors;


import { h, Component } from "preact";

class Directors extends Component {
  state = {
    directors: []
  };

  componentDidMount() {
    fetch("/api/directors.json")
      .then(rsp => rsp.json())
      .then(directors => this.setState({ directors }));
  }

  render({}, { directors }) {
    return (
      <div>
        <h1>Directors</h1>

        <ul>{directors.map(director => <li>{director}</li>)}</ul>
      </div>
    );
  }
}

export default Directors;

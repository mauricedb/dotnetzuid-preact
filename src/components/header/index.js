import { h, Component } from "preact";
import classnames from "classnames";
import { Link } from "preact-router/match";

export default class Header extends Component {
  state = {
    expanded: false
  };

  toggleExpanded = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  collapse = () => {
    this.setState(() => ({ expanded: false }));
  };

  render({}, { expanded }) {
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link onClick={this.collapse} class="navbar-brand" href="/">
            Preact App
          </Link>
          <button
            class={classnames("navbar-toggler", { collapsed: !expanded })}
            type="button"
            aria-expanded={expanded}
            aria-label="Toggle navigation"
            onClick={this.toggleExpanded}
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div
            class={classnames("navbar-collapse", "collapse", {
              show: expanded
            })}
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link
                  onClick={this.collapse}
                  class="nav-link"
                  activeClassName="active"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  onClick={this.collapse}
                  class="nav-link"
                  activeClassName="active"
                  href="/movies"
                >
                  Movies
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  onClick={this.collapse}
                  class="nav-link"
                  activeClassName="active"
                  href="/directors"
                >
                  Directors
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

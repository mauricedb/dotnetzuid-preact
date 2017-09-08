import { h, Component } from "preact";
import { Link } from "preact-router/match";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand" href="/">
            Preact App
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <Link class="nav-link" activeClassName="active" href="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" activeClassName="active" href="/movies">
                  Movies
                </Link>
              </li>
              <li class="nav-item">
                <Link
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

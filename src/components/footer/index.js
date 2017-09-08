import { h, Component } from "preact";
import style from "./style";

const date = new Date();
const year = date.getFullYear();
class Footer extends Component {
  render() {
    return (
      <footer class={style.footer}>
        <div class="container">
          <span class="text-muted">
            Copyright © {year}{" "}
            <a href="http://theproblemsolver.nl/">ABL - The Problem Sover</a>
          </span>
          <span class={"text-muted " + style.link}>
            Movies from <a href="https://www.themoviedb.org/">The Movie DB</a>
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;

import { h, Component } from "preact";
import style from "./style";

export default class Home extends Component {
  render() {
    return (
      <div class={style.background}>
<div class={style.logo}></div>
      </div>
    );
  }
}

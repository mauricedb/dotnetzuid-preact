import { h, Component } from "preact";
import classnames from "classnames";
import style from "./style";

const Genre = ({ genre }) => {
  return (
    <button class={classnames("btn", "btn-info", "btn-sm", style.btnGenre)}>
      {genre}
    </button>
  );
};

export default Genre;

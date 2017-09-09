import { h, Component } from "preact";
import classnames from "classnames";
import style from "./style";

const Genre = ({ genre }) => {
  return (
    <button class={classnames("btn", "btn-info", "btn-xs", style.btnGenre)}>
      <span
        class={classnames("glyphicon", "glyphicon-tag", style.glyphiconTag)}
      />
      {genre}
    </button>
  );
};

export default Genre;

import { h, Component } from "preact";
import style from "./style";

const Genre = ({ genre }) => {
  return (
    <button class={"btn btn-info btn-xs " + style.btnGenre}>
      <span class={"glyphicon glyphicon-tag " + style.glyphiconTag} />
      {genre}
    </button>
  );
};

export default Genre;

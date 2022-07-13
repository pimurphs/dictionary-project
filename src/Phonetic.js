import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  //console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <span className="phonetic-text">{props.phonetic.text}</span>
      <a
        href={props.phonetic.audio}
        target="_target"
        rel="noopener noreferrer"
        className="link"
      >
        Listen
      </a>
    </div>
  );
}

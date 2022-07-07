import React from "react";

export default function Phonetic(props) {
  //console.log(props.phonetic);
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <br />
      <a href={props.phonetic.audio} target="_target" rel="noopener noreferrer">
        Listen
      </a>
    </div>
  );
}

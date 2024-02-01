import React from "react";
import Item from "./Item";

const Accordions = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <Item title={el.title} text={el.text} num={i + 1} key={i + 1} />
      ))}
    </div>
  );
};

export default Accordions;

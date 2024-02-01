import React, { useState } from "react";

const Accordion = ({ num, title, text }) => {
  let classdiv = "item";
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  };
  clicked ? (classdiv += " open") : (classdiv += "");
  console.log(classdiv);
  return (
    <>
      <div className={classdiv} onClick={clickHandler}>
        <p className="number">{num}</p>
        <p className="title">{title}</p>
        <p className="icon">{clicked ? "-" : "+"}</p>
        {clicked ? (
          <div className="content-box">
            <p className="text">{text}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Accordion;

import React, { useState, useEffect } from "react";
import Data from "../JS/Data.json";
import "../CSS/Accordian.css";
function Accordian() {
  const [d, setD] = useState([]);
  const [selected, setSelected] = useState(null);
  const [togg, setTogg] = useState(false);
  function handleSelected(selectedId) {
    setTogg(!togg);
    setSelected(selectedId);
    console.log(selected);
  }
  useEffect(() => {
    setD(Data);
  }, []);
  console.log(d);
  return (
    <>
      <div className="wrapper container">
        {d && d.length > 0 ? (
          d.map((i) => (
            <div
              className="item"
              key={i.id}
              onClick={() => handleSelected(i.id)}
            >
              <div className="title">
                <h5>{i.question}</h5>
                <h3>+</h3>
              </div>
              {selected === i.id && togg ? (
                <div className="selected">{i.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <h1>data not exists</h1>
        )}
      </div>
    </>
  );
}

export default Accordian;

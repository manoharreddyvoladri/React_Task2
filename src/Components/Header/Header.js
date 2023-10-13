import React, {useEffect, useRef} from "react";

import "./Header.css";

function Header(props) {
  const resultRef = useRef();
  const expressionRef = useRef();

  useEffect(() => {
    resultRef.current.scrollIntoView();
  }, [props.history]);

  useEffect(() => {
    expressionRef.current.scrollLeft = expressionRef.current.scrollWidth;
  }, [props.expression]);

  return (
    <div className="Header custom-scroll">
      <div className="Header_history">
      {props.history &&
          props.history?.map((item) => (
            <p key={item + "" + Math.random() * 44}>{item}</p>
          ))}
      </div>
      <br />

      <div ref={expressionRef} className="Header_expression custom-scroll">
        <p>{props.expression}</p>
      </div>

      <p ref={resultRef} className="Header_result">{props.result}</p>
    </div>
  );
}

export default Header;

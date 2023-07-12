import "./TitleInput.css";
import { useState, useRef, useLayoutEffect } from "react";
const TitleInput = ({ title, setTitle }) => {
  const [width, setWidth] = useState(0);
  const span = useRef();

  useLayoutEffect(() => {
    setWidth(span.current.offsetWidth);
  }, [title]);

  return (
    <div className="container">
      <span id="hide" className="title-input" ref={span}>
        {title}
      </span>
      <input
        type="text"
        placeholder="Untitled run"
        className="title-input"
        value={title}
        onChange={(e) => {
          if (!(e.target.value.length > 30)) {
            setTitle(e.target.value);
          }
        }}
        style={{ width }}
      />
      {title.length >= 30 && (
        <p className="error-msg">Maximum character limit reached</p>
      )}
    </div>
  );
};

export default TitleInput;

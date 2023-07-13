import "./TitleInput.css";
import { useState, useRef, useLayoutEffect } from "react";
const TitleInput = ({ title, setTitle, defaultTitle, charLimit }) => {
  const [width, setWidth] = useState(0);
  const span = useRef(0);
  const titleInput = useRef(0);

  // Updates width of input field when typing by using width of hidden span as reference
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
        className="title-input"
        value={title}
        ref={titleInput}
        onChange={(e) => {
          if (!(e.target.value.length > charLimit)) {
            setTitle(e.target.value);
          }
        }}
        onClick={(e) => {
          if (e.target.value === defaultTitle) {
            e.target.select();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            titleInput.current.blur();
          }
        }}
        onBlur={(e) => {
          if (e.target.value === "") {
            setTitle(defaultTitle);
          }
        }}
        style={{ width }}
      />
      {title.length >= charLimit && (
        <p className="error-msg">
          Maximum character limit reached ({charLimit})
        </p>
      )}
    </div>
  );
};

export default TitleInput;

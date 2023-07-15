import { useRef } from "react";
import "./TextInput.css";

const TextInput = ({ inputLabel, placeholder, content, setContent }) => {
  const textInput = useRef(0);

  return (
    <div className="text-input-wrapper">
      <p className="input-label">{inputLabel}</p>
      <input
        ref={textInput}
        type="text"
        placeholder={placeholder}
        id="text-input"
        value={content}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            textInput.current.blur();
          }
        }}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;

import { useRef } from "react";
import "./TextInput.css";

const TextInput = ({
  inputLabel,
  placeholder,
  content,
  setContent,
  isDisabled,
  name,
}) => {
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
        disabled={isDisabled}
        name={name}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            textInput.current.blur();
          }
        }}
        onChange={(e) => {
          if (name === "name") {
            setContent(e);
            return;
          }

          setContent(e.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;

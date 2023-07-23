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
          if (name === "name" && !(e.target.value.length > 30)) {
            setContent(e);
            return;
          }

          if (!(e.target.value.length > 30)) {
            setContent(e.target.value);
          }
        }}
      />
      {content?.length >= 30 && (
        <p className="error-msg">Maximum character limit reached (30)</p>
      )}
    </div>
  );
};

export default TextInput;

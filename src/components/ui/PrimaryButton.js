// Adapted from SkullCutter02, modified

import { useState } from "react";

const PrimaryButton = ({
  buttonType = "button",
  text,
  onClick,
  disabled = false,
  color,
  width,
  border,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  margin,
  background,
  borderRadius,
  padding,
  fontWeight,
  hoverColor,
  transition,
}) => {
  const [bgColor, setBgColor] = useState(background);

  return (
    <>
      <button
        type={buttonType}
        onClick={onClick}
        disabled={disabled}
        style={{
          color: color,
          width: width,
          border: "" || border,
          marginTop: marginTop,
          marginBottom: marginBottom,
          marginLeft: marginLeft,
          marginRight: marginRight,
          margin: margin,
          background: bgColor,
          borderRadius: borderRadius,
          padding: padding,
          fontWeight: fontWeight,
          cursor: "pointer",
          transition: "all 0.15" || transition,
        }}
        onMouseEnter={() => {
          hoverColor && setBgColor(hoverColor);
        }}
        onMouseLeave={() => {
          hoverColor && setBgColor(background);
        }}
      >
        {text}
      </button>
    </>
  );
};

export default PrimaryButton;

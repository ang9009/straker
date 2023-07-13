import "./PrimaryButton.css";

const PrimaryButton = ({
  text,
  backgroundColor,
  color,
  padding,
  borderRadius,
  marginLeft,
}) => {
  return (
    <>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: color,
          padding: padding,
          borderRadius: borderRadius,
          marginLeft: marginLeft,
        }}
      >
        {text}
      </button>
    </>
  );
};

export default PrimaryButton;

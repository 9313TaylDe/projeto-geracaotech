import React from "react";

const Button = ({ color = "default", children, type = "" }) => {
  const colorStyles = {
    default: { backgroundColor: "#ccc", color: "#000" },
    pink: { backgroundColor: "#C92071", color: "#fff", width: "" },
    white: { backgroundColor: "#fff", color: "#000" },
    yellow: { backgroundColor: "#ffeb3b", color: "#000" },
    red: { backgroundColor: "red", color: "#000" },
    "yellow-full": { backgroundColor: "#ffeb3b", color: "#fff" },
  };

  const style = colorStyles[color] || colorStyles.default || type.width;

  return (
    <button
      style={{
        ...style,
        color: "white",
        padding: "10px 20px",
        width: "",
        height: "40px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;

import React from "react";

export default function MyButton({ text, type, onClick }) {
  const btunType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <div>
      <button
        onClick={onClick}
        className={["MyButton", `MyButton_${btunType}`].join(" ")}
      >
        {text}
      </button>
    </div>
  );
}

MyButton.defaultProps = {
  type: "default",
};

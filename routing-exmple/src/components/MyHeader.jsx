import React from "react";

export default function MyHeader({ headerText, leftchild, rightchild }) {
  return (
    <header>
      <div className="header_btn_left">{leftchild}</div>
      <div className="header_text">{headerText}</div>
      <div className="header_btn_right">{rightchild}</div>
    </header>
  );
}

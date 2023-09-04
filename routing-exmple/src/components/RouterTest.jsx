import React from "react";
import { Link } from "react-router-dom";

export default function RouterTest() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/diary">DIARY</Link>
      <br />
      <Link to="/new">New</Link>
      <br />
      <Link to="/edit">Edit</Link>
    </div>
  );
}

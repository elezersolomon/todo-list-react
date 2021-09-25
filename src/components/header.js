import React from "react";
import {Link} from 'react-router-dom'

export default function header() {
  return (
    <div id="header">
      <h1 style={headerstyle}>todoes</h1>
      <Link to="/" style={linkstyle} >home</Link>| <Link to='/about' style={linkstyle} >About</Link>
    </div>
  );
}
const linkstyle ={
  color:'purple',
  fontSize:'10px',
}
const headerstyle = {
  color: "indgo",
  conterntAlign: "center",
  backgroundColor: "gray",
  fontSize: "50px",
};

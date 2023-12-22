import React from "react";
import "./DogTile.css"

// Pure React
/*
function DogTile() {
  // return React.createElement("div", {}, React.createElement("img"), React.createElement("h3"));
  return React.createElement(
    "div", 
    {}, 
    React.createElement("img"), React.createElement("h3")
  );
}
*/

// JSX
function DogTile() {  
  // return <div> New Dog </div>;
  return (
    <div>
      <img src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg" alt="puppy image"></img>
      <h3>Cute Puppy</h3>
    </div>
  );
}

export default DogTile;
import "./DogTile.css"
import DogDescription from "./DogDescription";

// JSX
function DogTile() {  
  // return <div> New Dog </div>;
  return (
    <div className="first">
      <img src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg" alt="puppy image"></img>
      <DogDescription />
    </div>
  );
}

export default DogTile;



/*
function DogTile() {  
  // return <div> New Dog </div>;
  return (
    <div className="first">
      <img src="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg" alt="puppy image"></img>
      <h3>Cute Puppy</h3>
    </div>
  );
}

export default DogTile;
*/
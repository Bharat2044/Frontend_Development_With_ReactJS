import "./DogTile.css"
import DogDescription from "./DogDescription";

// JSX
function DogTile() {
  const text = "Cute Puppy";
  const imageUrl = "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg";
  const customStyle = {fontSize: '20px', color: 'red'};

  return (
    <div className="first">
      <img src={imageUrl} alt="puppy image" />
      {/* <h3 style={{fontSize: '20px', color: 'red'}}> {text} </h3> */}
      <h3 style={customStyle}> {text} </h3>
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
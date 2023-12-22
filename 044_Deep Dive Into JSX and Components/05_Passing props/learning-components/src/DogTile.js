import "./DogTile.css"
import DogDescription from "./DogDescription";

function DogTile(props) {
  // const text = "Cute Puppy";
  // const imageUrl = "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg";

  const customStyle = {fontSize: '20px', color: 'red'};
  // console.log(props);

  return (
    <div className="first">
      <img src={props.image} alt="puppy image" />
      <h3 style={customStyle}> {props.text} </h3>

      {/* <img src={imageUrl} alt="puppy image" /> */}
      {/* <h3 style={{fontSize: '20px', color: 'red'}}> {text} </h3> */}
      {/* <h3 style={customStyle}> {text} </h3> */}
      <DogDescription description={props.description} />
    </div>
  );
}


export default DogTile;





// function DogTile({image, text, description}) {
//   const customStyle = {fontSize: '20px', color: 'red'};

//   return (
//     <div className="first">
//       <img src={image} />
//       <h3 style={customStyle}> {text} </h3>
//       <DogDescription description={description} />
//     </div>
//   );
// }
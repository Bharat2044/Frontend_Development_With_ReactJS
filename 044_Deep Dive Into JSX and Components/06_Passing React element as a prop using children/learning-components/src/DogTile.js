import "./DogTile.css"
import DogDescription from "./DogDescription";

function DogTile(props) {
  const customStyle = {fontSize: '20px', color: 'red'};
  // console.log(props);
  // console.log(props.children);

  return (
    <div className="first">
      <img src={props.image} alt="puppy image" />
      <h3 style={customStyle}> {props.text} </h3>
      <DogDescription description={props.description} />
      {props.children}
    </div>
  );
}

export default DogTile;

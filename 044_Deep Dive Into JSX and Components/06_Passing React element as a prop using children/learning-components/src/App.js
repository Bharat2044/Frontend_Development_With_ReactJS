import './App.css';
import DogTile from './DogTile';

function App() {
  return (
    <section className='puppy'>
      <DogTile description="d1" text="Puppy1" image="https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg" />
      <DogTile description="d2" text="Puppy2" image="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*" />
      <DogTile description="d3" text="Puppy3" image="https://www.shutterstock.com/image-photo/cute-puppy-pembroke-welsh-corgi-260nw-1290320698.jpg" />
      <DogTile description="d4" text="Puppy4" image="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/rockcms/2023-03/puppy-dog-mc-230321-03-b700d4.jpg" />
      <DogTile description="d5" text="puppy5" image="https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVwcHl8ZW58MHx8MHx8f">
        <p>This is children prop</p>
      </DogTile>
    </section>
  );
}

export default App;

import { useState, useEffect } from "react";
import PhotoHome  from "./components/PhotoHome";
import PhotoContainer from './components/PhotoContainer';

function App() {
  const [photos, setPhotos] = useState([]);

  // function LoadPhoto(){
  //   useEffect(() => {
  //     fetch("/photos")
  //       .then((r) => r.json())
  //       .then(setPhotos)
  //   }, []);
  // }
  useEffect(() => {
    fetch("/photos")
      .then((r) => r.json())
      .then(setPhotos)
  }, []);

  console.log(photos)
  return (
    <div className="App">
      <PhotoHome />
      <PhotoContainer photos={photos}/>
    </div>
  );
}

export default App;
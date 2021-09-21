import { useState, useEffect } from "react";
import PhotoHome  from "./components/PhotoHome";
import PhotoContainer from './components/PhotoContainer';
import {Route, Switch} from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import Theme from './components/Theme'
import PhotoForm from './components/PhotoForm'


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
    <ThemeProvider theme={Theme}>
    
      <Switch>
      <Route 
        path='/home' 
        component={()=> <PhotoHome /> } 
      />
      <Route 
        path='/photoboot' 
        component={()=> <PhotoContainer photos={photos}/> }
      />
      <Route 
        path='/booking' 
        component={()=> <PhotoForm /> }
      />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
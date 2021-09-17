import { useState, useEffect } from "react";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/photos")
      .then((r) => r.json())
      .then(setPhotos)
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;
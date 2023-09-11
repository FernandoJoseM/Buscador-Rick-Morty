import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";
import Loader from "./components/Loader";


function App() {
  const [inputValue, setInputValue] = useState(getRandomNumber(126));
  const numberRandom = getRandomNumber(126);
  const url = `https://rickandmortyapi.com/api/location/${inputValue || 'hola'}`;
  const [location, getLocation, error,loading] = useFetch(url);
  useEffect(() => {
    getLocation();
  }, [inputValue]);
  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim());
    setUser(inputSearch.current.value.trim())
  };

  return (
    <div className="principal_content">
      <h1>Rick & Morty</h1>
        
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text"placeholder="Agrega un numero del 1 al 126" />
        <button>Search</button>
      </form>
      <div>
      {
        loading 
        ?
        <Loader/>
         :(
          <>
          {error ? (
            <h2>❌ Tienes que ingresar un numero de 1 a 126</h2>
          ) : (
            <>
              <LocationInfo location={location} />
              <div className="content">
                {location?.residents.map((url) => (
                  <ResidentCard key={url} url={url} />
                ))}
              </div>
            </>
          )}
          </>
         )
      }
      </div>
     
    </div>
  );
}

export default App;

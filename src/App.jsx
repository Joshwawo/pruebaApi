import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";
import Credits  from "./components/Credits";


function App() {
  const incialUrl = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const fetchData = (url) => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };
  const onPrevious = () => {
    fetchData(info.prev);
  };

  const onNext = () => {
    fetchData(info.next);
  };

  useEffect(() => {
    fetchData(incialUrl);
  }, []);

  return (
    <>
      <Navbar brand={"Rick and Morty "} />

      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} 
        onNext={onNext}
        />

        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} 
        onNext={onNext}
        />
      </div>

      <Credits/>


    </>
  );
}

export default App;

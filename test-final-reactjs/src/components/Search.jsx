import { useEffect, useState } from "react";

function Search() {
  const [dogs, setDogs] = useState("");

  useEffect(() => {
    async function listDogs() {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogs(data.message);
      } catch (error) {
        console.log("Error, no watch a dog", error);
      }
    }
    listDogs()
  }, []);
  
  return (
    <div className="listDogs">
      <img src={dogs} className="img-fluid w-100" />
    </div>
  )
}

export default Search
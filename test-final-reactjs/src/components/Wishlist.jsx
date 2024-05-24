import { useState } from "react";

function Wishlist() {
  const [title, setTitle] = useState("");
  const[studio, setStudio] = useState("");
  const [year, setYear] = useState("");

  const [wish, setWish] = useState([
    { title: "DeadCells", studio: "Motion Twins", year: 2018 },
    { title: "Weird West", studio: "Wolfeyes Studios", year: 2022 },
    { title: "Firewatch", studio: "Campo Santo", year: 2016 },
  ])

  function addGame() {
    setWish([...wish, { title, studio, year }]);
  }

  function deleteGame(index) {
    setWish(wish.filter((_, i) => i !== index));
    setTitle("");
    setStudio("");
    setYear("");
  }

  const listWish = wish.map((wis, index) => (
    <ul key={index} className="listWish">
      <li>{wis.title} is a game developped by {wis.studio} released in {wis.year}</li>
      <button type="button" id="btnDelete" onClick={() => deleteGame(index)}>DELETE</button>
    </ul>
  ))
  
  return (
    <div>
      {listWish}
      <form>
        <input type="text" value={title} placeholder="title" onChange={(event) => setTitle(event.target.value)} required />
        <input type="text" value={studio} placeholder="studio" onChange={(event) => setStudio(event.target.value)} required />
        <input type="text" value={year} placeholder="year" onChange={(event) => setYear(event.target.value)} required />
        <button type="button" id="btnAdd" onClick={() => addGame()}>ADD</button>
      </form>
    </div>
  )
}

export default Wishlist
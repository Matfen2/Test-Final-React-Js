import Immortality from "../assets/picts/immortality.jpg";
import KatanaZero from "../assets/picts/katanaZero.jpg";
import Inscryption from "../assets/picts/inscryption.jpg";
import { useState } from "react";

function Games() {
  const [games] = useState([
    { pict: Immortality, site: "https://store.steampowered.com/app/1350200/IMMORTALITY/?l=french" },
    { pict: KatanaZero, site: "https://store.steampowered.com/app/460950/Katana_ZERO/?l=french" },
    { pict: Inscryption, site: "https://store.steampowered.com/app/1092790/Inscryption/?l=french" }
  ]);

  const listGames = games.map((game, index) => (
    <div key={index} className="col-lg-4">
      <a href={game.site}>
        <img src={game.pict} className="img-fluid w-100" alt={`Image of ${game.site.split('/').slice(-2, -1)[0]}`} />
      </a>
    </div>
  ));

  return (
    <div className="row">
      {listGames}
    </div>
  );
}

export default Games;

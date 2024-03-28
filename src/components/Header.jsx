import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="container">
      <div className="header-container">
        <div>
          <img
            className="logovin"
            src="/src/assets/imgs/logovin.svg"
            alt="vinted"
          />
        </div>

        <div>
          <input
            className="barre"
            value={search}
            type="text"
            placeholder="Recherche des articles"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        <div className="twobutton">
          <button className="inscription" onClick={() => {}}>
            S'inscrire
          </button>
          <button className="connect" onClick={() => {}}>
            Se connecter
          </button>
        </div>
        <div>
          <button className="button3" type="button" onClick={() => {}}>
            Vends tes articles
          </button>
        </div>
      </div>
      <div className="body"></div>
    </div>
  );
};

export default Header;

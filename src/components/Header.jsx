import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
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
          <button className="inscription" onClick={() => navigate("/signup")}>
            S'inscrire
          </button>
          <button className="connect" onClick={() => navigate("/login")}>
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

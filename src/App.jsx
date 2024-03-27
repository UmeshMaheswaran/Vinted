import { useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const [search, setSearch] = useState("");

  return (
    <>
      <div id="root">
        <div className="header-container">
          <div>
            <img
              className="logovin"
              src="/src/assets/imgs/logovin.svg"
              alt="vinted"
            />
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

            <div>
              <button type="button" onClick={() => {}}>
                S'inscrire
              </button>
              <button type="button" onClick={() => {}}>
                Se connecter
              </button>
            </div>
            <div>
              <button className="button3" type="button" onClick={() => {}}>
                Vends tes articles
              </button>
            </div>
          </div>
        </div>
        <div className="body"></div>
      </div>
    </>
  );
}

export default App;

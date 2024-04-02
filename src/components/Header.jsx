import { Link } from "react-router-dom";

const Header = ({ token, search, setSearch, handleToken }) => {
  return (
    <div className="container">
      <div className="header-container">
        <div>
          <Link to="/">
            <img
              className="logovin"
              src="/src/assets/imgs/logovin.svg"
              alt="vinted"
            />
          </Link>
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
        {token ? (
          <button
            className="disconnect"
            onClick={() => {
              handleToken(null);
            }}
          >
            Se déconnecter
          </button>
        ) : (
          <>
            <div className="twobutton">
              <Link to="/signup">
                <button className="inscription">S'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="connect">Se connecter</button>
              </Link>
            </div>

            <div>
              <Link to={token ? "/publish" : "/login"}>
                <button className="button3" type="button">
                  Vends tes articles
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

<div className="home-carre">
  "Prêts à faire du tri dans vos placard ?"
  <button>Commencer à vendre</button>
</div>;

import { useState } from "react";
import axios from "axios";
// import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <main className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="login-block">
          <h1 className="log-title">Se connecter</h1>
          <input
            value={email}
            type="text"
            placeholder="Adresse email"
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <input
            value={password}
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <p className="log-button">
          <button type="submit">Se Connecter</button>
        </p>
        <h2 className="log-link">
          <Link to="/signup">Pas encore de compte ? Incrit-toi !</Link>
        </h2>
      </form>
    </main>
  );
};
export default Login;

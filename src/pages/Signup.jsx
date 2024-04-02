import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = ({ handleToken }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsLetter,
        }
      );
      console.log(response.data);
      handleToken(response.data.token);
      navigate("/");
    } catch (error) {
      // console.log(error.response.data);

      if (error.response.status === 409) {
        setErrorMessage(
          "This email already has an account, please use another one"
        );
      } else if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Please fill in all the fields");
      }
    }
  };

  return (
    <main className="signuppage">
      <h1>S'inscrire</h1>
      <form className="signupform" onSubmit={handleSubmit}>
        <p className="ndc"></p>
        <input
          value={username}
          type="text"
          placeholder="Nom d'utilisateur"
          name="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <p className="mail"></p>
        <input
          value={email}
          type="email"
          placeholder="Email"
          name="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <p className="mdp"></p>
        <input
          value={password}
          type="password"
          placeholder="Mot de passe"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="checkboxform">
          <input
            checked={newsLetter}
            type="checkbox"
            onChange={() => {
              setNewsLetter(!newsLetter);
            }}
          />
          <span>S'inscrire à notre newsletter</span>
        </div>
        <p className="sousphrase">
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politques de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>

        <div className="clic">
          <button type="submit">S'inscrire</button>
          {errorMessage && <p style={{ color: "red" }}> {errorMessage} </p>}
        </div>
      </form>
      <Link to="/login">Tu as déjà un compte ? Connecte-toi !</Link>
    </main>
  );
};
export default Signup;

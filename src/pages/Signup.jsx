import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className="titre">S'inscrire</h1>
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
        <p className="clic">
          <input type="submit" value="S'inscrire" />
        </p>
      </form>
    </>
  );
};

export default Signup;

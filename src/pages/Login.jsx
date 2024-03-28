import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Se connecter</h1>
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

        <input type="submit" value="Se connecter" />
      </form>
    </>
  );
};
export default Login;

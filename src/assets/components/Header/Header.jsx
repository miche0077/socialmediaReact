import { useState } from "react";
import "./header.css";

function Header() {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);
  const [nickname, setNickname] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    const inputName = prompt("Ingrese o seu nombre:");
    if (inputName) {
      setUserName(inputName);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar campos requeridos
    if (!nickname || !idade || !email || !senha) {
      setErrorMessage("Por favor, preencha todos os campos");
      return;
    }

    // Armazenar usuário cadastrado na lista de usuários
    const newUser = {
      nickname,
      idade,
      email,
      senha,
    };
    setUsers([...users, newUser]);

    setNickname("");
    setIdade("");
    setEmail("");
    setSenha("");
    setErrorMessage("");
  };
  return (
    <>
      <header className="head">
        <h1 className="name">Olá, {userName || "Convidado"}</h1>
        <button className="button" onClick={handleClick}>
          Insira o seu nome
        </button>
      </header>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Cadastrar</button>
      </form>
      <div>
        <h2>Usuários Cadastrados:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.nickname}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;

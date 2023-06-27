import { useState } from "react";
import "./Searchstyle.css"
import PropTypes from "prop-types";

function Search({ users }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setSearchResult] = useState(null);
  
    const handleChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const foundUser = users.find(
        (user) => user.nickname.toLowerCase() === searchQuery.toLowerCase()
      );
  
      setSearchResult(foundUser);
    };
  
    return (
        <div>
        <form onSubmit={handleSubmit}>
          <input className="search-container"
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleChange}
          />
          <button className="search-button"type="submit">Buscar</button>
        </form>
  
        {searchResult ? (
          <div className="usuario">
            <h2>Usuario encontrado:</h2>
            <p>Nickname: {searchResult.nickname}</p>
            <p>Idade: {searchResult.idade}</p>
            <p>Email: {searchResult.email}</p>
          </div>
        ) : (
          <p className="error-message">No se encontró el usuario.</p>
        )}
      </div>
    );
}
Search.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        nickname: PropTypes.string.isRequired,
        idade: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
export default Search;

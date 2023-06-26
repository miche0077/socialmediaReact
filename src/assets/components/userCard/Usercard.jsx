import "./styles/userCardStyle.css"
import { useState } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function UserCard({ user }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="user-card">
      <h3 className="user-name">{user.nickname}</h3>
      <p>Idade: {user.idade}</p>
      <p>Email: {user.email}</p>
      <div className="like-container">
        <FontAwesomeIcon className="like-button" icon={faHeart} onClick={handleLike}/>
        <span className="like-count">{likes}</span>
      </div>
    </div>
  );
}
UserCard.propTypes = {
  user: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;

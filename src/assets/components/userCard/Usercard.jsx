import "./styles/userCardStyle.css"
import PropTypes from 'prop-types';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3 className="user-name">{user.nickname}</h3>
      <p>Idade: {user.idade}</p>
      <p>Email: {user.email}</p>
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

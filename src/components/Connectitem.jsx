import PropTypes from "prop-types";
import "./Connectitem.css";

export default function Connectitem({ pic, logoName, handle }) {
  return (
    <div className="card-item">
      <img src={pic} className="user-image" alt="profilePicture" />
      <h4 className="user-name">{logoName}</h4>
      <p className="user-profession">{handle}</p>
      <button className="message-button">Connect</button>
    </div>
  );
}

Connectitem.propTypes = {
  pic: PropTypes.string.isRequired,
  logoName: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
};

import Connectwithme from "./Connectwithme";
import Header from "./Header";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <Header />
      <div className="separator"></div>
      <Connectwithme />
    </div>
  );
}

import "./Header.css"; // We'll create this CSS file
import profilePic from "../assets/pic.jpg";
const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img src={profilePic} alt="Logo" className="logo" />
        </div>
        <div className="heading-div">
          <div className="main-heading">
            codestorywith<span className="highlight1">MIK</span>
          </div>
          <p className="sub-heading">&apos;Aao, story se code likhe&apos;</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

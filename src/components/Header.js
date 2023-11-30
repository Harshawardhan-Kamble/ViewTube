import logo from "../assets/ViewTube.png";
import profile from "../assets/profilepic.png";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <div className="header">
    <div><GiHamburgerMenu/>
      <img className="logo" src={logo} alt="Logo" /></div>
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
        />
        <button className="search-button">
          <FaSearch className="search-icon" />
        </button>
      </div>
      <div>
        <img className="user-picture" src={profile} alt="profilepic"/>
      </div>
    </div>
  );
};
export default Header;

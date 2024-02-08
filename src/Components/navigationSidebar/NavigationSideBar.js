import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import profileImage from "../../assets/new_img1.jpg"
import "./navigation.css";
function NavigationSideBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();
const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
 return (
   <>
    <header className="header-container">
      <button className="nav-btn" onClick={toggleNavbar}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className="user">
        <img src={profileImage} alt="mo. imrankhan"/>
        <h3 className="name">Mohmad Imrankhan</h3>
        <p className="post">front end developer</p>
      </div>
      <div className="share">
            <Link
              to="https://www.instagram.com/imrankhanpathan35/"
              target="_blank"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/imran-khan-pathan-881375265/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link to="https://github.com/pathanimran4373" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
            </Link>
            <Link to="">
              <i className="fa-brands fa-square-whatsapp"></i>
            </Link>
          </div>
      <nav className={`navbar ${isNavOpen ? "responsive_nav" : ""}`} ref={navRef}>
        <Link className="menu" to="/" onClick={toggleNavbar}>
          HOME
        </Link>
        <Link className="menu" to="/about" onClick={toggleNavbar}>
          ABOUT
        </Link>
        <Link className="menu" to="/education" onClick={toggleNavbar}>
          EDUCATION
        </Link>
        <Link className="menu" to="/contact" onClick={toggleNavbar}>
          CONTACT
        </Link>
        <Link className="menu" to="/project" onClick={toggleNavbar}>
          PROJECT
        </Link>
      </nav>
    </header>
   </>
  );
}
export default NavigationSideBar;


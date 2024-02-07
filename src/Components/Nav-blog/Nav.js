// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import "./Nav.css";
// function Nav() {
//   const navRef = useRef();
//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };
//   return (
//     <>
//       <header className="hed">
//         <button className="nav-btn" onClick={showNavbar}>
//           <FaBars />
//         </button>
//         <div className="user">
//           <img src="../../../public/assets/new_img1.jpg" alt="imran" />
//           <h3 className="name">Mohmad Imrankhan</h3>
//           <p className="post">front end developer</p>
//         </div>
//         <nav className="navbar" ref={navRef}>
//           <Link className="menu" to="/">
//             HOME
//           </Link>
//           <Link className="menu" to="about">
//             ABOUT
//           </Link>
//           <Link className="menu" to="education">
//             EDUCATION
//           </Link>
//           <Link className="menu" to="contact">
//             CONTACT
//           </Link>
//           <Link className="menu" to="project">
//             PROJECT
//           </Link>
//           <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//             <FaTimes />
//           </button>
//         </nav>
//       </header>
//     </>
//   );
// }

// export default Nav;
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
   <>
    <header className="hed">
      <button className="nav-btn" onClick={toggleNavbar}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className="user">
        <img src="../../public/myAssets/imageFolder/new_img.jpg" alt="mo. imrankhan"/>
        <h3 className="name">Mohmad Imrankhan</h3>
        <p className="post">front end developer</p>
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

export default Nav;


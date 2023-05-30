// import { NavLink,useNavigate } from "react-router-dom";
import CustomLink from "../../components/CustomLink";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://rustedmindx.web.app/static/media/white-logo.6d7a1ca5eee28fa62a9a.png"
          alt=""
        />
      </div>
      <ul className="navigation">
        <li>
          <CustomLink to="/">Home</CustomLink>
        </li>
        <li>
          <CustomLink to="/works">Works</CustomLink>
        </li>
        <li>
          <CustomLink to="/contact">Contact me</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

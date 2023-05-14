import CustomLink from "../../components/CustomLink";

function RightNav() {
  return (
    <nav className="right-nav">
      <CustomLink className="nav-link" to="/">
        Home
      </CustomLink>
      <CustomLink className="nav-link" to="/works">
        works
      </CustomLink>
      <CustomLink className="nav-link" to="/contact">
        Contact Me
      </CustomLink>
    </nav>
  );
}

export default RightNav;

import { useEffect, useState } from "react";
import CustomLink from "../../components/CustomLink";

function RightNav({ refs }: PropsType) {
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    const eff = function () {
      setScrolled(
        refs.current?.scrollTop && refs.current?.scrollTop > 50
          ? refs.current?.scrollTop
          : 0
      );
    };
    refs.current?.addEventListener("scroll", eff);
    return () => {
      refs.current?.removeEventListener("scroll", eff);
    };
  }, [refs]);
  return (
    <nav
      className="right-nav"
      // style={{ transform: `translateY(${scrolled}px)` }}
    >
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

type PropsType = {
  refs: React.RefObject<HTMLDivElement>;
};

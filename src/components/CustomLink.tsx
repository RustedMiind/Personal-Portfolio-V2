import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../contexts/PageContext";

export default function CustomLink({ to, children, ...otherProps }: PropsTyps) {
  const [, dispatch] = useContext(Context);
  const history = useNavigate();
  function delayAndGo(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();

    dispatch({ type: "SET_LOADING" });

    setTimeout(() => {
      history(to);
      dispatch({ type: "SET_NOT_LOADING" });
    }, 800);
  }

  return (
    <Link to={to} onClick={delayAndGo} {...otherProps}>
      {children}
    </Link>
  );
}

interface PropsTyps extends React.AnchorHTMLAttributes<{}> {
  to: string;
}

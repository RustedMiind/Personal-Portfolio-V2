import { useEffect } from "react";

function PopupAction(props: PropsType): JSX.Element {
  useEffect(() => {
    setTimeout(props.action, props.delay);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 101,
        width: "100vw",
        height: "100vh",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </div>
  );
}

export default PopupAction;

type PropsType = {
  children: JSX.Element | string;
  active?: boolean;
  delay?: number;
  action: () => any;
};

import "./loading-popup.scss";

function LoadingPopup(props: PropsType) {
  return (
    <div className="loading-popup">
      <div className="content">
        <div className="loading-word">{props.word || "Loading"}</div>
      </div>
    </div>
  );
}

export default LoadingPopup;

type PropsType = {
  word?: string;
};

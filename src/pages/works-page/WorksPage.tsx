import RightNav from "./RightNav";
import WorksContainer from "./WorksContainer";
import "./works-page.scss";

function WorksPage(props: PropsType) {
  return (
    <div className="works-page">
      <RightNav refs={props.refs} />
      <WorksContainer />
    </div>
  );
}

export default WorksPage;

type PropsType = {
  refs: React.RefObject<HTMLDivElement>;
};

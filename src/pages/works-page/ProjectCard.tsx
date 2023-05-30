function ProjectCard({ card }: PropsType) {
  return (
    <div className="card" style={{ backgroundImage: `url("${card.image}")` }}>
      <div className="content">
        <h2>{card.name}</h2>
        <p>{card.discription}</p>
        <div className="controls">
          {card.deployed && (
            <a target="_blank" rel="noreferrer" href={card.deployed}>
              Explore
            </a>
          )}
          {card.github && (
            <a target="_blank" rel="noreferrer" href={card.github}>
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

type PropsType = {
  card: ProjectType;
};

export type ProjectType = {
  name: string;
  discription: string;
  image: string;
  github?: string;
  deployed?: string;
  _id: string;
};

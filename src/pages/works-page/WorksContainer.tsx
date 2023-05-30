import { useEffect, useState } from "react";
import ProjectCard, { ProjectType } from "./ProjectCard";
import axios from "axios";
import ServerPath from "../../middlwares/ServerDomain";
import LoadingPopup from "../../components/LoadingPopup";
function WorksContainer() {
  useEffect(() => {
    setIsLoading(true);
    axios
      .get<ProjectType[]>(ServerPath("/projects/all"))
      .then((response) => {
        console.log(response.data);
        setIsLoading(false);
        setProjects(response.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setProjects("Error Fetshing Projects");
      });
  }, []);
  const [projects, setProjects] = useState<
    "Error Fetshing Projects" | null | ProjectType[]
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="works-container">
      <div className="headers">
        <h2>My Latest Projects</h2>
        {isLoading && <LoadingPopup />}
      </div>
      <div className="projects-cards-container">
        {projects && projects.length && typeof projects == "object" ? (
          projects.map((project) => (
            <ProjectCard
              key={project._id}
              card={{
                name: project.name,
                discription: project.discription,
                github: project.github,
                image: project.image,
                deployed: project.deployed,
                _id: project._id,
              }}
            />
          ))
        ) : (
          <h1>{projects?.toString()}</h1>
        )}
      </div>
    </div>
  );
}

export default WorksContainer;

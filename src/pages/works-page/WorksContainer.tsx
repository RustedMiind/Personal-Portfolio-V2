import { useEffect, useState } from "react";
import ProjectCard, { ProjectType } from "./ProjectCard";
import axios from "axios";
import ServerPath from "../../middlwares/ServerDomain";
import LoadingPopup from "../../components/LoadingPopup";
function WorksContainer() {
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get<ProjectType[]>(ServerPath("/projects/all"))
  //     .then((response) => {
  //       console.log(JSON.stringify(response.data));
  //       setIsLoading(false);
  //       setProjects(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsLoading(false);
  //       setProjects("Error Fetshing Projects");
  //     });
  // }, []);
  const [projects, setProjects] = useState<
    "Error Fetshing Projects" | null | ProjectType[]
  >(data);
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

const data = [
  {
    _id: "647647dd091abde0aa0c96cd",
    name: "Spotify Clone",
    discription: "Virtual Version from Spotify",
    image: "./img/spotify_clone_project.png",
    github: "https://github.com/RustedMiind/Spotify-Clone",
    deployed: "https://spotify-clonex.web.app/",
    __v: 0,
  },
  {
    _id: "647648ee091abde0aa0c96d6",
    name: "Shery Art Craft",
    discription: "Handmade products website",
    image: "./img/handmade_accessories_project.png",
    github: "https://github.com/RustedMiind/shery-art-craft",
    deployed: "https://handmade-accessories.web.app/",
    __v: 0,
  },
  {
    _id: "647648fc091abde0aa0c96da",
    name: "React Components Library",
    discription:
      "Fully Responsive Dynamic React components to use in your project",
    image: "./img/components",
    github: "https://github.com/RustedMiind/React-Components",
    __v: 0,
  },
  {
    _id: "64764904091abde0aa0c96de",
    name: "ordery",
    discription: "MERN-stack ordering application",
    image: "./img/ordery",
    github: "https://github.com/RustedMiind/ordery-backend",
    __v: 0,
  },
];

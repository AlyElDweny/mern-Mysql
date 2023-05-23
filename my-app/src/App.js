import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import ProjectCard from "./Components/ProjectCard";
import ProjectFrom from "./Components/ProjectFrom";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    try {
      const response = await axios.get("http://localhost:4000/apis/projects/");
      response.data && setProjects(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div>
        <h2>Availabe Projects: </h2>
        <div>
          {projects && projects.length >= 1 ? (
            projects.map((project) => {
              return <ProjectCard project={project} key={project.id} />;
            })
          ) : (
            <div>
              There is no Project for now, you can insert your first Project.
            </div>
          )}
        </div>
      </div>
      <br />
      <br />
      <ProjectFrom projects={projects} setProjects={setProjects} />
    </div>
  );
}

export default App;

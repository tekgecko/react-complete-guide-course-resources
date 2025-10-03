import { useState } from "react";
import Sidebar from "./Sidebar";
import ProjectView from "./ProjectView";
import NoProject from "./NoProject";
import NewProject from "./NewProject";

function App() {
  const [selectedPage, setSelectedPage] = useState("no-project");
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Learn react!",
      desc: "Learn react really well",
      goals: [
        { name: "Be a don", complete: true },
        { name: "Maximum pwnage", complete: false },
        { name: "profit", complete: false },
      ],
    },
    {
      id: 2,
      name: "Learn python",
      desc: "Learn python really well",
      goals: [
        { name: "do stuff", complete: true },
        { name: "do more stuff", complete: false },
        { name: "profit", complete: false },
      ],
    },
    {
      id: 3,
      name: "Do a kickflip",
      desc: "Do a kickflip broh!",
      goals: [
        { name: "Get a board", complete: true },
        { name: "Git gud", complete: false },
        { name: "profit", complete: false },
      ],
    }
  ]);
  const [selectedProject, setSelectedProject] = useState(null);

  function newProject() {
    setSelectedPage("new-project");
    setSelectedProject(null);
  }

  function switchProject(id) {
    setSelectedPage("project-view");
    const displayProject = projects.find((project) => project.id === id);
    setSelectedProject(displayProject);
  }

  function addTask(taskName) {
    setProjects(projects =>
      projects.map((project) => {
        if (project.id === selectedProject.id) {
          return {
            ...project,
            goals: [...project.goals, { name: taskName, complete: false }],
          };
        }
        return project;
      })
    );
  }

  let content;
  if (selectedPage === "no-project") {
    content = <NoProject />;
  } else if (selectedPage === "new-project") {
    content = <NewProject />;
  } else if (selectedPage === "project-view" && selectedProject) {
    content = <ProjectView selectedProject={selectedProject} addTask={addTask} />;
  }

  return (
    <main className="flex">
      <Sidebar newProject={newProject} projects={projects} switchProject={switchProject} />
      {content}
    </main>
  );
}

export default App;

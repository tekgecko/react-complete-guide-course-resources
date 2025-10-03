import {React, useState} from "react";
import Sidebar from "./Sidebar";
import ProjectView from "./ProjectView";
import NoProject from "./NoProject";

function App() {
  const [selectedPage, setSelectedPage] = useState("no-project");

  function switchProject() {
    console.log("Switching project...");
  }

let content;
  if (selectedPage === "no-project") {
    content = <NoProject />;
  }

  return (
    <main className="flex">
      <Sidebar switchProject={switchProject}/>
      {content}
    </main>
  );
}

export default App;

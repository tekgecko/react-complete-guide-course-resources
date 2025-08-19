import React from "react";
import { useState } from "react";

function App() {
  
  let titles = ["React Basics", "State and Lifecycle", "Events", "Conditional Rendering", "Lists"]
  const [title, setTitle] = useState("React Essentials");
  function handleClick() {
    setTitle(titles[Math.floor(Math.random() * titles.length)] || "React Essentials");
  }

  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>{title}</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <button onClick={handleClick}>Hello</button>
      </main>
    </div>
  );
}

export default App;

import { React, useState, useRef } from "react";

export default function ProjectView({ selectedProject, addTask }) {
  let taskInputRef = useRef();


  function handleAdd() {    
    addTask(taskInputRef.current.value);
    }


  return (
    <main className="flex-1 p-6">
      <h1 className="text-3xl font-bold mb-4">{selectedProject.name}</h1>
      <p className="mb-6">{selectedProject.desc}</p>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Tasks</h2>
        <input
          type="text"
          style={{ borderWidth: "2px", marginRight: "5px" }}
          ref={taskInputRef}
        ></input>
        <button onClick={handleAdd} className="">Add Task</button>
        <div
          style={{
            display: "f lex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          {selectedProject.goals.map((goal, index) => (
            <div key={index} style={{ marginBottom: "5px" }}>
              <input
                type="checkbox"
                style={{ marginRight: "5px" }}
                checked={goal.complete}
              />
              {goal.name}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

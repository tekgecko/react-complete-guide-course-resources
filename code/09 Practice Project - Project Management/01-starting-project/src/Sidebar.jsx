import NewProject from "./NewProject";

export default function Sidebar({ newProject, projects, switchProject }) {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Projects</h2>
      <button
        onClick={newProject}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-6"
      >
        + New Project
      </button>
      <nav>
        <ul className="">
          <li className="mb-2">
            {projects.map((project) => (
              <li key={project.id} className="hover:underline" onClick={() => switchProject(project.id)}>
                {project.name}
              </li>
            ))}
          </li>
        </ul>
      </nav>
    </aside>
  );
}

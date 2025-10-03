export default function Sidebar({switchProject}) {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Projects</h2>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-6">
        + New Project
      </button>
      <nav>
        <ul className="">
          <li className="mb-2" onClick={switchProject}>
            <a href="#" className="hover:underline">
              Learn react
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:underline">
              Master python
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

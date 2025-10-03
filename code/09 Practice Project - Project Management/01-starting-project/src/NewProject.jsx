export default function NewProject() {
    return (
        <main className="flex-1 p-6">
            <h1 className="text-3xl font-bold mb-4">Create New Project</h1>
            <p className="mb-6">This is where you can create a new project.</p>
            <input type="text" style={{borderWidth: "2px", marginRight: "5px"}} placeholder="Project Name"></input>
            <button className="">Create Project</button>
        </main>
    );
}       
    
import Image from '/src/assets/no-projects.png';

export default function NoProject() {
    return (
        <main className="flex-1 p-6">

            <h1 className="text-3xl font-bold mb-4">No Project Selected</h1>
            <p className="mb-6">Please select a project from the sidebar or create a new one.</p>
            <img src={Image} alt="No Projects" className="mx-auto" style={{maxWidth: "100px"}} />
        </main>
    );
}

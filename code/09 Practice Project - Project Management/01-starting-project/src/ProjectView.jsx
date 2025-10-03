export default function ProjectView() {
    return (
        <main className="flex-1 p-6">

            <h1 className="text-3xl font-bold mb-4">Project Title</h1>
            <p className="mb-6">This is where the project details will go.</p>
            <section>
                <h2 className="text-2xl font-semibold mb-2">Tasks</h2>
                <input type="text" style={{borderWidth: "2px", marginRight: "5px"}}></input>
                <button className="">Add Task</button>
                <div style={{display: "flex", flexDirection: "column", marginTop: "10px"}}>                    
                    <div><input type="checkbox" style={{marginRight: "5px"}}/>Task 1 </div>
                    <div><input type="checkbox" style={{marginRight: "5px"}}/>Task 2 </div>
                    <div><input type="checkbox" style={{marginRight: "5px"}}/>Task 3 </div>

</div>
            </section>  
        </main> 
    );  
}   

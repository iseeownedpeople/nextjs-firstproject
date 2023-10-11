import { prisma } from "@/app/libs/prisma"
import AddTask from "@/src/components/ButtonRedirectFloat";
import TaskCard from "@/src/components/TaskCard";
import DeleteTask from "@/src/components/ButtonRedirect";

async function loadTasks() {
    /*  const res = await fetch('http://localhost:3000/api/tasks') //direccion completa porque es primero
     const data = await res.json()
     console.log(data) */
    return await prisma.task.findMany()
}

async function HomePage() {
    const tasks = await loadTasks()
    return (
        <section>
            <div className="grid grid-cols-5 gap-4 m-5 text-white font-bold">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task}/>
                   ))}
                    <AddTask name="+" params="/view/tasks/" />
                    
            </div>
     
        </section>
    )
}

export default HomePage;
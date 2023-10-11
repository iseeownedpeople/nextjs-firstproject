"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
function NewPage({ params }) {
    const router = useRouter()
    const [titulo, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (params.id) {
            fetch(`/api/tasks/${params.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setTitle(data?.titulo)
                    setDescription(data?.description)
                })
        }
    }, []) //sin el [] se rompe la insercion de datos

    const onSubmit = async (e) => {
        e.preventDefault()
        if (params.id) {
            const res = await fetch('/api/tasks/' + params.id, {
                method: 'PUT',
                body: JSON.stringify({ titulo, description }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data)
        } else {
            const res = await fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify({ titulo, description }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data)

        }
        router.refresh()
        router.push("/view/tasks/get")
    }

    return (
        <form className=" bg-slate-600 p-20 m-5 rounded-xl " onSubmit={onSubmit}>
            <div className="flex items-center justify-start"> 
                <label htmlFor="titulo" className="font-bold p-5">
                    Título
                </label>
                <div> 
                    <input type="text"
                        id="titulo"
                        className=" text-black flex border border-black"
                        placeholder="Título de tarea"
                        onChange={(e) => setTitle(e.target.value)}
                        value={titulo}
                    >
                    </input>
                </div>
                <label htmlFor="description" className="font-bold p-5">
                    Descripcion
                </label>
                <div> 
                    <textarea rows="3"
                        id="description"
                        className="text-black border border-black"
                        placeholder="Descripcion de tarea"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    ></textarea> 
                </div> 
            </div>  
            <button type="submit"
                className="bg-blue-500 hover:bg-green-700 text-white font-bold  p-5 m-5 rounded"
            >Crear</button>
        </form>

        
    )
}

export default NewPage;

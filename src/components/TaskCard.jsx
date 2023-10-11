'use client';
import React from 'react'
import { useParams } from "next/navigation"
import { useRouter } from 'next/navigation' 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

function TaskCard({ task }) {
    const router = useRouter()
    return (
        <div className="bg-slate-600 p-3 hover:bg-slate-900 rounded-xl"
        onClick={() => {
            router.push("/view/tasks/edit/" + task.id)
        }}>
            <h3 className='m-10'>{task.titulo}</h3>
            <p  className='m-10'>{task.description}</p>
        </div> 

        
    )
}


export default TaskCard

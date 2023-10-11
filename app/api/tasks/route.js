import {NextResponse} from "next/server"
import {prisma} from "@/app/libs/prisma"
export async function GET(request, {params}) {
    const task = await prisma.task.findMany() 
    return NextResponse.json(task)
}

export async function POST(request) {
    const {titulo, description} = await request.json() 
    const task = await prisma.task.create({
        data: {
            titulo,
            description
        }
    })
    return NextResponse.json(task)
}
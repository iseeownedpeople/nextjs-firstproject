import {NextResponse} from "next/server"
import {prisma} from "@/app/libs/prisma"

export async function GET(request, {params}) {
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(task)
}


export async function PUT(request, {params}) {
    const data = await request.json()
    const task = await prisma.task.update({
        where: {
            id: Number(params.id)
        }, 
        data: data
    })
    return NextResponse.json(task)
}

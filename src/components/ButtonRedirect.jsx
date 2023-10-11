'use client';
import React from 'react'
import {useParams} from "next/navigation"
import { useRouter } from 'next/navigation'

function ButtonRedirect({name, params}) {
    const router = useRouter()
    return (
        <section>
            <button className='bg-sky-400 px-3 py-2 rounded-md'
                onClick={() => {
                    router.push(params)
                }}> 
                {name}
            </button>
        </section>
    )
}

export default ButtonRedirect;
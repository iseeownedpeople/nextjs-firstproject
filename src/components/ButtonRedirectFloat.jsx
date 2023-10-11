'use client';
import React from 'react' 
import { useRouter } from 'next/navigation'

function ButtonRedirectFloat({name, params}) {
    const router = useRouter()
    return (
        <section>
            <button  class='fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-green-700 hover:drop-shadow-2xl hover:animate-bounce duration-300'
                onClick={() => {
                    router.push(params)
                }}
                >
                {name}
            </button>
        </section>
    )
}
 
export default ButtonRedirectFloat
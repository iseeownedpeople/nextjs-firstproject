'use client';
import React from "react"
import { useRouter } from "next/navigation"

function page() {
    const router = useRouter()
    return (
        <section>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error provident molestias unde ut accusamus cupiditate deleniti esse, eos cum rem sed eveniet, aperiam exercitationem quam perferendis! Nulla, tempora, modi possimus unde provident officia velit, facilis consequuntur est aperiam tenetur aliquid commodi mollitia id aliquam similique hic laborum distinctio perspiciatis iure?
            </p>
            <button className='bg-sky-400 px-3 py-2 rounded-md'
                onClick={() => {
                    //podemos ejecutar logica previamente antes del push *componente cliente
                    router.push('/')
                }}> 
                Click
            </button>
        </section>
    )
}

export default page

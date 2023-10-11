"use client"; //para usar el hook navigator, client side
import React from 'react'
import {useParams} from "next/navigation"

async function page(/* {params} */) { //sin usar params directo podemos usar el hook de useParams 
  const params = useParams() //instanciamos el hook
  console.log(params)
  const user = await getUser(params.id)
  return (
    <div className="bg-slate-900 p-10 rounded-md m-10"> 
      <img src={user.avatar} className="m-auto my-4 rounded-full" />
      <h3 className="font-bold text-3xl text-white">{user.id}. {user.first_name} {user.last_name} </h3>
      <p>Email : {user.email}</p>
    </div>
  )
}

async function getUser(id){
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
}

export default page

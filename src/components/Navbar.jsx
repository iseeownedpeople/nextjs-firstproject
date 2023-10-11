import Link from "next/link" 
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ModeToggle";

 
function Navbar() { 
  return (
    <nav className=" bg-slate-800 flex justify-center font-bold text-white">
      <ul >
        <Link className="m-10" href="/">
          - Home 
        </Link>
      </ul> 
      <ul >
        <Link className="m-10" href="/view/users">
          - Users 
        </Link>
      </ul>
      <ul>
        <li>
          <Link className="m-10" href="/about">
          - About 
          </Link>
        </li>

      </ul>
      <ul>
        <li>
          <Link className="m-10" href="/view/tasks/get">
          - Tasks 
          </Link>
        </li>
      </ul>

      <ul>
        <li>
        <UserButton afterSignOutUrl="/"/>
        </li>
      </ul>
     
     
      <ul>
        <li>
        <ModeToggle/>
        </li>
      </ul>
     

    </nav>
    
  )
}

export default Navbar

import Link from "next/link";
function Users({ users }) {
    return (
        <div >
            {users.map(user => (
                <Link href={`users/${user.id}`} key={user.id}>
                    <div className="flex items-center hover:bg-slate-900 hover:cursor-pointer"> 
                        <img src={user.avatar} className="rounded-full" />
                        <div className="m-10">
                            <h5 className="font-bold text-white">{user.id}. {user.first_name} {user.last_name}</h5>
                            <p>{user.email}</p>
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    )
}

export default Users;

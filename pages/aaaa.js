import { getSession, signOut } from "next-auth/react";
import { useSession } from 'next-auth/react' 
import Image from "next/image";
import { useRouter } from "next/navigation";

function IndexPage() {
  const {data: session, status} = useSession()
  const router = useRouter()
/*   if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'unauthenticated'){
    router.push('api/auth/signin')
  } */
  return ( 
      <div>
        {session?.user ? (
          <div>
            <h1>{session.user.name}</h1>

            <p>{session.user.email}</p>
            <Image
              src={session.user.image}
              alt={session.user.name}
              width={30}
              height={30}
            />

            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          <h1>skeleton</h1>
        )}
      </div> 
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default IndexPage;

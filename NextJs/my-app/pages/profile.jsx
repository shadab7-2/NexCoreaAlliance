import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function profile(){
    const {data , status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if(status === "unauthenticated"){
            router.push("/login");
        }
    }, [status, routerr]);

    if(status === "loading"){
        return <p>Loading....</p>;
    }

return(
    <div>
        <h1>User Profile</h1>
        <p>Welcome, <b>{data.user.email}</b>!</p>
        <p>This is protected page. You can only see this if you are logged in .</p>
        <button onClick={()=> signOut({callbackUrl: "/login"})}>Logout</button>
    </div>
)

}
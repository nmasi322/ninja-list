import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            // router.go("/")
            router.push("/")
        }, 3000);
    }, [])
    return ( 
        <div className="text-center my-20">
            <h1 className="text-3xl md:text-4xl my-5">Oooooooops....</h1>
            <h2 className="text-2xl ">That page cannot be found</h2>
            <p className="text-gray-500 my-2">Go back to the <Link href='/'>Home page</Link></p>
        </div>
     );
}
 
export default NotFound;
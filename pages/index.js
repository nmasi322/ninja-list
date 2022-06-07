import Link from "next/link";
import Head from "next/head"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninjalist | Home</title>
      </Head>
      <div className="text-center my-10">
        <h1 className='text-purple-500 font-bold capitalize'>home page</h1>
        <p>my name is divine</p>
        <div className="my-5">
          <Link href='/ninjas'><a className="bg-blue-500 py-3 px-5 rounded-md text-white">See Ninja Listing</a></Link>
        </div>
      </div>
    </>
  )
}

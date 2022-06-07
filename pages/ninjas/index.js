import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
// fetching data
export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    return {
        props: {
            ninjas: data
        }
    }
}

const Index = ({ninjas}) => {
  return (
    <>
        <Head>
            <title>Ninjalist | Ninjas</title>
        </Head>
        <div>
            <div className='font-bold text-center text-2xl md:text-3xl py-8'>All ninjas</div>
            {
                ninjas.map(ninja => {
                    return (
                    <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
                    <div className='py-2 px-4 my-5 mx-3 border-l-8 border-l-white hover:cursor-pointer hover:border-l-gray-600'>
                        <a>
                            <h3 className='my-3'>{ninja.name}</h3>
                        </a>
                    </div>
                    </Link>
                    )
                })
            }
        </div>
    </>
  )
}

export default Index
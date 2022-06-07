import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <div className='px-7 md:px-10'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
    
  )
}

export default MyApp

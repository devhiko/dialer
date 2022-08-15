import '../styles/globals.css'
import '../scss/custom.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <title>Dialer</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout >
    </>
  )
}

export default MyApp

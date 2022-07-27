import Head from 'next/head'
import Hero from '../components/hero'
import Card from '../components/card'

export default function Home() {
  return (
    <>
    <Head>
      <title>Toll Plaza</title>
    </Head>
    <div className="mainbg min-w-full min-h-screen">
      <Hero />
      <Card />
    </div>
    </>
  )
}

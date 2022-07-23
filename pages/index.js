// import Head from 'next/head'
// import Image from 'next/image'
import Hero from '../components/hero'
import Card from '../components/card'

export default function Home() {
  return (
    <>
    <div className="mainbg min-w-full min-h-screen">
      <Hero />
      <Card />
    </div>
    </>
  )
}

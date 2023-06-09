import Head from 'next/head'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

import Navbar from 'layout/Navbar'

// Import Views
import Landing from "views/landing";
import About from "views/about";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>First Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full bg-black-blue'>
        <Navbar></Navbar>
        <Landing></Landing>
        <About></About>
      </div>
    </>
  )
}

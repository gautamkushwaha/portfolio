import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Link from 'next/link';
import Cards from './Gautam/Cards'
import Contacts from './Gautam/Contact'
import Experience from './Gautam/Experience'
import Projects from './Gautam/Projects'
import Technology from './Gautam/Technology'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head >
        <title>GautamKushwaha | Home</title>
        <meta name="keywords" content="gautam" />
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>

{/* //introduction */}

      <div className=" w-[100vw] bg-black relative " id="about">
     
      <div className="w-[100%] my-[150px] flex-col flex md:flex-row items-center justify-between ">
        <div className="md:w-1/3  md:mx-[60px]">
          <h1 className=" font-bold text-white">
            <img className=" w-[80%] md:w-[80%] h-[80%] md:h-[80%] mb-5  mx-auto hover:scale-110 transition duration-500 ease-in-out " src="gautam.jpeg" />
          </h1>
        </div>
        <div className="w-2/3 mx-[60px]">
          <h2 className=" text-indigo-300 font-bold">Hello I am Gautam Kushwaha</h2>
          <h2 className="text-white font-bold text-5xl pt-4">
            Web Developer
          </h2>
          <p className="text-white p-2 mb-3" >
            {" "}
            I'm a skilled programmer with experience in front-end and back-end development. I'm passionate about programming and always eager to learn more. With strong expertise and a proven track record of delivering results, I'm available to join your team or provide teaching services. Let's work together to achieve your programming goals!{" "}
          </p>
          <Link className='bg-indigo-500 hover:bg-blue-700 text-black p-2 m-2 rounded' href="https://docs.google.com/document/d/1OcWXc0hmOkncq8Usz51p_25E9km7vNv8QlIZvaN59Ic/edit#heading=h.5rf9wr4r3no2">Resume</Link>
        </div>
      </div>
    </div>
    <Cards/>
   <Experience/>
   <Technology/>
   <Projects/>
   <Contacts/>
    </>
  )
}



import React from "react";
import { CgWebsite } from 'react-icons/cg';
import {SiGoogleoptimize} from 'react-icons/si';
import {TfiWrite} from 'react-icons/tfi';
import Link from 'next/link';

import styles from '@/styles/Home.module.css';

export default function Cards() {
  return (
    <div className="w-[100vw] bg-black mx-auto my-auto">
    <div className=" w-[90%] m-auto gap-8 flex-col flex md:flex-row flex-5 items-center justify-center ">
        {/* cards start here */}

        <div className="w-[80%] bg-gray-800 hover:bg-gray-900 md:w-[50%]  mb-[20px] mx-auto md:mx-[10px]">
            <div className=" md:w-[75%] my-6 item-blue-500 ml-[20px]">
                <CgWebsite size={50} className="text-white " />
            </div>
            <div>
                <h2 className="text-white font-bold text-xl ml-[20px]">
                   Web Developer
                </h2>
                <br />
            </div>
            <div className="text-white ml-[20px]">
                <p clasaName="">
                   
I am a web developer with expertise in building dynamic and user-friendly websites, expert in MERN stack.
                </p>
                <p className="mt-10 p-2"> <Link href="/Gautam/About" target="_blank" rel="noopener noreferrer">
      Know more
    </Link></p>
            </div>
        </div>
        <div className=" w-[80%]  bg-gray-800 hover:bg-gray-900 md:w-[50%]  mb-[20px] mx-auto md:mx-[10px]">
            <div className=" md:w-[75%] my-6 item-blue-500 ml-[20px]">
                <SiGoogleoptimize size={50} className="text-white " />
            </div>

            <div>{/* <img src={} alt=""/> */}</div>
            <div>
                <h2 className="text-white font-bold text-xl ml-[20px]">
                 SEO Analyser
                </h2>
                <br />
            </div>
            <div className="text-white ml-[20px]">
                <p clasaName="">
                   
As an SEO analyzer, I specialize in evaluating and optimizing websites to improve their search engine rankings and visibility.
                </p>
                <p className="mt-10 p-2"> <Link href="/Gautam/SEO" target="_blank" rel="noopener noreferrer">
      Know more
    </Link></p>
            </div>
        </div>
        <div className="w-[80%] bg-gray-800 hover:bg-gray-900 md:w-[50%]  mb-[20px] mx-auto md:mx-[10px]">
            <div className=" md:w-[75%] my-6 item-blue-500 ml-[20px]">
                <TfiWrite size={50} className="text-white " />
            </div>

            <div>{/* <img src={} alt=""/> */}</div>
            <div>
                <h2 className="text-white font-bold text-xl  ml-[20px]">
                   Content Writer
                </h2>
                <br />
            </div>
            <div className="text-white ml-[20px]">
                <p clasaName="">
                    As a content writer, I craft compelling and engaging written material that captivates audiences and effectively communicates messages.
                </p>
                {/* <Link className='mx-3' href="#about"><div>About</div></Link> */}
                <p className="mt-10 p-2"> <Link href="Gautam/Content" target="_blank" rel="noopener noreferrer">
      Know more
    </Link></p>
            </div>
        </div>
    </div>
</div>
  )
}


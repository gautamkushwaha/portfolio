
import React from "react";
import Link from 'next/link'
import ram from "public/Rama .jpeg";

import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaLinkedin,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-[100vw]">
            <div className="w-[100%]">
                <div className=" flex justify-around p-2">
                    <div className="mx-100 mt-[50px]">
                        <ul className="flex text-white">
                            <Link className="m-3" href="/">Home</Link>
                            <Link className="m-3" href="Gautam/Projects"> Project</Link>
                            <Link className="m-3" href="Gautam/About">About</Link>
                            <Link className='m-3' href="/Gautam/Contact">Contact</Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" w-[100vw] shadow shadow-sky-50 p-5 m-1">

                <div className=" flex justify-around ">
                    <uL className="flex  text-center text-white gap-5">
                        <Link href="https://github.com/pdkkg">
                            <p target="_blank" rel="noopener noreferrer">
                                <FaGithubSquare  size={30} className="text-white hover:text-blue-600"/>
                            </p>
                        </Link> 
                        <Link href="https://www.linkedin.com/in/yourprofile/">
                            <p target="_blank" rel="noopener noreferrer">
                                <FaLinkedin  size={30} className="text-white hover:text-blue-600"/>
                            </p>
                        </Link> 
                         <Link href="hhttps://twitter.com/GAUTAMK50285656">
                            <p target="_blank" rel="noopener noreferrer">
                                <FaTwitterSquare  size={30} className="text-white hover:text-blue-600"/>
                            </p>
                        </Link> 
                        <Link href="https://www.instagram.com/gautamm__1234/">
                            <p target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} className="text-white hover:text-blue-600"/>
                            </p>
                        </Link> 
                    <Link href="https://www.facebook.com/gautamkushwahag/">
                            <p target="_blank" rel="noopener noreferrer">
                                <FaFacebookSquare  size={30} className="text-white hover:text-blue-600"/>
                            </p>
                        </Link> 
                       
                       
                       
                        
                        {/* <Link href="https://www.linkedin.com/in/yourprofile/">
                            <p target="_blank" rel="noopener noreferrer">
                                <FaLinkedin  size={30} className="text-white"/>
                            </p>
                        </Link> */}
                    </uL>
                </div>
            </div>
        </div>
    );
}
